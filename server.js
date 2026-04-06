const http = require("http");
const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");
const { URL } = require("url");

function loadDotEnv() {
  const envPath = path.join(__dirname, ".env");
  if (!fs.existsSync(envPath)) {
    return;
  }

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      return;
    }

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) {
      return;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    if (key && !process.env[key]) {
      process.env[key] = value;
    }
  });
}

loadDotEnv();

const HOST = "0.0.0.0";
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, "public");
const DEFAULT_LANG = "ja";
const SUPPORTED_LANGS = ["ja", "en", "zh", "ar", "es"];
const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const SUPABASE_ENABLED = Boolean(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY);

const baseSpaces = [
  {
    id: "x-talk",
    icon: "#",
    localized: {
      ja: { name: "X", description: "SNS、トレンド、ネット文化の話を気軽にできるスペース" },
      en: { name: "X", description: "A space for social trends, internet culture, and casual online talk." },
      zh: { name: "X", description: "一个可以轻松聊社交趋势、网络文化和热门话题的空间。" },
      ar: { name: "X", description: "مساحة للنقاش حول الاتجاهات الاجتماعية وثقافة الإنترنت والأحاديث الخفيفة." },
      es: { name: "X", description: "Un espacio para hablar de tendencias sociales, cultura de internet y temas virales." },
    },
    tags: ["x", "sns", "twitter", "trend", "trending", "トレンド", "ネット", "社交", "اتجاهات", "tendencias"],
  },
  {
    id: "music-lounge",
    icon: "♪",
    localized: {
      ja: { name: "音楽", description: "好きな曲やアーティストをゆるく共有する音楽スペース" },
      en: { name: "Music", description: "A lounge for sharing songs, artists, and what you are listening to now." },
      zh: { name: "音乐", description: "一个分享歌曲、歌手和正在听的音乐的空间。" },
      ar: { name: "الموسيقى", description: "مساحة لمشاركة الأغاني والفنانين وما تستمع إليه الآن." },
      es: { name: "Musica", description: "Un lounge para compartir canciones, artistas y lo que escuchas ahora." },
    },
    tags: ["music", "song", "artist", "音楽", "曲", "音乐", "اغاني", "musica"],
  },
  {
    id: "game-match",
    icon: "◎",
    localized: {
      ja: { name: "ゲーム", description: "最近遊んでいるゲームや配信について話せるスペース" },
      en: { name: "Gaming", description: "Talk about games you play, streamers you watch, and favorite genres." },
      zh: { name: "游戏", description: "聊你最近在玩的游戏、主播和喜欢的类型。" },
      ar: { name: "الالعاب", description: "تحدث عن الالعاب التي تلعبها والبثوث التي تتابعها." },
      es: { name: "Gaming", description: "Habla de tus juegos, streamers y generos favoritos." },
    },
    tags: ["game", "gaming", "fps", "rpg", "ゲーム", "游戏", "العاب", "juego"],
  },
  {
    id: "study-cafe",
    icon: "□",
    localized: {
      ja: { name: "勉強", description: "勉強や資格、作業の合間に通話できる集中スペース" },
      en: { name: "Study", description: "A focused space for study breaks, productivity, and learning goals." },
      zh: { name: "学习", description: "适合学习、效率和短暂休息交流的空间。" },
      ar: { name: "الدراسة", description: "مساحة للتركيز والدراسة وتبادل الاهداف التعليمية." },
      es: { name: "Estudio", description: "Un espacio para estudio, productividad y descansos cortos." },
    },
    tags: ["study", "learning", "資格", "勉強", "作業", "学习", "دراسة", "estudio"],
  },
  {
    id: "late-night",
    icon: "◐",
    localized: {
      ja: { name: "深夜雑談", description: "夜ふかし勢が雑談する深夜向けスペース" },
      en: { name: "Late Night", description: "A midnight lounge for soft conversations, random thoughts, and company." },
      zh: { name: "深夜闲聊", description: "适合深夜聊天、随口闲谈和陪伴感的空间。" },
      ar: { name: "سهر", description: "مساحة لحديث الليل والافكار العفوية والونس." },
      es: { name: "Late Night", description: "Un espacio nocturno para charlas suaves, ideas al azar y compania." },
    },
    tags: ["night", "chat", "雑談", "深夜", "talk", "夜聊", "سهر", "noche"],
  },
];

const dynamicSpaces = new Map();
const localAccounts = new Map();
const participants = new Map();
const waitingBySpace = new Map();
const eventStreams = new Map();
const pendingEvents = new Map();
const messagesBySpace = new Map();
const callHistory = [];
const finalizedSessions = new Set();

function nowIso() {
  return new Date().toISOString();
}

function supportedLang(lang) {
  return SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
}

function spaceLocale(space, lang) {
  return space.localized[supportedLang(lang)] || space.localized[DEFAULT_LANG];
}

function spaceLabel(space, lang) {
  const locale = spaceLocale(space, lang);
  const labels = {
    ja: `${locale.name}のスペース`,
    en: `${locale.name} Space`,
    zh: `${locale.name}空间`,
    ar: `مساحة ${locale.name}`,
    es: `Espacio ${locale.name}`,
  };
  return labels[supportedLang(lang)];
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

function sendEvent(participantId, type, data) {
  const stream = eventStreams.get(participantId);
  const message = `event: ${type}\ndata: ${JSON.stringify(data)}\n\n`;
  if (stream) {
    stream.write(message);
    return;
  }
  const queue = pendingEvents.get(participantId) || [];
  queue.push(message);
  pendingEvents.set(participantId, queue);
}

function flushPendingEvents(participantId) {
  const stream = eventStreams.get(participantId);
  const queue = pendingEvents.get(participantId);
  if (!stream || !queue || queue.length === 0) {
    return;
  }
  queue.forEach((message) => stream.write(message));
  pendingEvents.delete(participantId);
}

function broadcastSpaceEvent(spaceId, type, payload) {
  participants.forEach((participant) => {
    if (participant.spaceId === spaceId && participant.connected) {
      sendEvent(participant.id, type, payload);
    }
  });
}

function normalizeKeyword(value) {
  return (value || "")
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, " ");
}

function getAllSpaces() {
  return [...baseSpaces, ...dynamicSpaces.values()];
}

function getSpace(spaceId) {
  return getAllSpaces().find((space) => space.id === spaceId);
}

function getSpaceParticipantCount(spaceId) {
  let count = 0;
  participants.forEach((participant) => {
    if (participant.spaceId === spaceId && participant.connected) {
      count += 1;
    }
  });
  return count;
}

function getActiveCallCount(spaceId) {
  const sessionIds = new Set();
  participants.forEach((participant) => {
    if (participant.spaceId === spaceId && participant.callSessionId) {
      sessionIds.add(participant.callSessionId);
    }
  });
  return sessionIds.size;
}

function getSpaceParticipantPreviews(spaceId) {
  const previews = [];
  participants.forEach((participant) => {
    if (participant.spaceId === spaceId && participant.connected) {
      previews.push({
        id: participant.id,
        displayName: participant.displayName,
        avatarUrl: participant.avatarUrl || "",
      });
    }
  });
  return previews.slice(0, 6);
}

function serializeSpace(space, lang) {
  const locale = spaceLocale(space, lang);
  return {
    id: space.id,
    icon: space.icon || "○",
    isDynamic: Boolean(space.isDynamic),
    name: locale.name,
    title: spaceLabel(space, lang),
    description: locale.description,
    tags: space.tags,
    activeUsers: getSpaceParticipantCount(space.id),
    waitingUsers: (waitingBySpace.get(space.id) || new Set()).size,
    activeCalls: getActiveCallCount(space.id),
    participantPreviews: getSpaceParticipantPreviews(space.id),
  };
}

function scoreSpace(space, normalizedQuery) {
  if (!normalizedQuery) {
    return 1;
  }
  const localizedTexts = Object.values(space.localized || {}).flatMap((item) => [item.name, item.description]);
  const haystacks = [...localizedTexts, ...(space.tags || [])].map(normalizeKeyword);
  let score = 0;
  haystacks.forEach((text) => {
    if (!text) {
      return;
    }
    if (text.includes(normalizedQuery)) {
      score += 8;
    }
    normalizedQuery.split(" ").forEach((token) => {
      if (token && text.includes(token)) {
        score += 2;
      }
    });
  });
  return score;
}

function buildSupabaseUrl(table, query) {
  const base = `${SUPABASE_URL}/rest/v1/${table}`;
  return query ? `${base}?${query}` : base;
}

async function fetchSupabaseJson(table, query) {
  if (!SUPABASE_ENABLED) {
    return [];
  }
  try {
    const response = await fetch(buildSupabaseUrl(table, query), {
      method: "GET",
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      const text = await response.text();
      throw new Error(text || `Supabase GET ${table} failed`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Supabase fetch failed for ${table}`, error.message);
    return [];
  }
}

async function persistToSupabase(table, payload, preferResolution) {
  if (!SUPABASE_ENABLED) {
    return;
  }
  try {
    await fetch(buildSupabaseUrl(table), {
      method: "POST",
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: preferResolution || "return=minimal",
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error(`Supabase persistence failed for ${table}`, error.message);
  }
}

function hydrateSpaceRecord(row) {
  return {
    id: row.id,
    icon: row.icon || "○",
    isDynamic: Boolean(row.is_dynamic),
    tags: Array.isArray(row.tags) ? row.tags : [],
    localized: {
      ja: { name: row.name_ja || row.name_en || row.id, description: row.description_ja || row.description_en || "" },
      en: { name: row.name_en || row.name_ja || row.id, description: row.description_en || row.description_ja || "" },
      zh: { name: row.name_zh || row.name_en || row.name_ja || row.id, description: row.description_zh || row.description_en || row.description_ja || "" },
      ar: { name: row.name_ar || row.name_en || row.name_ja || row.id, description: row.description_ar || row.description_en || row.description_ja || "" },
      es: { name: row.name_es || row.name_en || row.name_ja || row.id, description: row.description_es || row.description_en || row.description_ja || "" },
    },
  };
}

async function fetchPersistedSpaces() {
  const rows = await fetchSupabaseJson("spaces", "select=*");
  return rows.map(hydrateSpaceRecord);
}

async function fetchMessages(spaceId) {
  if (SUPABASE_ENABLED && spaceId) {
    const rows = await fetchSupabaseJson(
      "messages",
      `select=id,space_id,participant_id,display_name,avatar_url,text,created_at&space_id=eq.${encodeURIComponent(spaceId)}&order=created_at.asc&limit=40`
    );
    if (rows.length > 0) {
      return rows.map((row) => ({
        id: row.id,
        spaceId: row.space_id,
        participantId: row.participant_id,
        displayName: row.display_name,
        avatarUrl: row.avatar_url || "",
        text: row.text,
        createdAt: row.created_at,
      }));
    }
  }
  return (messagesBySpace.get(spaceId) || []).slice(-40);
}

async function fetchHistory({ participantId, spaceId }) {
  if (SUPABASE_ENABLED) {
    const filters = ["select=*"];
    if (participantId) {
      filters.push(`or=(caller_id.eq.${encodeURIComponent(participantId)},callee_id.eq.${encodeURIComponent(participantId)})`);
    } else if (spaceId) {
      filters.push(`space_id=eq.${encodeURIComponent(spaceId)}`);
    }
    filters.push("order=started_at.desc");
    filters.push("limit=40");
    const rows = await fetchSupabaseJson("call_history", filters.join("&"));
    if (rows.length > 0) {
      return rows.map((row) => ({
        id: row.id,
        sessionId: row.session_id,
        spaceId: row.space_id,
        callerId: row.caller_id,
        callerName: row.caller_name,
        callerAvatarUrl: row.caller_avatar_url || "",
        calleeId: row.callee_id || "",
        calleeName: row.callee_name || "",
        calleeAvatarUrl: row.callee_avatar_url || "",
        startedAt: row.started_at,
        endedAt: row.ended_at,
        durationSeconds: row.duration_seconds || 0,
        endedReason: row.ended_reason || "",
      }));
    }
  }
  return callHistory
    .filter((item) => {
      if (participantId) {
        return item.callerId === participantId || item.calleeId === participantId;
      }
      if (spaceId) {
        return item.spaceId === spaceId;
      }
      return true;
    })
    .slice(-40)
    .reverse();
}

async function persistProfile(participant) {
  await persistToSupabase("profiles", {
    id: participant.id,
    display_name: participant.displayName,
    avatar_url: participant.avatarUrl || null,
    preferred_language: participant.preferredLanguage,
    updated_at: nowIso(),
  }, "resolution=merge-duplicates,return=minimal");
}

async function persistMessage(message) {
  await persistToSupabase("messages", {
    id: message.id,
    space_id: message.spaceId,
    participant_id: message.participantId,
    display_name: message.displayName,
    avatar_url: message.avatarUrl || null,
    text: message.text,
    created_at: message.createdAt,
  });
}

async function persistCallRecord(record) {
  await persistToSupabase("call_history", {
    id: record.id,
    session_id: record.sessionId,
    space_id: record.spaceId,
    caller_id: record.callerId,
    caller_name: record.callerName,
    caller_avatar_url: record.callerAvatarUrl || null,
    callee_id: record.calleeId,
    callee_name: record.calleeName,
    callee_avatar_url: record.calleeAvatarUrl || null,
    started_at: record.startedAt,
    ended_at: record.endedAt,
    duration_seconds: record.durationSeconds,
    ended_reason: record.endedReason,
  });
}

async function persistSpace(space) {
  await persistToSupabase("spaces", {
    id: space.id,
    icon: space.icon || "○",
    is_dynamic: Boolean(space.isDynamic),
    tags: space.tags,
    name_ja: space.localized.ja?.name || null,
    name_en: space.localized.en?.name || null,
    name_zh: space.localized.zh?.name || null,
    name_ar: space.localized.ar?.name || null,
    name_es: space.localized.es?.name || null,
    description_ja: space.localized.ja?.description || null,
    description_en: space.localized.en?.description || null,
    description_zh: space.localized.zh?.description || null,
    description_ar: space.localized.ar?.description || null,
    description_es: space.localized.es?.description || null,
    updated_at: nowIso(),
  }, "resolution=merge-duplicates,return=minimal");
}

async function signUpAccount({ email, password, displayName, avatarUrl, preferredLanguage }) {
  if (localAccounts.has(email)) {
    throw new Error("account_exists");
  }

  if (SUPABASE_ENABLED) {
    try {
      const response = await fetch(`${SUPABASE_URL}/auth/v1/admin/users`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          email_confirm: true,
          user_metadata: {
            display_name: displayName,
            avatar_url: avatarUrl || "",
            preferred_language: preferredLanguage,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = await response.json();
      const userId = data.user?.id || data.id || randomUUID();
      await persistToSupabase("profiles", {
        id: userId,
        display_name: displayName,
        avatar_url: avatarUrl || null,
        preferred_language: preferredLanguage,
        updated_at: nowIso(),
      }, "resolution=merge-duplicates,return=minimal");

      const account = {
        userId,
        email,
        password,
        displayName,
        avatarUrl: avatarUrl || "",
        preferredLanguage,
      };
      localAccounts.set(email, account);
      return {
        userId,
        email,
        displayName,
        avatarUrl: avatarUrl || "",
        preferredLanguage,
      };
    } catch (error) {
      console.error("Supabase signup failed, falling back to local account.", error.message);
    }
  }

  const account = {
    userId: randomUUID(),
    email,
    password,
    displayName,
    avatarUrl: avatarUrl || "",
    preferredLanguage,
  };
  localAccounts.set(email, account);
  return account;
}

async function loginAccount({ email, password }) {
  const localAccount = localAccounts.get(email);

  if (SUPABASE_ENABLED) {
    try {
      const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = await response.json();
      const account = {
        userId: data.user?.id || localAccount?.userId || "",
        email: data.user?.email || email,
        displayName: data.user?.user_metadata?.display_name || localAccount?.displayName || data.user?.email || email,
        avatarUrl: data.user?.user_metadata?.avatar_url || localAccount?.avatarUrl || "",
        preferredLanguage: data.user?.user_metadata?.preferred_language || localAccount?.preferredLanguage || DEFAULT_LANG,
      };
      localAccounts.set(email, { ...localAccount, ...account, password });
      return account;
    } catch (error) {
      console.error("Supabase login failed, falling back to local account.", error.message);
    }
  }

  const account = localAccounts.get(email);
  if (!account || account.password !== password) {
    throw new Error("invalid_credentials");
  }

  return {
    userId: account.userId,
    email: account.email,
    displayName: account.displayName,
    avatarUrl: account.avatarUrl,
    preferredLanguage: account.preferredLanguage,
  };
}

function ensureDynamicSpace(keyword) {
  const normalized = normalizeKeyword(keyword);
  if (!normalized) {
    return null;
  }
  const existing = getAllSpaces().find((space) => {
    const localizedNames = Object.values(space.localized || {}).map((entry) => normalizeKeyword(entry.name));
    return localizedNames.includes(normalized) || (space.tags || []).some((tag) => normalizeKeyword(tag) === normalized);
  });
  if (existing) {
    return existing;
  }
  const title = normalized.split(" ").map((token) => token.charAt(0).toUpperCase() + token.slice(1)).join(" ") || keyword;
  const id = `dynamic-${normalized.replace(/\s+/g, "-")}`;
  if (!dynamicSpaces.has(id)) {
    const space = {
      id,
      icon: "◇",
      isDynamic: true,
      tags: [keyword, normalized],
      localized: {
        ja: { name: keyword, description: `「${keyword}」に興味がある人向けの自動生成スペース` },
        en: { name: title, description: `Auto-created space for people interested in ${keyword}.` },
        zh: { name: keyword, description: `为对${keyword}感兴趣的人自动生成的空间。` },
        ar: { name: keyword, description: `مساحة تم إنشاؤها تلقائيا للمهتمين بـ ${keyword}.` },
        es: { name: keyword, description: `Espacio creado automaticamente para personas interesadas en ${keyword}.` },
      },
    };
    dynamicSpaces.set(id, space);
    persistSpace(space);
  }
  return dynamicSpaces.get(id);
}

async function searchSpaces(query, lang) {
  const normalizedQuery = normalizeKeyword(query);
  let spacesSource = getAllSpaces();
  if (SUPABASE_ENABLED) {
    const persisted = await fetchPersistedSpaces();
    if (persisted.length > 0) {
      const merged = new Map();
      [...persisted, ...spacesSource].forEach((space) => merged.set(space.id, space));
      spacesSource = [...merged.values()];
    }
  }
  const spaces = spacesSource
    .map((space) => ({ space, score: scoreSpace(space, normalizedQuery) }))
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score)
    .map((entry) => serializeSpace(entry.space, lang));
  if (normalizedQuery) {
    const dynamicSpace = ensureDynamicSpace(query);
    if (dynamicSpace && !spaces.find((space) => space.id === dynamicSpace.id)) {
      spaces.unshift(serializeSpace(dynamicSpace, lang));
    }
  }
  return spaces.slice(0, 12);
}

function broadcastSpaceStats(spaceId) {
  const space = getSpace(spaceId);
  if (!space) {
    return;
  }
  const stats = serializeSpace(space, DEFAULT_LANG);
  broadcastSpaceEvent(spaceId, "space-stats", stats);
}

function removeFromQueue(participantId) {
  const participant = participants.get(participantId);
  if (!participant) {
    return;
  }
  const waitingSet = waitingBySpace.get(participant.spaceId);
  if (waitingSet) {
    waitingSet.delete(participantId);
    if (waitingSet.size === 0) {
      waitingBySpace.delete(participant.spaceId);
    }
  }
  if (participant.state === "waiting") {
    participant.state = "idle";
  }
  broadcastSpaceStats(participant.spaceId);
}

function finalizeCallSession(participant, peer, endedReason) {
  if (!participant || !participant.callSessionId || finalizedSessions.has(participant.callSessionId)) {
    return;
  }
  finalizedSessions.add(participant.callSessionId);
  const endedAt = nowIso();
  const startedDate = participant.callStartedAt ? new Date(participant.callStartedAt) : new Date();
  const durationSeconds = Math.max(0, Math.round((new Date(endedAt) - startedDate) / 1000));
  const record = {
    id: randomUUID(),
    sessionId: participant.callSessionId,
    spaceId: participant.spaceId,
    callerId: participant.id,
    callerName: participant.displayName,
    callerAvatarUrl: participant.avatarUrl || "",
    calleeId: peer?.id || participant.peerId || "",
    calleeName: peer?.displayName || participant.peerName || "Unknown",
    calleeAvatarUrl: peer?.avatarUrl || "",
    startedAt: participant.callStartedAt || endedAt,
    endedAt,
    durationSeconds,
    endedReason,
  };
  callHistory.push(record);
  persistCallRecord(record);
  broadcastSpaceEvent(participant.spaceId, "history-updated", record);
}

function resetCallState(participant) {
  if (!participant) {
    return;
  }
  participant.peerId = null;
  participant.peerName = "";
  participant.callSessionId = null;
  participant.callStartedAt = null;
  participant.state = "idle";
}

function cleanupParticipant(participantId) {
  const participant = participants.get(participantId);
  if (!participant) {
    return;
  }
  removeFromQueue(participantId);
  if (participant.peerId) {
    const peer = participants.get(participant.peerId);
    finalizeCallSession(participant, peer, "participant_left");
    finalizeCallSession(peer, participant, "participant_left");
    if (peer) {
      resetCallState(peer);
      sendEvent(peer.id, "peer-left", { reason: "相手が退出しました。もう一度ランダム参加できます。" });
    }
  }
  participants.delete(participantId);
  eventStreams.delete(participantId);
  pendingEvents.delete(participantId);
  broadcastSpaceStats(participant.spaceId);
}

function tryMatch(spaceId) {
  const waitingSet = waitingBySpace.get(spaceId);
  if (!waitingSet || waitingSet.size < 2) {
    broadcastSpaceStats(spaceId);
    return;
  }
  const ids = [...waitingSet];
  const firstIndex = Math.floor(Math.random() * ids.length);
  const firstId = ids[firstIndex];
  ids.splice(firstIndex, 1);
  const secondId = ids[Math.floor(Math.random() * ids.length)];
  waitingSet.delete(firstId);
  waitingSet.delete(secondId);
  const first = participants.get(firstId);
  const second = participants.get(secondId);
  if (!first || !second) {
    broadcastSpaceStats(spaceId);
    return;
  }
  const sessionId = randomUUID();
  const startedAt = nowIso();
  first.state = "matched";
  second.state = "matched";
  first.peerId = second.id;
  second.peerId = first.id;
  first.peerName = second.displayName;
  second.peerName = first.displayName;
  first.callSessionId = sessionId;
  second.callSessionId = sessionId;
  first.callStartedAt = startedAt;
  second.callStartedAt = startedAt;
  sendEvent(first.id, "matched", { peerId: second.id, peerName: second.displayName, peerAvatarUrl: second.avatarUrl || "", initiator: true });
  sendEvent(second.id, "matched", { peerId: first.id, peerName: first.displayName, peerAvatarUrl: first.avatarUrl || "", initiator: false });
  broadcastSpaceStats(spaceId);
}

function serveStaticFile(response, filePath) {
  fs.readFile(filePath, (error, content) => {
    if (error) {
      sendJson(response, 404, { error: "file_not_found" });
      return;
    }
    const extension = path.extname(filePath);
    const contentTypes = {
      ".html": "text/html; charset=utf-8",
      ".css": "text/css; charset=utf-8",
      ".js": "application/javascript; charset=utf-8",
      ".json": "application/json; charset=utf-8",
    };
    response.writeHead(200, {
      "Content-Type": contentTypes[extension] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    response.end(content);
  });
}

function handleApi(request, response, url) {
  if (request.method === "GET" && url.pathname === "/api/spaces") {
    const query = url.searchParams.get("q") || "";
    const lang = supportedLang(url.searchParams.get("lang") || DEFAULT_LANG);
    searchSpaces(query, lang).then((spaces) => sendJson(response, 200, { spaces })).catch((error) => sendJson(response, 500, { error: error.message }));
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/messages") {
    const spaceId = String(url.searchParams.get("spaceId") || "");
    fetchMessages(spaceId).then((messages) => sendJson(response, 200, { messages })).catch((error) => sendJson(response, 500, { error: error.message }));
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/history") {
    const participantId = String(url.searchParams.get("participantId") || "");
    const spaceId = String(url.searchParams.get("spaceId") || "");
    fetchHistory({ participantId, spaceId }).then((history) => sendJson(response, 200, { history })).catch((error) => sendJson(response, 500, { error: error.message }));
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/config") {
    sendJson(response, 200, { languages: SUPPORTED_LANGS, supabaseEnabled: SUPABASE_ENABLED, authEnabled: true });
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/events") {
    const participantId = url.searchParams.get("participantId");
    if (!participantId || !participants.has(participantId)) {
      sendJson(response, 404, { error: "participant_not_found" });
      return true;
    }
    response.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-store", Connection: "keep-alive" });
    response.write("\n");
    eventStreams.set(participantId, response);
    flushPendingEvents(participantId);
    const heartbeat = setInterval(() => { response.write(": heartbeat\n\n"); }, 15000);
    request.on("close", () => {
      clearInterval(heartbeat);
      eventStreams.delete(participantId);
      const participant = participants.get(participantId);
      if (participant) {
        participant.connected = false;
        setTimeout(() => {
          const latest = participants.get(participantId);
          if (latest && !eventStreams.has(participantId)) {
            cleanupParticipant(participantId);
          }
        }, 5000);
      }
    });
    return true;
  }

  if (request.method !== "POST" && request.method !== "DELETE") {
    return false;
  }

  let body = "";
  request.on("data", (chunk) => { body += chunk; });

  request.on("end", async () => {
    let payload = {};
    if (body) {
      try {
        payload = JSON.parse(body);
      } catch (error) {
        sendJson(response, 400, { error: "invalid_json" });
        return;
      }
    }

    if (request.method === "POST" && url.pathname === "/api/auth/signup") {
      const email = String(payload.email || "").trim().toLowerCase();
      const password = String(payload.password || "").trim();
      const displayName = String(payload.displayName || "").trim();
      const avatarUrl = String(payload.avatarUrl || "").trim();
      const preferredLanguage = supportedLang(String(payload.preferredLanguage || DEFAULT_LANG));
      if (!email || !password || !displayName) {
        sendJson(response, 400, { error: "missing_fields" });
        return;
      }

      try {
        const account = await signUpAccount({ email, password, displayName, avatarUrl, preferredLanguage });
        sendJson(response, 201, { account });
      } catch (error) {
        sendJson(response, 400, { error: error.message || "signup_failed" });
      }
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/auth/login") {
      const email = String(payload.email || "").trim().toLowerCase();
      const password = String(payload.password || "").trim();
      if (!email || !password) {
        sendJson(response, 400, { error: "missing_fields" });
        return;
      }

      try {
        const account = await loginAccount({ email, password });
        sendJson(response, 200, { account });
      } catch (error) {
        sendJson(response, 400, { error: error.message || "login_failed" });
      }
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/spaces/create") {
      const keyword = String(payload.keyword || payload.query || payload.name || "").trim();
      const lang = supportedLang(String(payload.lang || DEFAULT_LANG));
      const space = ensureDynamicSpace(keyword);
      if (!space) {
        sendJson(response, 400, { error: "missing_keyword" });
        return;
      }
      sendJson(response, 201, { space: serializeSpace(space, lang) });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/participants") {
      const displayName = String(payload.displayName || "").trim();
      const requestedSpaceId = String(payload.spaceId || "").trim();
      const keyword = String(payload.keyword || "").trim();
      const avatarUrl = String(payload.avatarUrl || "").trim();
      const preferredLanguage = supportedLang(String(payload.preferredLanguage || DEFAULT_LANG));
      const space = getSpace(requestedSpaceId) || ensureDynamicSpace(keyword);
      if (!displayName || !space) {
        sendJson(response, 400, { error: "missing_fields" });
        return;
      }
      const participant = {
        id: randomUUID(), displayName, avatarUrl, preferredLanguage, spaceId: space.id, state: "idle", peerId: null, peerName: "", callSessionId: null, callStartedAt: null, connected: true,
      };
      participants.set(participant.id, participant);
      persistProfile(participant);
      sendJson(response, 201, {
        participantId: participant.id,
        profile: { displayName: participant.displayName, avatarUrl: participant.avatarUrl, preferredLanguage: participant.preferredLanguage },
        space: serializeSpace(space, preferredLanguage),
        messages: await fetchMessages(space.id),
        history: await fetchHistory({ spaceId: space.id }),
      });
      broadcastSpaceStats(space.id);
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/queue/join") {
      const participantId = String(payload.participantId || "");
      const participant = participants.get(participantId);
      if (!participant) {
        sendJson(response, 404, { error: "participant_not_found" });
        return;
      }
      participant.connected = true;
      participant.state = "waiting";
      participant.peerId = null;
      participant.peerName = "";
      participant.callSessionId = null;
      participant.callStartedAt = null;
      const waitingSet = waitingBySpace.get(participant.spaceId) || new Set();
      waitingSet.add(participant.id);
      waitingBySpace.set(participant.spaceId, waitingSet);
      sendJson(response, 200, { status: "queued", waitingUsers: waitingSet.size });
      broadcastSpaceStats(participant.spaceId);
      tryMatch(participant.spaceId);
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/queue/leave") {
      const participantId = String(payload.participantId || "");
      removeFromQueue(participantId);
      sendJson(response, 200, { status: "left_queue" });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/messages") {
      const participantId = String(payload.participantId || "");
      const text = String(payload.text || "").trim();
      const participant = participants.get(participantId);
      if (!participant || !text) {
        sendJson(response, 400, { error: "invalid_message" });
        return;
      }
      const message = {
        id: randomUUID(),
        spaceId: participant.spaceId,
        participantId: participant.id,
        displayName: participant.displayName,
        avatarUrl: participant.avatarUrl,
        text: text.slice(0, 400),
        createdAt: nowIso(),
      };
      const existing = messagesBySpace.get(participant.spaceId) || [];
      existing.push(message);
      messagesBySpace.set(participant.spaceId, existing.slice(-100));
      persistMessage(message);
      broadcastSpaceEvent(participant.spaceId, "message", message);
      sendJson(response, 201, { message });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/signal") {
      const participantId = String(payload.participantId || "");
      const toId = String(payload.toId || "");
      const kind = String(payload.kind || "");
      const data = payload.data;
      const sender = participants.get(participantId);
      const receiver = participants.get(toId);
      if (!sender || !receiver || !kind) {
        sendJson(response, 400, { error: "invalid_signal" });
        return;
      }
      sendEvent(receiver.id, "signal", { fromId: sender.id, kind, data });
      sendJson(response, 200, { status: "sent" });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/call/end") {
      const participantId = String(payload.participantId || "");
      const participant = participants.get(participantId);
      if (!participant) {
        sendJson(response, 404, { error: "participant_not_found" });
        return;
      }
      const peer = participant.peerId ? participants.get(participant.peerId) : null;
      finalizeCallSession(participant, peer, "call_ended");
      finalizeCallSession(peer, participant, "call_ended");
      resetCallState(participant);
      if (peer) {
        resetCallState(peer);
        sendEvent(peer.id, "peer-left", { reason: "通話が終了しました。もう一度ランダム参加できます。" });
      }
      broadcastSpaceStats(participant.spaceId);
      sendJson(response, 200, { status: "ended", history: await fetchHistory({ participantId }) });
      return;
    }

    if (request.method === "DELETE" && url.pathname.startsWith("/api/participants/")) {
      const participantId = decodeURIComponent(url.pathname.split("/").pop() || "");
      cleanupParticipant(participantId);
      sendJson(response, 200, { status: "deleted" });
      return;
    }

    sendJson(response, 404, { error: "not_found" });
  });

  return true;
}

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  if (url.pathname.startsWith("/api/")) {
    const handled = handleApi(request, response, url);
    if (!handled) {
      sendJson(response, 404, { error: "not_found" });
    }
    return;
  }
  const requestedPath = url.pathname === "/" ? "/index.html" : url.pathname;
  const safePath = path.normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(PUBLIC_DIR, safePath);
  if (!filePath.startsWith(PUBLIC_DIR)) {
    sendJson(response, 403, { error: "forbidden" });
    return;
  }
  serveStaticFile(response, filePath);
});

baseSpaces.forEach((space) => { persistSpace(space); });

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});






