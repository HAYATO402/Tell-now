const translations = {
  ja: {
    dir: "ltr",
    topBadge: "Voice Spaces",
    heroTitle: "検索した言葉から、誰かとつながる。",
    heroDescription: "キーワードごとにスペースが並び、そこからランダム通話できます。",
    searchPlaceholder: "Search...",
    metricSpacesLabel: "検索スペース",
    metricCallsLabel: "進行中のランダム通話",
    authTitle: "アカウント登録",
    authDescription: "通話に参加する前に、名前とパスワードでアカウントを作成してください。",
    passwordLabel: "パスワード",
    accountNameLabel: "表示名",
    iconLabel: "アイコン",
    signUpButton: "この内容で登録する",
    showPassword: "表示",
    hidePassword: "非表示",
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
    androidHint: "Android では Chrome で開き、HTTPS でアクセスして、マイク権限を許可してください。",
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
    authRequiredTitle: "アカウント登録が必要です",
    authRequiredHint: "通話に入る前に、名前とパスワード、それにアイコンを登録してください。",
    currentAccountPrefix: "登録中",
    iconPlaceholder: "😀"
  },
  en: {
    dir: "ltr",
    topBadge: "Voice Spaces",
    heroTitle: "Turn a keyword into a conversation.",
    heroDescription: "Each keyword becomes a live club where you can jump into a random call.",
    searchPlaceholder: "Search...",
    metricSpacesLabel: "Matching spaces",
    metricCallsLabel: "Active random calls",
    authTitle: "Create account",
    authDescription: "Create an account with a name and password before joining a call.",
    passwordLabel: "Password",
    accountNameLabel: "Display name",
    iconLabel: "Icon",
    signUpButton: "Create account",
    showPassword: "Show",
    hidePassword: "Hide",
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
    androidHint: "On Android, open this in Chrome over HTTPS and allow microphone permission.",
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
    authRequiredTitle: "Account required",
    authRequiredHint: "Before joining a call, create an account with your name, password, and icon.",
    currentAccountPrefix: "Signed in",
    iconPlaceholder: "😀"
  }
};
translations.zh = { ...translations.en, dir: "ltr", createRoomButton: "用这个词创建房间", createRoomTitle: "用你的词创建房间", createRoomDescription: "你输入的词会直接出现在 Club 列表中。", createRoomWordLabel: "词语", submitCreateRoomButton: "创建这个房间", cancelCreateRoomButton: "返回列表", currentAccountPrefix: "当前账号", iconPlaceholder: "😀" };
translations.ar = { ...translations.en, dir: "rtl", createRoomButton: "أنشئ غرفة بهذه الكلمة", createRoomTitle: "أنشئ غرفة بالكلمة التي تريدها", createRoomDescription: "ستظهر الكلمة التي تكتبها مباشرة في قائمة النوادي.", createRoomWordLabel: "الكلمة", submitCreateRoomButton: "أنشئ هذه الغرفة", cancelCreateRoomButton: "العودة إلى القائمة", currentAccountPrefix: "الحساب الحالي", iconPlaceholder: "😀" };
translations.es = { ...translations.en, dir: "ltr", createRoomButton: "Crear sala con esta palabra", createRoomTitle: "Crear una sala con tu palabra", createRoomDescription: "La palabra que escribas se agregara a la lista de Club.", createRoomWordLabel: "Palabra", submitCreateRoomButton: "Crear esta sala", cancelCreateRoomButton: "Volver a la lista", currentAccountPrefix: "Cuenta activa", iconPlaceholder: "😀" };

const state = { language: localStorage.getItem("spacecall-language") || "ja", config: null, query: "", spaces: [], selectedSpace: null, pendingSpaceId: "", participantId: null, profile: { displayName: "", avatarUrl: "", avatarIcon: "" }, account: null, authToken: localStorage.getItem("spacecall-auth-token") || "", eventSource: null, peerId: null, peerName: "", peerAvatarUrl: "", peerAvatarIcon: "", localStream: null, peerConnection: null, messages: [], history: [], activeFeed: "chat", activeScreen: "search", rtcIceServers: [{ urls: "stun:stun.l.google.com:19302" }], pendingIceCandidates: [], connectionTimeoutId: null, callPhase: "idle" };

const el = {
  topBadge: document.getElementById("topBadge"), heroTitle: document.getElementById("heroTitle"), heroDescription: document.getElementById("heroDescription"), languageSelect: document.getElementById("languageSelect"), topProfileAvatar: document.getElementById("topProfileAvatar"), topAccountLabel: document.getElementById("topAccountLabel"),
  searchFieldLabel: document.getElementById("searchFieldLabel"), searchInput: document.getElementById("searchInput"), searchButton: document.getElementById("searchButton"), metricSpacesLabel: document.getElementById("metricSpacesLabel"), metricCallsLabel: document.getElementById("metricCallsLabel"), spaceCountMetric: document.getElementById("spaceCountMetric"), activeCallsMetric: document.getElementById("activeCallsMetric"), spaceList: document.getElementById("spaceList"),
  createRoomButton: document.getElementById("createRoomButton"),
  searchSection: document.getElementById("searchSection"), accountSection: document.getElementById("accountSection"), createSection: document.getElementById("createSection"), callSection: document.getElementById("callSection"), feedSection: document.getElementById("feedSection"),
  createRoomTitle: document.getElementById("createRoomTitle"), createRoomDescription: document.getElementById("createRoomDescription"), createRoomWordLabel: document.getElementById("createRoomWordLabel"), createRoomWordInput: document.getElementById("createRoomWordInput"), createRoomForm: document.getElementById("createRoomForm"), submitCreateRoomButton: document.getElementById("submitCreateRoomButton"), cancelCreateRoomButton: document.getElementById("cancelCreateRoomButton"),
  signupForm: document.getElementById("signupForm"), authTitle: document.getElementById("authTitle"), authDescription: document.getElementById("authDescription"), passwordLabel: document.getElementById("passwordLabel"), accountNameLabel: document.getElementById("accountNameLabel"), iconLabel: document.getElementById("iconLabel"), currentAccountBox: document.getElementById("currentAccountBox"), currentAccountText: document.getElementById("currentAccountText"), signupPasswordInput: document.getElementById("signupPasswordInput"), authDisplayNameInput: document.getElementById("authDisplayNameInput"), iconInput: document.getElementById("iconInput"), signUpButton: document.getElementById("signUpButton"), toggleSignupPasswordButton: document.getElementById("toggleSignupPasswordButton"),
  roomLabel: document.getElementById("roomLabel"), roomTitle: document.getElementById("roomTitle"), roomDescription: document.getElementById("roomDescription"), spaceHighlights: document.getElementById("spaceHighlights"), activeUsersCount: document.getElementById("activeUsersCount"), waitingUsersCount: document.getElementById("waitingUsersCount"), activeCallsCount: document.getElementById("activeCallsCount"), highlightUsersLabel: document.getElementById("highlightUsersLabel"), highlightWaitingLabel: document.getElementById("highlightWaitingLabel"), highlightCallsLabel: document.getElementById("highlightCallsLabel"), joinForm: document.getElementById("joinForm"), displayNameLabel: document.getElementById("displayNameLabel"), displayNameInput: document.getElementById("displayNameInput"), avatarPreview: document.getElementById("avatarPreview"), joinButton: document.getElementById("joinButton"), roomControls: document.getElementById("roomControls"), selfAvatar: document.getElementById("selfAvatar"), selfProfileLabel: document.getElementById("selfProfileLabel"), selfNameText: document.getElementById("selfNameText"), peerAvatar: document.getElementById("peerAvatar"), partnerLabel: document.getElementById("partnerLabel"), peerName: document.getElementById("peerName"), statusLabel: document.getElementById("statusLabel"), callStatePill: document.getElementById("callStatePill"), statusText: document.getElementById("statusText"), presenceText: document.getElementById("presenceText"), callHint: document.getElementById("callHint"), queueButton: document.getElementById("queueButton"), leaveQueueButton: document.getElementById("leaveQueueButton"), endCallButton: document.getElementById("endCallButton"), muteToggle: document.getElementById("muteToggle"), muteLabel: document.getElementById("muteLabel"), remoteAudio: document.getElementById("remoteAudio"),
  chatTabButton: document.getElementById("chatTabButton"), historyTabButton: document.getElementById("historyTabButton"), chatPane: document.getElementById("chatPane"), historyPane: document.getElementById("historyPane"), messageList: document.getElementById("messageList"), historyList: document.getElementById("historyList"), chatForm: document.getElementById("chatForm"), chatInput: document.getElementById("chatInput"), sendButton: document.getElementById("sendButton"),
  navSearch: document.getElementById("navSearch"), navAccount: document.getElementById("navAccount"), navCall: document.getElementById("navCall"), navChat: document.getElementById("navChat"), navHistory: document.getElementById("navHistory")
};

function t(key, replacements = {}) { const set = translations[state.language] || translations.ja; const raw = set[key] || translations.ja[key] || key; return Object.entries(replacements).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, value), raw); }
async function api(path, options = {}) { const headers = { "Content-Type": "application/json", ...(options.headers || {}) }; if (state.authToken) headers["x-auth-token"] = state.authToken; const response = await fetch(path, { ...options, headers }); const data = await response.json(); if (!response.ok) throw new Error(data.error || "request_failed"); return data; }
function escapeHtml(value) { return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;"); }
function initials(name) { return (name || "?").trim().slice(0, 2).toUpperCase() || "?"; }
function gradientForName(name, index = 0) { const hue = (String(name).split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) + index * 41) % 360; return `linear-gradient(135deg, hsl(${hue} 72% 58%), hsl(${(hue + 38) % 360} 72% 42%))`; }
function applyAvatar(element, name, avatarUrl, index = 0, avatarIcon = "") { element.textContent = avatarIcon || initials(name); element.style.backgroundImage = avatarUrl ? `url(${avatarUrl})` : ""; element.style.background = avatarUrl ? "" : gradientForName(name, index); element.style.color = avatarUrl ? "transparent" : "white"; }
function naturalClubTitle(space) { const name = space.name || "Space"; if (state.language === "ja") return `${name}のスペース`; if (state.language === "en") return `${name} Club`; if (state.language === "zh") return `${name}空间`; if (state.language === "ar") return `مساحة ${name}`; if (state.language === "es") return `Club ${name}`; return space.title || name; }
function clearConnectionTimeout() { if (state.connectionTimeoutId) { clearTimeout(state.connectionTimeoutId); state.connectionTimeoutId = null; } }
function setCallPhase(phase) { state.callPhase = phase; if (!el.callStatePill) return; const phaseMap = { idle: { label: t("stateIdle"), className: "idle" }, preparing: { label: t("statePreparing"), className: "preparing" }, waiting: { label: t("stateWaiting"), className: "waiting" }, connecting: { label: t("stateConnecting"), className: "connecting" }, connected: { label: t("stateConnected"), className: "connected" }, error: { label: t("stateError"), className: "error" } }; const config = phaseMap[phase] || phaseMap.idle; el.callStatePill.textContent = config.label; el.callStatePill.className = `call-state-pill ${config.className}`; }
function setStatus(message, hint = "", phase = state.callPhase || "idle") { setCallPhase(phase); el.statusText.textContent = message; el.callHint.textContent = hint || t("defaultHint"); }
function syncActionButtons() { const activeCall = state.callPhase === "connected" || state.callPhase === "connecting"; el.queueButton.disabled = !state.participantId || activeCall; el.leaveQueueButton.disabled = !state.participantId || state.callPhase === "idle"; el.endCallButton.disabled = !(state.callPhase === "connected" || state.callPhase === "connecting"); }
async function flushPendingIceCandidates() { if (!state.peerConnection || !state.peerConnection.remoteDescription) return; const pending = [...state.pendingIceCandidates]; state.pendingIceCandidates = []; for (const candidate of pending) { await state.peerConnection.addIceCandidate(new RTCIceCandidate(candidate)); } }
function startConnectionTimeout() { clearConnectionTimeout(); state.connectionTimeoutId = setTimeout(() => { setStatus(t("connectionTimeout"), t("connectionTimeoutHint"), "error"); closePeerConnection(); }, 18000); }
function persistSession() { if (state.authToken) localStorage.setItem("spacecall-auth-token", state.authToken); else localStorage.removeItem("spacecall-auth-token"); if (state.account) localStorage.setItem("spacecall-account", JSON.stringify(state.account)); else localStorage.removeItem("spacecall-account"); }
function clearSession() { state.authToken = ""; state.account = null; persistSession(); }
function requireAuthScreen(spaceId = "") { if (spaceId) state.pendingSpaceId = spaceId; showScreen("account"); setStatus(t("authRequiredTitle"), t("authRequiredHint"), "idle"); }
function renderCurrentAccount() { if (!state.account) { el.currentAccountBox.classList.add("hidden"); el.topAccountLabel.classList.add("hidden"); el.topAccountLabel.textContent = "未ログイン"; applyAvatar(el.topProfileAvatar, "?", "", 0); return; } el.currentAccountBox.classList.remove("hidden"); el.currentAccountText.textContent = `${t("currentAccountPrefix")}: ${state.account.displayName}`; el.topAccountLabel.classList.remove("hidden"); el.topAccountLabel.textContent = state.account.displayName; applyAvatar(el.topProfileAvatar, state.account.displayName, state.account.avatarUrl || "", 0, state.account.avatarIcon || ""); }
function syncJoinFormFromAccount() { if (!state.account) return; el.displayNameInput.value = state.account.displayName || ""; updateAvatarPreview(); }
function togglePasswordVisibility(input, button) { const isPassword = input.type === "password"; input.type = isPassword ? "text" : "password"; button.textContent = isPassword ? t("hidePassword") : t("showPassword"); }
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
          ${previews.map((person, index) => `<div class="member-bubble" data-avatar-name="${escapeHtml(person.displayName)}" data-avatar-url="${escapeHtml(person.avatarUrl || "")}" data-avatar-icon="${escapeHtml(person.avatarIcon || "")}" data-avatar-index="${index}">${escapeHtml(person.avatarIcon || initials(person.displayName))}</div>`).join("")}
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

  el.spaceList.querySelectorAll("[data-avatar-name]").forEach((node) => applyAvatar(node, node.dataset.avatarName, node.dataset.avatarUrl, Number(node.dataset.avatarIndex || 0), node.dataset.avatarIcon || ""));
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
      <div class="message-avatar" data-avatar-name="${escapeHtml(message.displayName)}" data-avatar-url="${escapeHtml(message.avatarUrl || "")}" data-avatar-icon="${escapeHtml(message.avatarIcon || "")}" data-avatar-index="${index}">${escapeHtml(message.avatarIcon || initials(message.displayName))}</div>
      <div>
        <div class="message-head"><strong>${escapeHtml(message.displayName)}</strong><span class="muted">${escapeHtml(new Date(message.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))}</span></div>
        <div class="message-body">${escapeHtml(message.text)}</div>
      </div>
    </article>
  `).join("");
  el.messageList.querySelectorAll("[data-avatar-name]").forEach((node) => applyAvatar(node, node.dataset.avatarName, node.dataset.avatarUrl, Number(node.dataset.avatarIndex || 0), node.dataset.avatarIcon || ""));
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

function updateAvatarPreview() { applyAvatar(el.avatarPreview, el.displayNameInput.value.trim() || state.profile.displayName || "?", "", 0, state.profile.avatarIcon || state.account?.avatarIcon || ""); }
function updateSelfProfile() { el.selfNameText.textContent = state.profile.displayName || "-"; applyAvatar(el.selfAvatar, state.profile.displayName || "?", state.profile.avatarUrl || "", 0, state.profile.avatarIcon || ""); }
function updatePeerProfile() { el.peerName.textContent = state.peerName || t("unknownPeer"); applyAvatar(el.peerAvatar, state.peerName || "?", state.peerAvatarUrl || "", 1, state.peerAvatarIcon || ""); }
function showFeed(feed) { state.activeFeed = feed; el.chatTabButton.classList.toggle("active", feed === "chat"); el.historyTabButton.classList.toggle("active", feed === "history"); el.chatPane.classList.toggle("hidden", feed !== "chat"); el.historyPane.classList.toggle("hidden", feed !== "history"); }
function showScreen(screen) { state.activeScreen = screen; el.searchSection.classList.toggle("hidden", screen !== "search"); el.accountSection.classList.toggle("hidden", screen !== "account"); el.createSection.classList.toggle("hidden", screen !== "create"); el.callSection.classList.toggle("hidden", screen !== "call"); el.feedSection.classList.toggle("hidden", !(screen === "chat" || screen === "history")); showFeed(screen === "history" ? "history" : screen === "chat" ? "chat" : state.activeFeed); [el.navSearch, el.navAccount, el.navCall, el.navChat, el.navHistory].forEach((button) => button.classList.remove("nav-active")); if (screen === "search") el.navSearch.classList.add("nav-active"); if (screen === "account") el.navAccount.classList.add("nav-active"); if (screen === "create" || screen === "call") el.navCall.classList.add("nav-active"); if (screen === "chat") el.navChat.classList.add("nav-active"); if (screen === "history") el.navHistory.classList.add("nav-active"); }

function applyTranslations() {
  document.documentElement.lang = state.language;
  document.body.dir = (translations[state.language] || translations.ja).dir;
  el.topBadge.textContent = t("topBadge"); el.heroTitle.textContent = t("heroTitle"); el.heroDescription.textContent = t("heroDescription"); el.searchInput.placeholder = t("searchPlaceholder"); el.metricSpacesLabel.textContent = t("metricSpacesLabel"); el.metricCallsLabel.textContent = t("metricCallsLabel");
  el.authTitle.textContent = t("authTitle"); el.authDescription.textContent = t("authDescription"); el.passwordLabel.textContent = t("passwordLabel"); el.accountNameLabel.textContent = t("accountNameLabel"); el.iconLabel.textContent = t("iconLabel"); el.signUpButton.textContent = t("signUpButton"); el.toggleSignupPasswordButton.textContent = t(el.signupPasswordInput.type === "password" ? "showPassword" : "hidePassword");
  el.createRoomButton.textContent = t("createRoomButton");
  el.createRoomTitle.textContent = t("createRoomTitle"); el.createRoomDescription.textContent = t("createRoomDescription"); el.createRoomWordLabel.textContent = t("createRoomWordLabel"); el.submitCreateRoomButton.textContent = t("submitCreateRoomButton"); el.cancelCreateRoomButton.textContent = t("cancelCreateRoomButton");
  el.roomLabel.textContent = t("roomLabel"); el.displayNameLabel.textContent = t("displayNameLabel"); el.joinButton.textContent = t("joinButton"); el.queueButton.textContent = t("queueButton"); el.leaveQueueButton.textContent = t("leaveQueueButton"); el.endCallButton.textContent = t("endCallButton"); el.muteLabel.textContent = t("muteLabel"); el.chatTabButton.textContent = t("chatTab"); el.historyTabButton.textContent = t("historyTab"); el.chatInput.placeholder = t("chatPlaceholder"); el.sendButton.textContent = t("sendButton"); el.highlightUsersLabel.textContent = t("highlightUsersLabel"); el.highlightWaitingLabel.textContent = t("highlightWaitingLabel"); el.highlightCallsLabel.textContent = t("highlightCallsLabel"); el.selfProfileLabel.textContent = t("selfProfileLabel"); el.partnerLabel.textContent = t("partnerLabel"); el.statusLabel.textContent = t("statusLabel");
  setCallPhase(state.callPhase || "idle");
  renderSpaces(); renderRoom(); renderMessages(); renderHistory();
}

async function loadConfig() { state.config = await api("/api/config"); state.rtcIceServers = state.config?.rtcIceServers?.length ? state.config.rtcIceServers : [{ urls: "stun:stun.l.google.com:19302" }]; }
async function loadSpaces(query = state.query) { state.query = query; const data = await api(`/api/spaces?q=${encodeURIComponent(query)}&lang=${encodeURIComponent(state.language)}`); state.spaces = data.spaces || []; if (state.selectedSpace) { const refreshed = state.spaces.find((space) => space.id === state.selectedSpace.id); if (refreshed) state.selectedSpace = refreshed; } renderSpaces(); renderRoom(); }
async function loadMessages() { if (!state.selectedSpace) { state.messages = []; renderMessages(); return; } const data = await api(`/api/messages?spaceId=${encodeURIComponent(state.selectedSpace.id)}`); state.messages = data.messages || []; renderMessages(); }
async function loadHistory() { if (!state.selectedSpace) { state.history = []; renderHistory(); return; } const path = state.participantId ? `/api/history?participantId=${encodeURIComponent(state.participantId)}` : `/api/history?spaceId=${encodeURIComponent(state.selectedSpace.id)}`; const data = await api(path); state.history = data.history || []; renderHistory(); }
function openCreateRoomScreen() { if (!state.account || !state.authToken) { requireAuthScreen(); return; } el.createRoomWordInput.value = el.searchInput.value.trim() || state.query.trim(); showScreen("create"); }
async function createRoomFromKeyword(event) { if (event) event.preventDefault(); const keyword = el.createRoomWordInput.value.trim() || el.searchInput.value.trim() || state.query.trim(); if (!keyword) return; const data = await api("/api/spaces/create", { method: "POST", body: JSON.stringify({ keyword, query: keyword, name: keyword, lang: state.language }) }); el.searchInput.value = ""; await loadSpaces(""); selectSpace(data.space); }

function openSpace(space) { state.selectedSpace = space; state.participantId = null; state.profile = { displayName: state.account?.displayName || "", avatarUrl: state.account?.avatarUrl || "", avatarIcon: state.account?.avatarIcon || "" }; state.peerId = null; state.peerName = ""; state.peerAvatarUrl = ""; state.peerAvatarIcon = ""; state.messages = []; state.history = []; state.pendingIceCandidates = []; closeEventStream(); closePeerConnection(); clearConnectionTimeout(); syncJoinFormFromAccount(); updateSelfProfile(); updatePeerProfile(); setStatus(t("roomBeforeJoin"), t("defaultHint"), "idle"); renderRoom(); renderMessages(); renderHistory(); showScreen("call"); }
function selectSpace(space) { if (!space) return; if (!state.account || !state.authToken) { requireAuthScreen(space.id); return; } state.pendingSpaceId = ""; openSpace(space); }
async function joinSelectedSpace(event) { event.preventDefault(); if (!state.selectedSpace) return; const displayName = el.displayNameInput.value.trim(); if (!displayName) return; await ensureLocalAudio(); const data = await api("/api/participants", { method: "POST", body: JSON.stringify({ displayName, avatarUrl: "", avatarIcon: state.account?.avatarIcon || "", preferredLanguage: state.language, spaceId: state.selectedSpace.id, keyword: state.query }) }); state.participantId = data.participantId; state.profile = data.profile; state.selectedSpace = data.space; state.messages = data.messages || []; state.history = data.history || []; updateSelfProfile(); openEventStream(); renderRoom(); renderMessages(); renderHistory(); setStatus(t("roomJoined"), t("roomJoinedHint"), "preparing"); showScreen("call"); await joinQueue(); }
function closeEventStream() { if (state.eventSource) { state.eventSource.close(); state.eventSource = null; } }
function closePeerConnection() { clearConnectionTimeout(); if (state.peerConnection) { state.peerConnection.ontrack = null; state.peerConnection.onicecandidate = null; state.peerConnection.onconnectionstatechange = null; state.peerConnection.oniceconnectionstatechange = null; state.peerConnection.close(); state.peerConnection = null; } state.pendingIceCandidates = []; el.remoteAudio.pause(); el.remoteAudio.srcObject = null; }
function createPeerConnection(remoteParticipantId) { closePeerConnection(); const connection = new RTCPeerConnection({ iceServers: state.rtcIceServers }); state.peerConnection = connection; state.peerId = remoteParticipantId; state.pendingIceCandidates = []; if (state.localStream) state.localStream.getTracks().forEach((track) => connection.addTrack(track, state.localStream)); connection.onicecandidate = async (event) => { if (!event.candidate || !state.peerId) return; await sendSignal(state.peerId, "ice-candidate", event.candidate); }; connection.ontrack = async (event) => { el.remoteAudio.srcObject = event.streams[0]; try { await el.remoteAudio.play(); } catch (error) { console.warn("remote audio play failed", error); } setStatus(t("inCall"), `${state.peerName} ${t("withCall")}`, "connected"); }; connection.onconnectionstatechange = () => { if (connection.connectionState === "connecting") { setStatus(t("signalingStatus"), t("signalingHint"), "connecting"); } if (connection.connectionState === "connected") { clearConnectionTimeout(); setStatus(t("inCall"), `${state.peerName} ${t("withCall")}`, "connected"); } if (["failed", "closed", "disconnected"].includes(connection.connectionState)) { setStatus(t("disconnected"), t("disconnectedHint"), "error"); } syncActionButtons(); }; connection.oniceconnectionstatechange = () => { if (["failed", "disconnected"].includes(connection.iceConnectionState)) { setStatus(t("disconnected"), t("disconnectedHint"), "error"); syncActionButtons(); } }; syncActionButtons(); return connection; }
async function ensureLocalAudio() { if (state.localStream) return state.localStream; if (!window.isSecureContext) throw new Error("HTTPS または localhost で開いてください。"); if (!navigator.mediaDevices?.getUserMedia) throw new Error("この端末のブラウザではマイク取得に対応していません。"); setStatus(t("preparingMic"), t("preparingMicHint"), "preparing"); state.localStream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }, video: false }); el.muteToggle.checked = false; syncActionButtons(); return state.localStream; }
async function sendSignal(toId, kind, data) { await api("/api/signal", { method: "POST", body: JSON.stringify({ participantId: state.participantId, toId, kind, data }) }); }
function openEventStream() {
  closeEventStream();
  state.eventSource = new EventSource(`/api/events?participantId=${encodeURIComponent(state.participantId)}&authToken=${encodeURIComponent(state.authToken)}`);
  state.eventSource.addEventListener("matched", async (event) => {
    const payload = JSON.parse(event.data);
    state.peerId = payload.peerId; state.peerName = payload.peerName; state.peerAvatarUrl = payload.peerAvatarUrl || ""; state.peerAvatarIcon = payload.peerAvatarIcon || ""; updatePeerProfile(); setStatus(t("matched"), `${payload.peerName} ${t("connectingTo")}`, "connecting"); showScreen("call"); await ensureLocalAudio(); const connection = createPeerConnection(payload.peerId); startConnectionTimeout(); if (payload.initiator) { const offer = await connection.createOffer(); await connection.setLocalDescription(offer); await sendSignal(payload.peerId, "offer", offer); }
  });
  state.eventSource.addEventListener("signal", async (event) => { const payload = JSON.parse(event.data); await ensureLocalAudio(); if (!state.peerConnection) createPeerConnection(payload.fromId); if (payload.kind === "offer") { setStatus(t("signalingStatus"), t("signalingHint"), "connecting"); startConnectionTimeout(); await state.peerConnection.setRemoteDescription(new RTCSessionDescription(payload.data)); await flushPendingIceCandidates(); const answer = await state.peerConnection.createAnswer(); await state.peerConnection.setLocalDescription(answer); state.peerId = payload.fromId; await sendSignal(payload.fromId, "answer", answer); return; } if (payload.kind === "answer") { await state.peerConnection.setRemoteDescription(new RTCSessionDescription(payload.data)); await flushPendingIceCandidates(); return; } if (payload.kind === "ice-candidate" && payload.data) { if (state.peerConnection.remoteDescription) { await state.peerConnection.addIceCandidate(new RTCIceCandidate(payload.data)); } else { state.pendingIceCandidates.push(payload.data); } } });
  state.eventSource.addEventListener("message", (event) => { const payload = JSON.parse(event.data); state.messages = [...state.messages, payload].slice(-100); renderMessages(); });
  state.eventSource.addEventListener("history-updated", (event) => { const payload = JSON.parse(event.data); state.history = [payload, ...state.history].slice(0, 40); renderHistory(); });
  state.eventSource.addEventListener("space-stats", (event) => { const payload = JSON.parse(event.data); const patch = { activeUsers: payload.activeUsers, waitingUsers: payload.waitingUsers, activeCalls: payload.activeCalls, participantPreviews: payload.participantPreviews || [] }; const index = state.spaces.findIndex((space) => space.id === payload.id); if (index >= 0) state.spaces[index] = { ...state.spaces[index], ...patch }; if (state.selectedSpace?.id === payload.id) { state.selectedSpace = { ...state.selectedSpace, ...patch }; renderRoom(); } renderSpaces(); });
  state.eventSource.addEventListener("peer-left", async (event) => { const payload = JSON.parse(event.data); state.peerId = null; state.peerName = ""; state.peerAvatarUrl = ""; state.peerAvatarIcon = ""; closePeerConnection(); updatePeerProfile(); setStatus(t("endedCall"), payload.reason || t("peerLeft"), "idle"); await loadHistory(); });
  state.eventSource.addEventListener("error", () => { setStatus(t("eventStreamError"), t("eventStreamErrorHint"), "error"); });
}
async function joinQueue() { if (!state.participantId) { setStatus(t("enterSpaceFirst"), t("defaultHint"), "idle"); return; } await ensureLocalAudio(); await api("/api/queue/join", { method: "POST", body: JSON.stringify({ participantId: state.participantId }) }); setStatus(t("waitingStatus"), t("waitingHint"), "waiting"); await loadSpaces(state.query); syncActionButtons(); }
async function leaveQueue() { if (!state.participantId) return; clearConnectionTimeout(); await api("/api/queue/leave", { method: "POST", body: JSON.stringify({ participantId: state.participantId }) }); setStatus(t("stoppedWaiting"), t("defaultHint"), "idle"); await loadSpaces(state.query); syncActionButtons(); }
async function endCall() { if (!state.participantId) return; const data = await api("/api/call/end", { method: "POST", body: JSON.stringify({ participantId: state.participantId }) }); state.peerId = null; state.peerName = ""; state.peerAvatarUrl = ""; state.peerAvatarIcon = ""; state.history = data.history || state.history; closePeerConnection(); updatePeerProfile(); renderHistory(); setStatus(t("endedCall"), t("defaultHint"), "idle"); await loadSpaces(state.query); syncActionButtons(); }
async function sendMessage(event) { event.preventDefault(); if (!state.participantId) { setStatus(t("enterSpaceFirst"), t("defaultHint")); return; } const text = el.chatInput.value.trim(); if (!text) return; await api("/api/messages", { method: "POST", body: JSON.stringify({ participantId: state.participantId, text }) }); el.chatInput.value = ""; }
function accountEmailFromName(displayName) { return `${String(displayName || "").trim().toLowerCase().replace(/[^a-z0-9_-]+/g, "-") || "user"}@tellnow.local`; }
async function signUpAccountFromForm() { const displayName = el.authDisplayNameInput.value.trim(); const password = el.signupPasswordInput.value.trim(); const avatarIcon = el.iconInput.value.trim(); const payload = { email: accountEmailFromName(displayName), password, displayName, avatarUrl: "", avatarIcon, preferredLanguage: state.language }; const data = await api("/api/auth/signup", { method: "POST", body: JSON.stringify(payload) }); state.account = data.account; state.authToken = data.authToken || ""; persistSession(); renderCurrentAccount(); syncJoinFormFromAccount(); setStatus(t("signedUp"), t("signedUpHint"), "idle"); await loadSpaces(state.query); const pendingSpace = state.pendingSpaceId ? state.spaces.find((space) => space.id === state.pendingSpaceId) : null; state.pendingSpaceId = ""; if (pendingSpace) { openSpace(pendingSpace); return; } showScreen("search"); }
function showError(error) { console.error(error); const hint = /android|media|permission|secure|NotAllowed|NotReadable/i.test(String(error?.message || "")) ? `${error?.message || t("errorHint")} ${t("androidHint")}` : error?.message || t("errorHint"); setStatus(t("error"), hint, "error"); }
async function bootstrap() { await loadConfig(); el.languageSelect.value = state.language; const savedAccount = localStorage.getItem("spacecall-account"); if (savedAccount && !state.account) { try { state.account = JSON.parse(savedAccount); } catch (error) { localStorage.removeItem("spacecall-account"); } } if (state.authToken) { try { const session = await api(`/api/auth/session?authToken=${encodeURIComponent(state.authToken)}`); state.account = session.account; persistSession(); } catch (error) { clearSession(); } } applyTranslations(); renderCurrentAccount(); syncJoinFormFromAccount(); updateSelfProfile(); updatePeerProfile(); updateAvatarPreview(); await loadSpaces(state.query).catch(() => {}); showScreen("search"); setStatus(t("roomBeforeJoin"), t("defaultHint"), "idle"); setInterval(() => { loadSpaces(state.query).catch(() => {}); if (state.selectedSpace && state.authToken) { loadMessages().catch(() => {}); loadHistory().catch(() => {}); } }, 8000); }

el.searchButton.addEventListener("click", () => loadSpaces(el.searchInput.value.trim()).catch(showError));
el.createRoomButton.addEventListener("click", () => openCreateRoomScreen());
el.searchInput.addEventListener("keydown", (event) => { if (event.key === "Enter") { event.preventDefault(); loadSpaces(el.searchInput.value.trim()).catch(showError); } });
el.languageSelect.addEventListener("change", async () => { state.language = el.languageSelect.value; localStorage.setItem("spacecall-language", state.language); applyTranslations(); await loadSpaces(state.query).catch(showError); });
el.displayNameInput.addEventListener("input", updateAvatarPreview);
el.joinForm.addEventListener("submit", (event) => joinSelectedSpace(event).catch(showError));
el.queueButton.addEventListener("click", () => joinQueue().catch(showError));
el.leaveQueueButton.addEventListener("click", () => leaveQueue().catch(showError));
el.endCallButton.addEventListener("click", () => endCall().catch(showError));
el.chatForm.addEventListener("submit", (event) => sendMessage(event).catch(showError));
el.chatTabButton.addEventListener("click", () => showFeed("chat"));
el.historyTabButton.addEventListener("click", () => showFeed("history"));
el.signupForm?.addEventListener("submit", (event) => { event.preventDefault(); signUpAccountFromForm().catch(showError); });
el.toggleSignupPasswordButton.addEventListener("click", () => togglePasswordVisibility(el.signupPasswordInput, el.toggleSignupPasswordButton));
el.navSearch.addEventListener("click", () => showScreen("search"));
el.navAccount.addEventListener("click", () => showScreen("account"));
el.navCall.addEventListener("click", () => showScreen(state.selectedSpace ? "call" : "create"));
el.navChat.addEventListener("click", () => showScreen("chat"));
el.navHistory.addEventListener("click", () => showScreen("history"));
el.createRoomForm.addEventListener("submit", (event) => createRoomFromKeyword(event).catch(showError));
el.cancelCreateRoomButton.addEventListener("click", () => showScreen("search"));
el.muteToggle.addEventListener("change", () => { if (!state.localStream) return; state.localStream.getAudioTracks().forEach((track) => { track.enabled = !el.muteToggle.checked; }); });
window.addEventListener("beforeunload", () => { if (state.participantId) navigator.sendBeacon(`/api/participants/${encodeURIComponent(state.participantId)}?authToken=${encodeURIComponent(state.authToken || "")}`, ""); });
bootstrap().catch(showError);


