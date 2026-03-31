# 引き渡しガイド - Cafe Umeda Webサイト

## 1. メニューの追加・変更・削除

ファイル: `src/data/menu.ts`

### メニューを追加する場合

`menuItems` 配列に新しいオブジェクトを追加します:

```ts
{
  id: "new-item",          // 一意のID（英数字・ハイフン）
  name: "新メニュー",       // 商品名
  nameEn: "New Item",      // 英語名（省略可）
  description: "説明文",    // 商品説明
  price: 500,              // 税込価格（円）
  category: "hot",         // "hot" / "cold" / "food"
  image: "/images/menu/new-item.jpg",  // 画像パス
  featured: false,         // トップページに表示するか
},
```

### 価格を変更する場合

該当メニューの `price` の数値を変更してください。

### メニューを削除する場合

該当のオブジェクトを配列から削除してください。

## 2. 店舗情報の変更

ファイル: `src/data/shop-info.ts`

住所・電話番号・営業時間・定休日・Googleマップ埋め込みURLなどを変更できます。
各項目にコメントで説明がついています。

### Googleマップの差し替え

1. Google マップで店舗を検索
2. 「共有」>「地図を埋め込む」でiframeコードを取得
3. `src="..."` の部分を `googleMapEmbedUrl` に設定

## 3. ギャラリー写真の差し替え

ファイル: `src/data/gallery.ts`

### 写真を差し替える場合

1. 新しい画像を `public/images/gallery/` に配置
2. `galleryImages` 配列の `src` を新しいパスに変更
3. `alt` を画像の説明に変更

```ts
{
  src: "/images/gallery/your-photo.jpg",  // 画像パス
  alt: "写真の説明",                       // alt属性
  span: "wide",                            // 2列分の幅にする場合（省略可）
},
```

## 4. メール設定（Resend API）

### アカウント作成

1. https://resend.com でアカウント作成
2. https://resend.com/api-keys でAPIキーを発行
3. Vercelダッシュボード > Settings > Environment Variables で設定:
   - `RESEND_API_KEY`: 発行したAPIキー
   - `RESEND_FROM_EMAIL`: 送信元アドレス（ドメイン認証後に変更）
   - `CONTACT_TO_EMAIL`: お問い合わせ受信先メールアドレス

### 独自ドメインからのメール送信

Resendでドメイン認証を行うと、独自ドメインからメールを送信できます。
https://resend.com/docs/dashboard/domains/introduction

## 5. Vercelへのデプロイ

GitHubリポジトリにpushすると自動でデプロイされます。

### 手動デプロイ

```bash
npm run build  # ビルド確認
git add .
git commit -m "メニュー更新"
git push origin main
```

## 6. カスタムドメインの設定

1. Vercelダッシュボード > Settings > Domains
2. 「Add Domain」でドメインを追加
3. DNS設定に表示されるCNAMEレコードを設定

## 7. 仮テキスト・仮画像チェックリスト

以下の箇所は仮テキスト・仮画像を使用しています。正式な内容に差し替えてください:

- [ ] ヒーロー背景画像（Unsplash仮画像）
- [ ] メニュー写真（Unsplash仮画像）
- [ ] ギャラリー写真（Unsplash仮画像）
- [ ] 店名・住所・電話番号（`src/data/shop-info.ts`）
- [ ] Googleマップ埋め込みURL（`src/data/shop-info.ts`）
- [ ] メニューデータ（`src/data/menu.ts`）
- [ ] プライバシーポリシーの店名・連絡先（`src/app/privacy/page.tsx`）
- [ ] SNSリンク（`src/data/shop-info.ts`）
- [ ] OGP画像（`src/app/layout.tsx`）

## 8. レートリミットについて

現在のお問い合わせフォームには簡易的なスパム対策のみ実装されています。
大量のスパムが来る場合は、Upstash Redis によるレートリミットの導入を推奨します。
https://upstash.com/docs/redis/overall/getstarted
