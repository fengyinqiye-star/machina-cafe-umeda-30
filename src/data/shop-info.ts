// ====================================
// 店舗情報
// 住所・営業時間などの変更はこのファイルを編集してください。
// 詳しい手順は HANDOVER.md をご確認ください。
// ====================================

export const shopInfo = {
  /** 店名 */
  name: "Cafe Umeda",
  /** 店名（日本語表記） */
  nameJa: "カフェ ウメダ",
  /** 郵便番号 */
  postalCode: "530-0001",
  /** 住所 */
  address: "大阪府大阪市北区梅田X-X-X",
  /** 電話番号 */
  phone: "06-XXXX-XXXX",
  /** メールアドレス */
  email: "info@cafe-umeda.example.com",
  /** 営業時間 */
  hours: "10:00 - 20:00",
  /** 定休日 */
  closedDay: "月曜日",
  /** テイクアウト */
  takeout: "テイクアウトについてはお問い合わせください",
  /** 駐車場 */
  parking: "近隣のコインパーキングをご利用ください",
  /** アクセス案内 */
  accessGuide: [
    "JR大阪駅 徒歩5分",
    "地下鉄御堂筋線 梅田駅 徒歩3分",
  ],
  /** Googleマップ埋め込みURL（iframeのsrc） */
  googleMapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.2!2d135.4983!3d34.7024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzA4LjYiTiAxMzXCsDI5JzU0LjAiRQ!5e0!3m2!1sja!2sjp!4v1",
  /** Googleマップ外部リンク */
  googleMapUrl: "https://maps.google.com/?q=大阪市北区梅田",
  /** SNSリンク（空の場合は非表示にする） */
  sns: {
    instagram: "",
    twitter: "",
    facebook: "",
  },
} as const;
