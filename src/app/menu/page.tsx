import type { Metadata } from 'next';
import MenuPageContent from '@/components/menu/MenuPageContent';

export const metadata: Metadata = {
  title: 'メニュー',
  description:
    'Cafe Umedaのメニュー一覧。こだわりのコーヒー、紅茶、スイーツ、軽食をご用意しています。',
  openGraph: {
    title: 'メニュー | Cafe Umeda',
    description:
      'Cafe Umedaのメニュー一覧。こだわりのコーヒー、紅茶、スイーツ、軽食をご用意しています。',
  },
};

export default function MenuPage() {
  return <MenuPageContent />;
}
