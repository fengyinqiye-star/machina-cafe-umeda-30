# Cafe Umeda - Webサイト

大阪・梅田にある小さなカフェのWebサイトです。

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v3
- **フォーム**: react-hook-form
- **メール送信**: Resend API
- **ホスティング**: Vercel

## セットアップ

```bash
# 依存パッケージのインストール
npm install

# 環境変数の設定
cp .env.local.example .env.local
# .env.local を編集して各環境変数を設定

# 開発サーバーの起動
npm run dev
```

http://localhost:3000 でアクセスできます。

## 環境変数

| 変数名 | 用途 |
|--------|------|
| `RESEND_API_KEY` | Resend APIキー（https://resend.com/api-keys で取得） |
| `RESEND_FROM_EMAIL` | メール送信元アドレス |
| `CONTACT_TO_EMAIL` | お問い合わせ受信先メールアドレス |

## ページ構成

| パス | 内容 |
|------|------|
| `/` | トップページ |
| `/menu` | メニュー一覧 |
| `/gallery` | ギャラリー |
| `/access` | 店舗情報・アクセス |
| `/contact` | お問い合わせ |
| `/privacy` | プライバシーポリシー |

## コンテンツの編集

メニュー・店舗情報・ギャラリー画像はデータファイルで管理しています。
詳しい編集手順は HANDOVER.md をご確認ください。

| データ | ファイル |
|--------|---------|
| メニュー | `src/data/menu.ts` |
| 店舗情報 | `src/data/shop-info.ts` |
| ギャラリー画像 | `src/data/gallery.ts` |

## ビルド

```bash
npm run build
npm start
```
