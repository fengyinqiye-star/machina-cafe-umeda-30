import type { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import SectionWrapper from '@/components/common/SectionWrapper';
import ScrollFadeIn from '@/components/common/ScrollFadeIn';
import ShopInfoCard from '@/components/access/ShopInfoCard';
import GoogleMap from '@/components/access/GoogleMap';
import { shopInfo } from '@/data/shop-info';

export const metadata: Metadata = {
  title: 'アクセス・店舗情報',
  description:
    'Cafe Umedaへのアクセス方法、営業時間、定休日などの店舗情報。JR大阪駅から徒歩5分。',
};

export default function AccessPage() {
  return (
    <>
      <PageHeader title="Access" subtitle="店舗情報・アクセス" />
      <SectionWrapper className="pt-0">
        <ScrollFadeIn>
          <ShopInfoCard />
        </ScrollFadeIn>

        <ScrollFadeIn>
          <GoogleMap />
        </ScrollFadeIn>

        {/* アクセス案内 */}
        <ScrollFadeIn>
          <div className="mt-12 max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
              アクセス案内
            </h2>
            <div className="space-y-3">
              {shopInfo.accessGuide.map((guide, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-base text-muted"
                >
                  <svg
                    className="w-5 h-5 text-primary shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{guide}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted mt-6 text-center">
              ※ 上記のアクセス情報は仮テキストです。正式な情報は店舗にお問い合わせください。
            </p>
          </div>
        </ScrollFadeIn>
      </SectionWrapper>
    </>
  );
}
