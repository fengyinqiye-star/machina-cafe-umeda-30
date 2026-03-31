import Link from 'next/link';
import { navItems } from '@/data/navigation';
import { shopInfo } from '@/data/shop-info';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <h2 className="font-heading text-2xl font-bold text-background mb-4">
              Cafe Umeda
            </h2>
            <p className="text-sm leading-relaxed text-background/70">
              梅田の小さなカフェ。
              <br />
              こだわりのドリンクと
              <br />
              居心地の良い空間をお届けします。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6 text-primary">
              ナビゲーション
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-background/70 hover:text-primary transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop Info */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6 text-primary">
              店舗情報
            </h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li>{shopInfo.address}</li>
              <li>
                <a
                  href={`tel:${shopInfo.phone.replace(/-/g, '')}`}
                  className="hover:text-primary transition-colors"
                >
                  {shopInfo.phone}
                </a>
              </li>
              <li>営業時間: {shopInfo.hours}</li>
              <li>定休日: {shopInfo.closedDay}</li>
            </ul>
          </div>

          {/* SNS */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6 text-primary">
              SNS
            </h3>
            <ul className="space-y-3 text-sm text-background/70">
              {shopInfo.sns.instagram && (
                <li>
                  <a
                    href={shopInfo.sns.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              )}
              {shopInfo.sns.twitter && (
                <li>
                  <a
                    href={shopInfo.sns.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Twitter
                  </a>
                </li>
              )}
              {shopInfo.sns.facebook && (
                <li>
                  <a
                    href={shopInfo.sns.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Facebook
                  </a>
                </li>
              )}
              {!shopInfo.sns.instagram && !shopInfo.sns.twitter && !shopInfo.sns.facebook && (
                <li className="text-background/50 italic">準備中</li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-sm text-background/50">
            &copy; {currentYear} {shopInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
