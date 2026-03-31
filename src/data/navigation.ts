export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "ホーム", href: "/" },
  { label: "メニュー", href: "/menu" },
  { label: "ギャラリー", href: "/gallery" },
  { label: "アクセス", href: "/access" },
  { label: "お問い合わせ", href: "/contact" },
];
