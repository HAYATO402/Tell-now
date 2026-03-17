# SwiftUI Screen Plan

## Goal

Web 版の体験をそのまま iOS に落としやすいように、SwiftUI での画面分割と状態管理の基準をまとめます。

## App Structure

- `RootTabView`
- `SearchSpacesView`
- `SpaceDetailView`
- `RandomCallView`
- `SpaceChatView`
- `CallHistoryView`
- `ProfileSetupSheet`

## Navigation Flow

1. `SearchSpacesView`
2. スペース選択で `SpaceDetailView`
3. 未入室なら `ProfileSetupSheet`
4. 入室後は `RandomCallView` と `SpaceChatView` を同一画面でセグメント切替
5. 通話終了後は `CallHistoryView` にすぐ戻れる導線を置く

## Recommended View Models

- `AppSettingsViewModel`
  - language
  - isSupabaseConnected
- `SpacesViewModel`
  - query
  - spaces
  - selectedSpace
  - loadSpaces()
- `PresenceViewModel`
  - participantId
  - activeUsers
  - waitingUsers
  - activeCalls
  - joinSpace()
  - joinQueue()
  - leaveQueue()
- `CallViewModel`
  - peerName
  - peerAvatarURL
  - callState
  - startWebRTC()
  - endCall()
- `ChatViewModel`
  - messages
  - sendMessage()
  - subscribeMessages()
- `HistoryViewModel`
  - items
  - loadHistory()

## UI Direction

- 背景は暖色のソフトグラデーション
- スペースカードは角丸 24-28pt の大きめカード
- CTA は下部に寄せた丸ボタン
- 人数は `users / waiting / live calls` の 3 指標を横並び
- iPhone では 1 カラム、iPad では検索と詳細の 2 カラム
- アラビア語は `layoutDirection = .rightToLeft` を前提に設計

## SwiftUI Components

- `SpaceCard`
  - icon
  - title
  - description
  - metrics row
  - tags row
  - join button
- `MetricCapsule`
- `AvatarBadge`
- `StatusPanel`
- `ChatBubble`
- `HistoryRow`

## Design Tokens

- Background: `#F8F4ED -> #EFE7DC`
- Accent: `#FF6B3D`
- Accent Deep: `#DC4D22`
- Text: `#201A16`
- Muted: `#6A5F57`
- Large Radius: `30`
- Medium Radius: `24`
- Small Radius: `18`

## API Mapping

- `GET /api/spaces?q=&lang=` -> space search
- `POST /api/participants` -> room entry
- `GET /api/events` -> SSE bridge for presence/chat/history updates
- `POST /api/queue/join` -> random call queue
- `POST /api/messages` -> send text chat
- `GET /api/history` -> call history

## iOS Notes

- 音声通話は WebRTC の iOS SDK へ置き換える
- SSE は `URLSession.bytes` または WebSocket 化で管理しやすい
- 画像は `AsyncImage` で十分だが、本番はキャッシュライブラリ推奨
- 多言語文言は `Localizable.strings` と API レスポンスの併用が自然
