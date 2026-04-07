const translations = {
  ja: {
    dir: "ltr",
    topBadge: "Voice Spaces",
    heroTitle: "検索した言葉から、誰かとつながる。",
    heroDescription: "キーワードごとにスペースが並び、そこからランダム通話できます。",
    searchPlaceholder: "Search...",
    metricSpacesLabel: "検索スペース",
    metricCallsLabel: "進行中のランダム通話",
    authTitle: "自分のアカウント",
    authDescription: "登録しておくと、表示名とプロフィール画像をそのまま使えます。",
    emailLabel: "メールアドレス",
    passwordLabel: "パスワード",
    accountNameLabel: "表示名",
    accountAvatarLabel: "プロフィール画像URL",
    signUpButton: "登録する",
    loginButton: "ログイン",
    createRoomButton: "この言葉で部屋を作る",
    createRoomTitle: "作りたい言葉で部屋を作る",
    createRoomDescription: "入力した言葉が、そのまま Club 一覧に追加されます。",
    createRoomWordLabel: "言葉",
    submitCreateRoomButton: "この言葉で部屋を作る",
    cancelCreateRoomButton: "一覧に戻る",
    roomLabel: "Selected Space",
    roomEmptyTitle: "まだスペースに入っていません",
    roomEmptyDescription: "検索結果からスペースを選ぶと、ここに詳細が表示されます。",
    displayNameLabel: "表示名",
    avatarUrlLabel: "プロフィール画像URL",
    joinButton: "このスペースに入る",
    queueButton: "ランダム通話を開始",
    leaveQueueButton: "待機をやめる",
    endCallButton: "通話を終了",
    muteLabel: "マイクをミュート",
    chatTab: "チャット",
    historyTab: "履歴",
    chatPlaceholder: "メッセージを入力",
    sendButton: "送信",
    highlightUsersLabel: "参加中",
    highlightWaitingLabel: "待機中",
    highlightCallsLabel: "ランダム通話中",
    selfProfileLabel: "あなた",
    partnerLabel: "相手",
    statusLabel: "状態",
    roomBeforeJoin: "スペース入室前",
    roomJoined: "入室しました",
    roomJoinedHint: "自動でランダム待機に入り、同じスペースの誰かを探します。",
    waitingStatus: "ランダム待機中",
    waitingHint: "同じスペース内の待機ユーザーからランダムで1人を探しています。",
    preparingMic: "マイク準備中",
    preparingMicHint: "通話開始に必要なマイク権限を確認しています。",
    signalingStatus: "接続を調整中",
    signalingHint: "相手との通話ルートを作っています。",
    connectionTimeout: "接続に時間がかかっています",
    connectionTimeoutHint: "相手のネットワーク状況によってはつながらないことがあります。もう一度試してください。",
    eventStreamError: "リアルタイム接続が不安定です",
    eventStreamErrorHint: "ページを開いたまま、もう一度ランダム通話を開始してください。",
    stateIdle: "待機前",
    statePreparing: "準備中",
    stateWaiting: "待機中",
    stateConnecting: "接続中",
    stateConnected: "通話中",
    stateError: "再試行",
    stoppedWaiting: "待機を停止しました",
    matched: "マッチ成立",
    connectingTo: "さんと接続を開始しています。",
    inCall: "通話中",
    withCall: "さんと通話しています。",
    disconnected: "接続が切れました",
    disconnectedHint: "もう一度ランダム通話を開始してください。",
    endedCall: "通話を終了しました",
    peerLeft: "相手が退出しました。もう一度ランダム参加できます。",
    defaultHint: "マッチすると自動で音声接続を試します。",
    enterSpaceFirst: "先にスペースへ入室してください",
    unknownPeer: "未接続",
    noMessages: "まだメッセージはありません。",
    noHistory: "通話履歴はまだありません。",
    emptySpaces: "該当するスペースがまだありません。「{query}」で新しいスペースを作れます。",
    joinSpace: "入る",
    presence: "参加中 {active}人 / 待機中 {waiting}人 / 通話中 {calls}組",
    error: "エラーが発生しました",
    errorHint: "マイク権限や通信状態を確認してもう一度試してください。",
    historyDuration: "通話時間 {seconds}秒",
    historyWith: "相手: {name}",
    signedUp: "アカウント登録完了",
    signedUpHint: "このままスペースに入れます。",
    loggedIn: "ログインしました",
    loggedInHint: "登録済みプロフィールを使ってスペース参加できます。"
  },
  en: {
    dir: "ltr",
    topBadge: "Voice Spaces",
    heroTitle: "Turn a keyword into a conversation.",
    heroDescription: "Each keyword becomes a live club where you can jump into a random call.",
    searchPlaceholder: "Search...",
    metricSpacesLabel: "Matching spaces",
    metricCallsLabel: "Active random calls",
    authTitle: "My Account",
    authDescription: "Register once and reuse your display name and profile image everywhere.",
    emailLabel: "Email",
    passwordLabel: "Password",
    accountNameLabel: "Display name",
    accountAvatarLabel: "Profile image URL",
    signUpButton: "Sign up",
    loginButton: "Log in",
    createRoomButton: "Create room with this word",
    createRoomTitle: "Create a room with your word",
    createRoomDescription: "The word you enter will be added to the Club list.",
    createRoomWordLabel: "Word",
    submitCreateRoomButton: "Create this room",
    cancelCreateRoomButton: "Back to list",
    roomLabel: "Selected Space",
    roomEmptyTitle: "No space selected yet",
    roomEmptyDescription: "Choose a space from the list to see the room here.",
    displayNameLabel: "Display name",
    avatarUrlLabel: "Profile image URL",
    joinButton: "Join this space",
    queueButton: "Start random call",
    leaveQueueButton: "Leave queue",
    endCallButton: "End call",
    muteLabel: "Mute microphone",
    chatTab: "Chat",
    historyTab: "History",
    chatPlaceholder: "Type a message",
    sendButton: "Send",
    highlightUsersLabel: "Users",
    highlightWaitingLabel: "Waiting",
    highlightCallsLabel: "Live calls",
    selfProfileLabel: "You",
    partnerLabel: "Partner",
    statusLabel: "Status",
    roomBeforeJoin: "Before joining",
    roomJoined: "Joined the space",
    roomJoinedHint: "You are now automatically queued for a random match in this space.",
    waitingStatus: "Waiting for random match",
    waitingHint: "Looking for one random person from the same space.",
    preparingMic: "Preparing microphone",
    preparingMicHint: "Checking microphone permission before the call starts.",
    signalingStatus: "Negotiating connection",
    signalingHint: "Building a route to the other person.",
    connectionTimeout: "Connection is taking longer than expected",
    connectionTimeoutHint: "Depending on the network, this match may fail. Please try again.",
    eventStreamError: "Realtime sync became unstable",
    eventStreamErrorHint: "Keep the page open and start another random call.",
    stateIdle: "Idle",
    statePreparing: "Preparing",
    stateWaiting: "Waiting",
    stateConnecting: "Connecting",
    stateConnected: "In Call",
    stateError: "Retry",
    stoppedWaiting: "Stopped waiting",
    matched: "Matched",
    connectingTo: "is connecting now.",
    inCall: "In call",
    withCall: "is talking with you.",
    disconnected: "Connection lost",
    disconnectedHint: "Start another random call.",
    endedCall: "Call ended",
    peerLeft: "The other person left. You can match again.",
    defaultHint: "Audio starts automatically when matched.",
    enterSpaceFirst: "Join a space first",
    unknownPeer: "Not connected",
    noMessages: "No messages yet.",
    noHistory: "No call history yet.",
    emptySpaces: "No matching spaces yet. You can create one with {query}.",
    joinSpace: "Join",
    presence: "{active} users / {waiting} waiting / {calls} live calls",
    error: "Something went wrong",
    errorHint: "Check microphone permissions and network status.",
    historyDuration: "Duration {seconds}s",
    historyWith: "With {name}",
    signedUp: "Account created",
    signedUpHint: "You can now join a space.",
    loggedIn: "Logged in",
    loggedInHint: "Your saved profile is ready to use."
  }
};
translations.zh = { ...translations.en, dir: "ltr", createRoomButton: "用这个词创建房间", createRoomTitle: "用你的词创建房间", createRoomDescription: "你输入的词会直接出现在 Club 列表中。", createRoomWordLabel: "词语", submitCreateRoomButton: "创建这个房间", cancelCreateRoomButton: "返回列表" };
translations.ar = { ...translations.en, dir: "rtl", createRoomButton: "أنشئ غرفة بهذه الكلمة", createRoomTitle: "أنشئ غرفة بالكلمة التي تريدها", createRoomDescription: "ستظهر الكلمة التي تكتبها مباشرة في قائمة النوادي.", createRoomWordLabel: "الكلمة", submitCreateRoomButton: "أنشئ هذه الغرفة", cancelCreateRoomButton: "العودة إلى القائمة" };
translations.es = { ...translations.en, dir: "ltr", createRoomButton: "Crear sala con esta palabra", createRoomTitle: "Crear una sala con tu palabra", createRoomDescription: "La palabra que escribas se agregara a la lista de Club.", createRoomWordLabel: "Palabra", submitCreateRoomButton: "Crear esta sala", cancelCreateRoomButton: "Volver a la lista" };

const state = { language: localStorage.getItem("spacecall-language") || "ja", config: null, query: "", spaces: [], selectedSpace: null, participantId: null, profile: { displayName: "", avatarUrl: "" }, account: null, eventSource: null, peerId: null, peerName: "", peerAvatarUrl: "", localStream: null, peerConnection: null, messages: [], history: [], activeFeed: "chat", activeScreen: "search", rtcIceServers: [{ urls: "stun:stun.l.google.com:19302" }], pendingIceCandidates: [], connectionTimeoutId: null, callPhase: "idle" };

const el = {
  topBadge: document.getElementById("topBadge"), heroTitle: document.getElementById("heroTitle"), heroDescription: document.getElementById("heroDescription"), languageSelect: document.getElementById("languageSelect"), topProfileAvatar: document.getElementById("topProfileAvatar"),
  searchFieldLabel: document.getElementById("searchFieldLabel"), searchInput: document.getElementById("searchInput"), searchButton: document.getElementById("searchButton"), metricSpacesLabel: document.getElementById("metricSpacesLabel"), metricCallsLabel: document.getElementById("metricCallsLabel"), spaceCountMetric: document.getElementById("spaceCountMetric"), activeCallsMetric: document.getElementById("activeCallsMetric"), spaceList: document.getElementById("spaceList"),
  createRoomButton: document.getElementById("createRoomButton"),
  searchSection: document.getElementById("searchSection"), accountSection: document.getElementById("accountSection"), createSection: document.getElementById("createSection"), callSection: document.getElementById("callSection"), feedSection: document.getElementById("feedSection"),
  createRoomTitle: document.getElementById("createRoomTitle"), createRoomDescription: document.getElementById("createRoomDescription"), createRoomWordLabel: document.getElementById("createRoomWordLabel"), createRoomWordInput: document.getElementById("createRoomWordInput"), createRoomForm: document.getElementById("createRoomForm"), submitCreateRoomButton: document.getElementById("submitCreateRoomButton"), cancelCreateRoomButton: document.getElementById("cancelCreateRoomButton"),
  authTitle: document.getElementById("authTitle"), authDescription: document.getElementById("authDescription"), emailLabel: document.getElementById("emailLabel"), passwordLabel: document.getElementById("passwordLabel"), accountNameLabel: document.getElementById("accountNameLabel"), accountAvatarLabel: document.getElementById("accountAvatarLabel"), currentAccountBox: document.getElementById("currentAccountBox"), currentAccountText: document.getElementById("currentAccountText"), authEmailInput: document.getElementById("authEmailInput"), authPasswordInput: document.getElementById("authPasswordInput"), authDisplayNameInput: document.getElementById("authDisplayNameInput"), authAvatarUrlInput: document.getElementById("authAvatarUrlInput"), signUpButton: document.getElementById("signUpButton"), loginButton: document.getElementById("loginButton"),
  roomLabel: document.getElementById("roomLabel"), roomTitle: document.getElementById("roomTitle"), roomDescription: document.getElementById("roomDescription"), spaceHighlights: document.getElementById("spaceHighlights"), activeUsersCount: document.getElementById("activeUsersCount"), waitingUsersCount: document.getElementById("waitingUsersCount"), activeCallsCount: document.getElementById("activeCallsCount"), highlightUsersLabel: document.getElementById("highlightUsersLabel"), highlightWaitingLabel: document.getElementById("highlightWaitingLabel"), highlightCallsLabel: document.getElementById("highlightCallsLabel"), joinForm: document.getElementById("joinForm"), displayNameLabel: document.getElementById("displayNameLabel"), displayNameInput: document.getElementById("displayNameInput"), avatarUrlLabel: document.getElementById("avatarUrlLabel"), avatarUrlInput: document.getElementById("avatarUrlInput"), avatarPreview: document.getElementById("avatarPreview"), joinButton: document.getElementById("joinButton"), roomControls: document.getElementById("roomControls"), selfAvatar: document.getElementById("selfAvatar"), selfProfileLabel: document.getElementById("selfProfileLabel"), selfNameText: document.getElementById("selfNameText"), peerAvatar: document.getElementById("peerAvatar"), partnerLabel: document.getElementById("partnerLabel"), peerName: document.getElementById("peerName"), statusLabel: document.getElementById("statusLabel"), callStatePill: document.getElementById("callStatePill"), statusText: document.getElementById("statusText"), presenceText: document.getElementById("presenceText"), callHint: document.getElementById("callHint"), queueButton: document.getElementById("queueButton"), leaveQueueButton: document.getElementById("leaveQueueButton"), endCallButton: document.getElementById("endCallButton"), muteToggle: document.getElementById("muteToggle"), muteLabel: document.getElementById("muteLabel"), remoteAudio: document.getElementById("remoteAudio"),
  chatTabButton: document.getElementById("chatTabButton"), historyTabButton: document.getElementById("historyTabButton"), chatPane: document.getElementById("chatPane"), historyPane: document.getElementById("historyPane"), messageList: document.getElementById("messageList"), historyList: document.getElementById("historyList"), chatForm: document.getElementById("chatForm"), chatInput: document.getElementById("chatInput"), sendButton: document.getElementById("sendButton"),
  navSearch: document.getElementById("navSearch"), navAccount: document.getElementById("navAccount"), navCall: document.getElementById("navCall"), navChat: document.getElementById("navChat"), navHistory: document.getElementById("navHistory")
};

function t(key, replacements = {}) { const set = translations[state.language] || translations.ja; const raw = set[key] || translations.ja[key] || key; return Object.entries(replacements).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, value), raw); }
async function api(path, options = {}) { const response = await fetch(path, { headers: { "Content-Type": "application/json" }, ...options }); const data = await response.json(); if (!response.ok) throw new Error(data.error || "request_failed"); return data; }
function escapeHtml(value) { return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;"); }
function initials(name) { return (name || "?").trim().slice(0, 2).toUpperCase() || "?"; }
function gradientForName(name, index = 0) { const hue = (String(name).split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) + index * 41) % 360; return `linear-gradient(135deg, hsl(${hue} 72% 58%), hsl(${(hue + 38) % 360} 72% 42%))`; }
function applyAvatar(element, name, avatarUrl, index = 0) { element.textContent = initials(name); element.style.backgroundImage = avatarUrl ? `url(${avatarUrl})` : ""; element.style.background = avatarUrl ? "" : gradientForName(name, index); element.style.color = avatarUrl ? "transparent" : "white"; }
function naturalClubTitle(space) { const name = space.name || "Space"; if (state.language === "ja") return `${name}のスペース`; if (state.language === "en") return `${name} Club`; if (state.language === "zh") return `${name}空间`; if (state.language === "ar") return `مساحة ${name}`; if (state.language === "es") return `Club ${name}`; return space.title || name; }
function clearConnectionTimeout() { if (state.connectionTimeoutId) { clearTimeout(state.connectionTimeoutId); state.connectionTimeoutId = null; } }
function setCallPhase(phase) { state.callPhase = phase; if (!el.callStatePill) return; const phaseMap = { idle: { label: t("stateIdle"), className: "idle" }, preparing: { label: t("statePreparing"), className: "preparing" }, waiting: { label: t("stateWaiting"), className: "waiting" }, connecting: { label: t("stateConnecting"), className: "connecting" }, connected: { label: t("stateConnected"), className: "connected" }, error: { label: t("stateError"), className: "error" } }; const config = phaseMap[phase] || phaseMap.idle; el.callStatePill.textContent = config.label; el.callStatePill.className = `call-state-pill ${config.className}`; }
function setStatus(message, hint = "", phase = state.callPhase || "idle") { setCallPhase(phase); el.statusText.textContent = message; el.callHint.textContent = hint || t("defaultHint"); }
function syncActionButtons() { const activeCall = state.callPhase === "connected" || state.callPhase === "connecting"; el.queueButton.disabled = !state.participantId || activeCall; el.leaveQueueButton.disabled = !state.participantId || state.callPhase === "idle"; el.endCallButton.disabled = !(state.callPhase === "connected" || state.callPhase === "connecting"); }
async function flushPendingIceCandidates() { if (!state.peerConnection || !state.peerConnection.remoteDescription) return; const pending = [...state.pendingIceCandidates]; state.pendingIceCandidates = []; for (const candidate of pending) { await state.peerConnection.addIceCandidate(new RTCIceCandidate(candidate)); } }
function startConnectionTimeout() { clearConnectionTimeout(); state.connectionTimeoutId = setTimeout(() => { setStatus(t("connectionTimeout"), t("connectionTimeoutHint"), "error"); closePeerConnection(); }, 18000); }
function renderCurrentAccount() { if (!state.account) { el.currentAccountBox.classList.add("hidden"); applyAvatar(el.topProfileAvatar, "?", "", 0); return; } el.currentAccountBox.classList.remove("hidden"); el.currentAccountText.textContent = `${state.account.displayName} (${state.account.email})`; applyAvatar(el.topProfileAvatar, state.account.displayName, state.account.avatarUrl || "", 0); }
function syncJoinFormFromAccount() { if (!state.account) return; el.displayNameInput.value = state.account.displayName || ""; el.avatarUrlInput.value = state.account.avatarUrl || ""; updateAvatarPreview(); }
function renderMetrics() { el.spaceCountMetric.textContent = String(state.spaces.length); el.activeCallsMetric.textContent = String(state.spaces.reduce((sum, space) => sum + (space.activeCalls || 0), 0)); }
function renderSpaces() {
  if (!state.spaces.length) {
    el.spaceList.innerHTML = `<div class="empty-state">${escapeHtml(t("emptySpaces", { query: state.query || "keyword" }))}</div>`;
    renderMetrics();
    return;
  }

  el.spaceList.innerHTML = state.spaces.map((space) => {
    const previews = (space.participantPreviews && space.participantPreviews.length > 0) ? space.participantPreviews.slice(0, 5) : [space.name, ...(space.tags || [])].slice(0, 5).map((name) => ({ displayName: name, avatarUrl: "" }));
    const extraCount = Math.max(0, (space.activeUsers || 0) - previews.length);
    const names = previews.map((person) => person.displayName).join(", ");
    return `
      <article class="space-card" data-space-id="${space.id}">
        <div class="space-card-header">
          <h3 class="space-title">${escapeHtml(state.language === "ja" ? `${space.name} Club` : naturalClubTitle(space))}</h3>
        </div>
        <div class="space-members">
          ${previews.map((person, index) => `<div class="member-bubble" data-avatar-name="${escapeHtml(person.displayName)}" data-avatar-url="${escapeHtml(person.avatarUrl || "")}" data-avatar-index="${index}">${escapeHtml(initials(person.displayName))}</div>`).join("")}
          ${extraCount > 0 ? `<div class="member-more">+${extraCount}</div>` : ""}
        </div>
        <p class="member-names">${escapeHtml(names)}${extraCount > 0 ? ", ..." : ""}</p>
        <div class="space-footer">
          <div class="space-metrics">
            <span class="metric-chip">💬 ${escapeHtml(String(space.activeCalls || 0))}</span>
            <span class="metric-chip">👥 ${escapeHtml(String(space.activeUsers || 0))}</span>
          </div>
          <button class="space-join-button" data-space-id="${space.id}" aria-label="${escapeHtml(t("joinSpace"))}">⌕</button>
        </div>
      </article>
    `;
  }).join("");

  el.spaceList.querySelectorAll("[data-avatar-name]").forEach((node) => applyAvatar(node, node.dataset.avatarName, node.dataset.avatarUrl, Number(node.dataset.avatarIndex || 0)));
  el.spaceList.querySelectorAll(".space-card[data-space-id]").forEach((card) => card.addEventListener("click", (event) => {
    if (event.target.closest(".space-join-button")) {
      return;
    }
    selectSpace(state.spaces.find((item) => item.id === card.dataset.spaceId));
  }));
  el.spaceList.querySelectorAll("[data-space-id]").forEach((button) => button.addEventListener("click", () => selectSpace(state.spaces.find((item) => item.id === button.dataset.spaceId))));
  renderMetrics();
}

function renderRoom() {
  if (!state.selectedSpace) {
    el.roomTitle.textContent = t("roomEmptyTitle");
    el.roomDescription.textContent = t("roomEmptyDescription");
    el.spaceHighlights.classList.add("hidden");
    el.joinForm.classList.add("hidden");
    el.roomControls.classList.add("hidden");
    setCallPhase("idle");
    syncActionButtons();
    return;
  }
  el.roomTitle.textContent = naturalClubTitle(state.selectedSpace);
  el.roomDescription.textContent = state.selectedSpace.description;
  el.spaceHighlights.classList.remove("hidden");
  el.activeUsersCount.textContent = String(state.selectedSpace.activeUsers || 0);
  el.waitingUsersCount.textContent = String(state.selectedSpace.waitingUsers || 0);
  el.activeCallsCount.textContent = String(state.selectedSpace.activeCalls || 0);
  el.presenceText.textContent = t("presence", { active: String(state.selectedSpace.activeUsers || 0), waiting: String(state.selectedSpace.waitingUsers || 0), calls: String(state.selectedSpace.activeCalls || 0) });
  if (!state.participantId) {
    el.joinForm.classList.remove("hidden");
    el.roomControls.classList.add("hidden");
    setCallPhase("idle");
    syncActionButtons();
    return;
  }
  el.joinForm.classList.add("hidden");
  el.roomControls.classList.remove("hidden");
  syncActionButtons();
}

function renderMessages() {
  if (!state.messages.length) { el.messageList.innerHTML = `<div class="empty-state">${escapeHtml(t("noMessages"))}</div>`; return; }
  el.messageList.innerHTML = state.messages.map((message, index) => `
    <article class="message-item">
      <div class="message-avatar" data-avatar-name="${escapeHtml(message.displayName)}" data-avatar-url="${escapeHtml(message.avatarUrl || "")}" data-avatar-index="${index}">${escapeHtml(initials(message.displayName))}</div>
      <div>
        <div class="message-head"><strong>${escapeHtml(message.displayName)}</strong><span class="muted">${escapeHtml(new Date(message.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))}</span></div>
        <div class="message-body">${escapeHtml(message.text)}</div>
      </div>
    </article>
  `).join("");
  el.messageList.querySelectorAll("[data-avatar-name]").forEach((node) => applyAvatar(node, node.dataset.avatarName, node.dataset.avatarUrl, Number(node.dataset.avatarIndex || 0)));
}

function renderHistory() {
  if (!state.history.length) { el.historyList.innerHTML = `<div class="empty-state">${escapeHtml(t("noHistory"))}</div>`; return; }
  el.historyList.innerHTML = state.history.map((item) => {
    const partnerName = item.callerId === state.participantId ? item.calleeName : item.callerName;
    return `
      <article class="history-item">
        <div class="history-head"><strong>${escapeHtml(t("historyWith", { name: partnerName || t("unknownPeer") }))}</strong><span class="muted">${escapeHtml(new Date(item.startedAt).toLocaleString())}</span></div>
        <div class="history-body">${escapeHtml(t("historyDuration", { seconds: String(item.durationSeconds || 0) }))}</div>
      </article>
    `;
  }).join("");
}

function updateAvatarPreview() { applyAvatar(el.avatarPreview, el.displayNameInput.value.trim() || state.profile.displayName || "?", el.avatarUrlInput.value.trim(), 0); }
function updateSelfProfile() { el.selfNameText.textContent = state.profile.displayName || "-"; applyAvatar(el.selfAvatar, state.profile.displayName || "?", state.profile.avatarUrl || "", 0); }
function updatePeerProfile() { el.peerName.textContent = state.peerName || t("unknownPeer"); applyAvatar(el.peerAvatar, state.peerName || "?", state.peerAvatarUrl || "", 1); }
function showFeed(feed) { state.activeFeed = feed; el.chatTabButton.classList.toggle("active", feed === "chat"); el.historyTabButton.classList.toggle("active", feed === "history"); el.chatPane.classList.toggle("hidden", feed !== "chat"); el.historyPane.classList.toggle("hidden", feed !== "history"); }
function showScreen(screen) { state.activeScreen = screen; el.searchSection.classList.toggle("hidden", screen !== "search"); el.accountSection.classList.toggle("hidden", screen !== "account"); el.createSection.classList.toggle("hidden", screen !== "create"); el.callSection.classList.toggle("hidden", screen !== "call"); el.feedSection.classList.toggle("hidden", !(screen === "chat" || screen === "history")); showFeed(screen === "history" ? "history" : screen === "chat" ? "chat" : state.activeFeed); [el.navSearch, el.navAccount, el.navCall, el.navChat, el.navHistory].forEach((button) => button.classList.remove("nav-active")); if (screen === "search") el.navSearch.classList.add("nav-active"); if (screen === "account") el.navAccount.classList.add("nav-active"); if (screen === "create" || screen === "call") el.navCall.classList.add("nav-active"); if (screen === "chat") el.navChat.classList.add("nav-active"); if (screen === "history") el.navHistory.classList.add("nav-active"); }

function applyTranslations() {
  document.documentElement.lang = state.language;
  document.body.dir = (translations[state.language] || translations.ja).dir;
  el.topBadge.textContent = t("topBadge"); el.heroTitle.textContent = t("heroTitle"); el.heroDescription.textContent = t("heroDescription"); el.searchInput.placeholder = t("searchPlaceholder"); el.metricSpacesLabel.textContent = t("metricSpacesLabel"); el.metricCallsLabel.textContent = t("metricCallsLabel");
  el.authTitle.textContent = t("authTitle"); el.authDescription.textContent = t("authDescription"); el.emailLabel.textContent = t("emailLabel"); el.passwordLabel.textContent = t("passwordLabel"); el.accountNameLabel.textContent = t("accountNameLabel"); el.accountAvatarLabel.textContent = t("accountAvatarLabel"); el.signUpButton.textContent = t("signUpButton"); el.loginButton.textContent = t("loginButton");
  el.createRoomButton.textContent = t("createRoomButton");
  el.createRoomTitle.textContent = t("createRoomTitle"); el.createRoomDescription.textContent = t("createRoomDescription"); el.createRoomWordLabel.textContent = t("createRoomWordLabel"); el.submitCreateRoomButton.textContent = t("submitCreateRoomButton"); el.cancelCreateRoomButton.textContent = t("cancelCreateRoomButton");
  el.roomLabel.textContent = t("roomLabel"); el.displayNameLabel.textContent = t("displayNameLabel"); el.avatarUrlLabel.textContent = t("avatarUrlLabel"); el.joinButton.textContent = t("joinButton"); el.queueButton.textContent = t("queueButton"); el.leaveQueueButton.textContent = t("leaveQueueButton"); el.endCallButton.textContent = t("endCallButton"); el.muteLabel.textContent = t("muteLabel"); el.chatTabButton.textContent = t("chatTab"); el.historyTabButton.textContent = t("historyTab"); el.chatInput.placeholder = t("chatPlaceholder"); el.sendButton.textContent = t("sendButton"); el.highlightUsersLabel.textContent = t("highlightUsersLabel"); el.highlightWaitingLabel.textContent = t("highlightWaitingLabel"); el.highlightCallsLabel.textContent = t("highlightCallsLabel"); el.selfProfileLabel.textContent = t("selfProfileLabel"); el.partnerLabel.textContent = t("partnerLabel"); el.statusLabel.textContent = t("statusLabel");
  setCallPhase(state.callPhase || "idle");
  renderSpaces(); renderRoom(); renderMessages(); renderHistory();
}

async function loadConfig() { state.config = await api("/api/config"); state.rtcIceServers = state.config?.rtcIceServers?.length ? state.config.rtcIceServers : [{ urls: "stun:stun.l.google.com:19302" }]; }
async function loadSpaces(query = state.query) { state.query = query; const data = await api(`/api/spaces?q=${encodeURIComponent(query)}&lang=${encodeURIComponent(state.language)}`); state.spaces = data.spaces || []; if (state.selectedSpace) { const refreshed = state.spaces.find((space) => space.id === state.selectedSpace.id); if (refreshed) state.selectedSpace = refreshed; } renderSpaces(); renderRoom(); }
async function loadMessages() { if (!state.selectedSpace) { state.messages = []; renderMessages(); return; } const data = await api(`/api/messages?spaceId=${encodeURIComponent(state.selectedSpace.id)}`); state.messages = data.messages || []; renderMessages(); }
async function loadHistory() { if (!state.selectedSpace) { state.history = []; renderHistory(); return; } const path = state.participantId ? `/api/history?participantId=${encodeURIComponent(state.participantId)}` : `/api/history?spaceId=${encodeURIComponent(state.selectedSpace.id)}`; const data = await api(path); state.history = data.history || []; renderHistory(); }
function openCreateRoomScreen() { el.createRoomWordInput.value = el.searchInput.value.trim() || state.query.trim(); showScreen("create"); }
async function createRoomFromKeyword(event) { if (event) event.preventDefault(); const keyword = el.createRoomWordInput.value.trim() || el.searchInput.value.trim() || state.query.trim(); if (!keyword) return; const data = await api("/api/spaces/create", { method: "POST", body: JSON.stringify({ keyword, query: keyword, name: keyword, lang: state.language }) }); el.searchInput.value = ""; await loadSpaces(""); selectSpace(data.space); }

function selectSpace(space) { state.selectedSpace = space; state.participantId = null; state.profile = { displayName: state.account?.displayName || "", avatarUrl: state.account?.avatarUrl || "" }; state.peerId = null; state.peerName = ""; state.peerAvatarUrl = ""; state.messages = []; state.history = []; state.pendingIceCandidates = []; closeEventStream(); closePeerConnection(); clearConnectionTimeout(); syncJoinFormFromAccount(); updateSelfProfile(); updatePeerProfile(); setStatus(t("roomBeforeJoin"), t("defaultHint"), "idle"); renderRoom(); renderMessages(); renderHistory(); showScreen("call"); }
async function joinSelectedSpace(event) { event.preventDefault(); if (!state.selectedSpace) return; const displayName = el.displayNameInput.value.trim(); const avatarUrl = el.avatarUrlInput.value.trim(); if (!displayName) return; await ensureLocalAudio(); const data = await api("/api/participants", { method: "POST", body: JSON.stringify({ displayName, avatarUrl, preferredLanguage: state.language, spaceId: state.selectedSpace.id, keyword: state.query }) }); state.participantId = data.participantId; state.profile = data.profile; state.selectedSpace = data.space; state.messages = data.messages || []; state.history = data.history || []; updateSelfProfile(); openEventStream(); renderRoom(); renderMessages(); renderHistory(); setStatus(t("roomJoined"), t("roomJoinedHint"), "preparing"); showScreen("call"); await joinQueue(); }
function closeEventStream() { if (state.eventSource) { state.eventSource.close(); state.eventSource = null; } }
function closePeerConnection() { clearConnectionTimeout(); if (state.peerConnection) { state.peerConnection.ontrack = null; state.peerConnection.onicecandidate = null; state.peerConnection.onconnectionstatechange = null; state.peerConnection.oniceconnectionstatechange = null; state.peerConnection.close(); state.peerConnection = null; } state.pendingIceCandidates = []; el.remoteAudio.pause(); el.remoteAudio.srcObject = null; }
function createPeerConnection(remoteParticipantId) { closePeerConnection(); const connection = new RTCPeerConnection({ iceServers: state.rtcIceServers }); state.peerConnection = connection; state.peerId = remoteParticipantId; state.pendingIceCandidates = []; if (state.localStream) state.localStream.getTracks().forEach((track) => connection.addTrack(track, state.localStream)); connection.onicecandidate = async (event) => { if (!event.candidate || !state.peerId) return; await sendSignal(state.peerId, "ice-candidate", event.candidate); }; connection.ontrack = async (event) => { el.remoteAudio.srcObject = event.streams[0]; try { await el.remoteAudio.play(); } catch (error) { console.warn("remote audio play failed", error); } setStatus(t("inCall"), `${state.peerName} ${t("withCall")}`, "connected"); }; connection.onconnectionstatechange = () => { if (connection.connectionState === "connecting") { setStatus(t("signalingStatus"), t("signalingHint"), "connecting"); } if (connection.connectionState === "connected") { clearConnectionTimeout(); setStatus(t("inCall"), `${state.peerName} ${t("withCall")}`, "connected"); } if (["failed", "closed", "disconnected"].includes(connection.connectionState)) { setStatus(t("disconnected"), t("disconnectedHint"), "error"); } syncActionButtons(); }; connection.oniceconnectionstatechange = () => { if (["failed", "disconnected"].includes(connection.iceConnectionState)) { setStatus(t("disconnected"), t("disconnectedHint"), "error"); syncActionButtons(); } }; syncActionButtons(); return connection; }
async function ensureLocalAudio() { if (state.localStream) return state.localStream; setStatus(t("preparingMic"), t("preparingMicHint"), "preparing"); state.localStream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }, video: false }); el.muteToggle.checked = false; syncActionButtons(); return state.localStream; }
async function sendSignal(toId, kind, data) { await api("/api/signal", { method: "POST", body: JSON.stringify({ participantId: state.participantId, toId, kind, data }) }); }
function openEventStream() {
  closeEventStream();
  state.eventSource = new EventSource(`/api/events?participantId=${encodeURIComponent(state.participantId)}`);
  state.eventSource.addEventListener("matched", async (event) => {
    const payload = JSON.parse(event.data);
    state.peerId = payload.peerId; state.peerName = payload.peerName; state.peerAvatarUrl = payload.peerAvatarUrl || ""; updatePeerProfile(); setStatus(t("matched"), `${payload.peerName} ${t("connectingTo")}`, "connecting"); showScreen("call"); await ensureLocalAudio(); const connection = createPeerConnection(payload.peerId); startConnectionTimeout(); if (payload.initiator) { const offer = await connection.createOffer(); await connection.setLocalDescription(offer); await sendSignal(payload.peerId, "offer", offer); }
  });
  state.eventSource.addEventListener("signal", async (event) => { const payload = JSON.parse(event.data); await ensureLocalAudio(); if (!state.peerConnection) createPeerConnection(payload.fromId); if (payload.kind === "offer") { setStatus(t("signalingStatus"), t("signalingHint"), "connecting"); startConnectionTimeout(); await state.peerConnection.setRemoteDescription(new RTCSessionDescription(payload.data)); await flushPendingIceCandidates(); const answer = await state.peerConnection.createAnswer(); await state.peerConnection.setLocalDescription(answer); state.peerId = payload.fromId; await sendSignal(payload.fromId, "answer", answer); return; } if (payload.kind === "answer") { await state.peerConnection.setRemoteDescription(new RTCSessionDescription(payload.data)); await flushPendingIceCandidates(); return; } if (payload.kind === "ice-candidate" && payload.data) { if (state.peerConnection.remoteDescription) { await state.peerConnection.addIceCandidate(new RTCIceCandidate(payload.data)); } else { state.pendingIceCandidates.push(payload.data); } } });
  state.eventSource.addEventListener("message", (event) => { const payload = JSON.parse(event.data); state.messages = [...state.messages, payload].slice(-100); renderMessages(); });
  state.eventSource.addEventListener("history-updated", (event) => { const payload = JSON.parse(event.data); state.history = [payload, ...state.history].slice(0, 40); renderHistory(); });
  state.eventSource.addEventListener("space-stats", (event) => { const payload = JSON.parse(event.data); const patch = { activeUsers: payload.activeUsers, waitingUsers: payload.waitingUsers, activeCalls: payload.activeCalls, participantPreviews: payload.participantPreviews || [] }; const index = state.spaces.findIndex((space) => space.id === payload.id); if (index >= 0) state.spaces[index] = { ...state.spaces[index], ...patch }; if (state.selectedSpace?.id === payload.id) { state.selectedSpace = { ...state.selectedSpace, ...patch }; renderRoom(); } renderSpaces(); });
  state.eventSource.addEventListener("peer-left", async (event) => { const payload = JSON.parse(event.data); state.peerId = null; state.peerName = ""; state.peerAvatarUrl = ""; closePeerConnection(); updatePeerProfile(); setStatus(t("endedCall"), payload.reason || t("peerLeft"), "idle"); await loadHistory(); });
  state.eventSource.addEventListener("error", () => { setStatus(t("eventStreamError"), t("eventStreamErrorHint"), "error"); });
}
async function joinQueue() { if (!state.participantId) { setStatus(t("enterSpaceFirst"), t("defaultHint"), "idle"); return; } await ensureLocalAudio(); await api("/api/queue/join", { method: "POST", body: JSON.stringify({ participantId: state.participantId }) }); setStatus(t("waitingStatus"), t("waitingHint"), "waiting"); await loadSpaces(state.query); syncActionButtons(); }
async function leaveQueue() { if (!state.participantId) return; clearConnectionTimeout(); await api("/api/queue/leave", { method: "POST", body: JSON.stringify({ participantId: state.participantId }) }); setStatus(t("stoppedWaiting"), t("defaultHint"), "idle"); await loadSpaces(state.query); syncActionButtons(); }
async function endCall() { if (!state.participantId) return; const data = await api("/api/call/end", { method: "POST", body: JSON.stringify({ participantId: state.participantId }) }); state.peerId = null; state.peerName = ""; state.peerAvatarUrl = ""; state.history = data.history || state.history; closePeerConnection(); updatePeerProfile(); renderHistory(); setStatus(t("endedCall"), t("defaultHint"), "idle"); await loadSpaces(state.query); syncActionButtons(); }
async function sendMessage(event) { event.preventDefault(); if (!state.participantId) { setStatus(t("enterSpaceFirst"), t("defaultHint")); return; } const text = el.chatInput.value.trim(); if (!text) return; await api("/api/messages", { method: "POST", body: JSON.stringify({ participantId: state.participantId, text }) }); el.chatInput.value = ""; }
async function signUpAccountFromForm() { const payload = { email: el.authEmailInput.value.trim(), password: el.authPasswordInput.value.trim(), displayName: el.authDisplayNameInput.value.trim(), avatarUrl: el.authAvatarUrlInput.value.trim(), preferredLanguage: state.language }; const data = await api("/api/auth/signup", { method: "POST", body: JSON.stringify(payload) }); state.account = data.account; renderCurrentAccount(); syncJoinFormFromAccount(); setStatus(t("signedUp"), t("signedUpHint")); showScreen("account"); }
async function loginAccountFromForm() { const payload = { email: el.authEmailInput.value.trim(), password: el.authPasswordInput.value.trim() }; const data = await api("/api/auth/login", { method: "POST", body: JSON.stringify(payload) }); state.account = data.account; el.authDisplayNameInput.value = state.account.displayName || ""; el.authAvatarUrlInput.value = state.account.avatarUrl || ""; renderCurrentAccount(); syncJoinFormFromAccount(); setStatus(t("loggedIn"), t("loggedInHint")); showScreen("account"); }
function showError(error) { console.error(error); setStatus(t("error"), error?.message || t("errorHint"), "error"); }
async function bootstrap() { await loadConfig(); el.languageSelect.value = state.language; applyTranslations(); await loadSpaces(state.query); renderCurrentAccount(); syncJoinFormFromAccount(); updateSelfProfile(); updatePeerProfile(); updateAvatarPreview(); showScreen("search"); setStatus(t("roomBeforeJoin"), t("defaultHint"), "idle"); setInterval(() => { loadSpaces(state.query).catch(() => {}); if (state.selectedSpace) { loadMessages().catch(() => {}); loadHistory().catch(() => {}); } }, 8000); }

el.searchButton.addEventListener("click", () => loadSpaces(el.searchInput.value.trim()).catch(showError));
el.createRoomButton.addEventListener("click", () => openCreateRoomScreen());
el.searchInput.addEventListener("keydown", (event) => { if (event.key === "Enter") { event.preventDefault(); loadSpaces(el.searchInput.value.trim()).catch(showError); } });
el.languageSelect.addEventListener("change", async () => { state.language = el.languageSelect.value; localStorage.setItem("spacecall-language", state.language); applyTranslations(); await loadSpaces(state.query).catch(showError); });
el.displayNameInput.addEventListener("input", updateAvatarPreview);
el.avatarUrlInput.addEventListener("input", updateAvatarPreview);
el.joinForm.addEventListener("submit", (event) => joinSelectedSpace(event).catch(showError));
el.queueButton.addEventListener("click", () => joinQueue().catch(showError));
el.leaveQueueButton.addEventListener("click", () => leaveQueue().catch(showError));
el.endCallButton.addEventListener("click", () => endCall().catch(showError));
el.chatForm.addEventListener("submit", (event) => sendMessage(event).catch(showError));
el.chatTabButton.addEventListener("click", () => showFeed("chat"));
el.historyTabButton.addEventListener("click", () => showFeed("history"));
el.signUpButton.addEventListener("click", () => signUpAccountFromForm().catch(showError));
el.loginButton.addEventListener("click", () => loginAccountFromForm().catch(showError));
el.navSearch.addEventListener("click", () => showScreen("search"));
el.navAccount.addEventListener("click", () => showScreen("account"));
el.navCall.addEventListener("click", () => showScreen(state.selectedSpace ? "call" : "create"));
el.navChat.addEventListener("click", () => showScreen("chat"));
el.navHistory.addEventListener("click", () => showScreen("history"));
el.createRoomForm.addEventListener("submit", (event) => createRoomFromKeyword(event).catch(showError));
el.cancelCreateRoomButton.addEventListener("click", () => showScreen("search"));
el.muteToggle.addEventListener("change", () => { if (!state.localStream) return; state.localStream.getAudioTracks().forEach((track) => { track.enabled = !el.muteToggle.checked; }); });
window.addEventListener("beforeunload", () => { if (state.participantId) navigator.sendBeacon(`/api/participants/${encodeURIComponent(state.participantId)}`, ""); });
bootstrap().catch(showError);


