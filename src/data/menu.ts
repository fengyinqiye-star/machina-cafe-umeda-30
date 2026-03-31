// ====================================
// メニューデータ
// このファイルを編集してメニューを更新できます。
// 詳しい手順は HANDOVER.md をご確認ください。
// ====================================

export type MenuCategory = "hot" | "cold" | "food";

export interface MenuItem {
  /** 商品ID（一意であれば何でもOK） */
  id: string;
  /** 商品名 */
  name: string;
  /** 商品名（英語表記、省略可） */
  nameEn?: string;
  /** 商品説明 */
  description: string;
  /** 税込価格（円） */
  price: number;
  /** カテゴリ */
  category: MenuCategory;
  /** 画像パス（/images/menu/ 配下）またはUnsplash URL */
  image: string;
  /** おすすめフラグ（トップページに表示） */
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: "latte",
    name: "カフェラテ",
    nameEn: "Caffe Latte",
    description: "エスプレッソにスチームミルクを合わせた定番の一杯",
    price: 550,
    category: "hot",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&h=450&fit=crop",
    featured: true,
  },
  {
    id: "espresso",
    name: "エスプレッソ",
    nameEn: "Espresso",
    description: "厳選した豆を使った力強い一杯",
    price: 400,
    category: "hot",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&h=450&fit=crop",
    featured: false,
  },
  {
    id: "cappuccino",
    name: "カプチーノ",
    nameEn: "Cappuccino",
    description: "きめ細かなフォームミルクとエスプレッソのハーモニー",
    price: 550,
    category: "hot",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=450&fit=crop",
    featured: true,
  },
  {
    id: "drip-coffee",
    name: "ドリップコーヒー",
    nameEn: "Drip Coffee",
    description: "丁寧にハンドドリップした香り豊かなコーヒー",
    price: 450,
    category: "hot",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=450&fit=crop",
    featured: false,
  },
  {
    id: "matcha-latte",
    name: "抹茶ラテ",
    nameEn: "Matcha Latte",
    description: "京都産宇治抹茶を使ったまろやかなラテ",
    price: 600,
    category: "hot",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&h=450&fit=crop",
    featured: true,
  },
  {
    id: "iced-latte",
    name: "アイスカフェラテ",
    nameEn: "Iced Caffe Latte",
    description: "冷たいミルクにエスプレッソを注いだ爽やかなラテ",
    price: 580,
    category: "cold",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=450&fit=crop",
    featured: false,
  },
  {
    id: "iced-coffee",
    name: "アイスコーヒー",
    nameEn: "Iced Coffee",
    description: "水出しで丁寧に抽出したすっきりとした味わい",
    price: 480,
    category: "cold",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&h=450&fit=crop",
    featured: false,
  },
  {
    id: "iced-matcha",
    name: "アイス抹茶ラテ",
    nameEn: "Iced Matcha Latte",
    description: "宇治抹茶の旨味を冷たいミルクで楽しむ一杯",
    price: 630,
    category: "cold",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=600&h=450&fit=crop",
    featured: true,
  },
  {
    id: "lemonade",
    name: "自家製レモネード",
    nameEn: "Homemade Lemonade",
    description: "国産レモンを使った爽やかな自家製レモネード",
    price: 530,
    category: "cold",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&h=450&fit=crop",
    featured: false,
  },
  {
    id: "croissant",
    name: "クロワッサン",
    nameEn: "Croissant",
    description: "バターの香り豊かなサクサクのクロワッサン",
    price: 350,
    category: "food",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=600&h=450&fit=crop",
    featured: false,
  },
  {
    id: "cake-set",
    name: "本日のケーキセット",
    nameEn: "Today's Cake Set",
    description: "日替わりケーキとドリンクのお得なセット",
    price: 900,
    category: "food",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=450&fit=crop",
    featured: false,
  },
  {
    id: "sandwich",
    name: "BLTサンドイッチ",
    nameEn: "BLT Sandwich",
    description: "自家製パンを使ったボリュームたっぷりのサンドイッチ",
    price: 780,
    category: "food",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&h=450&fit=crop",
    featured: false,
  },
];

export const menuCategories: { key: MenuCategory | "all"; label: string }[] = [
  { key: "all", label: "ALL" },
  { key: "hot", label: "HOT DRINKS" },
  { key: "cold", label: "COLD DRINKS" },
  { key: "food", label: "FOOD" },
];
