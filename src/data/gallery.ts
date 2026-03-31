// ====================================
// ギャラリー画像
// 写真の追加・差し替えはこのファイルを編集してください。
// 画像ファイルは public/images/gallery/ に配置します。
// 詳しい手順は HANDOVER.md をご確認ください。
// ====================================

export interface GalleryImage {
  /** 画像パス（/images/gallery/ 配下）またはUnsplash URL */
  src: string;
  /** 画像の説明（alt属性） */
  alt: string;
  /** 表示の横幅比率（オプション: "wide" で2列分） */
  span?: "wide";
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
    alt: "店内の様子 - カウンター席",
  },
  {
    src: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=1200&h=600&fit=crop",
    alt: "店内の様子 - テーブル席",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&h=600&fit=crop",
    alt: "カフェラテ",
  },
  {
    src: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&h=600&fit=crop",
    alt: "抹茶ラテ",
  },
  {
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&h=600&fit=crop",
    alt: "店内の様子 - 窓際",
  },
  {
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop",
    alt: "本日のケーキ",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    alt: "ハンドドリップコーヒー",
  },
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=600&fit=crop",
    alt: "コーヒー豆",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
    alt: "ラテアート",
  },
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=600&fit=crop",
    alt: "エスプレッソ",
  },
];
