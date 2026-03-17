# SpaceCall

検索ワードから関連スペースを見つけて入室し、そのスペース内の待機ユーザーとランダムで1対1音声通話できるプロトタイプです。iOS アプリ化を見据えて、モバイルで見やすいカード型 UI と API ベースの構成に寄せています。

## 追加したもの

- 通話履歴
- プロフィール画像 URL
- スペース内テキストチャット
- スペースごとの参加人数、待機人数、現在通話中の組数表示
- 日本語 / English / 中文 / العربية / Español の UI 切り替え
- Supabase 保存フックとスキーマ
- SwiftUI 実装用の画面設計メモ

## 起動

1. `npm start`
2. ブラウザで `http://localhost:3000`

## Supabase 対応

サーバーに以下の環境変数があると、プロフィール・メッセージ・通話履歴・スペース定義を Supabase に保存し、メッセージ履歴と通話履歴の読み込みも Supabase 優先になります。

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

テーブル作成 SQL は [supabase/schema.sql](C:\Users\tsuba\Documents\通話共有アプリ\supabase\schema.sql) にあります。`service_role` はサーバー側だけで使ってください。

## SwiftUI 設計

iOS 画面設計のたたき台は [IOS_SWIFTUI_PLAN.md](C:\Users\tsuba\Documents\通話共有アプリ\IOS_SWIFTUI_PLAN.md) にまとめています。`Search -> Space Detail -> Random Call / Chat -> History` の流れと ViewModel 分割まで書いてあります。

## 主な API

- `GET /api/spaces?q=keyword&lang=ja`
- `POST /api/participants`
- `POST /api/queue/join`
- `POST /api/messages`
- `GET /api/messages?spaceId=...`
- `GET /api/history?participantId=...`
- `POST /api/call/end`

## 注意

- 音声通話は WebRTC + 公開 STUN を使っています
- 本格運用には TURN、認証、通報、ブロック、モデレーション、永続セッション管理が必要です
- iOS ネイティブ化する場合は、この API をそのまま土台にして SwiftUI 側を組みやすい構成です
