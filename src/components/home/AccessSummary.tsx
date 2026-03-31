import Link from 'next/link';
import SectionWrapper from '@/components/common/SectionWrapper';
import ScrollFadeIn from '@/components/common/ScrollFadeIn';
import { shopInfo } from '@/data/shop-info';

export default function AccessSummary() {
  return (
    <SectionWrapper className="bg-white">
      <ScrollFadeIn>
        <div className="text-center mb-12 md:mb-16">
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-2">
            Access
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            アクセス
          </h2>
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <p className="text-base text-foreground">{shopInfo.address}</p>
            <p className="text-base text-foreground">
              営業時間: {shopInfo.hours}
            </p>
            <p className="text-base text-foreground">
              定休日: {shopInfo.closedDay}
            </p>
            <div className="pt-2">
              {shopInfo.accessGuide.map((guide, index) => (
                <p key={index} className="text-sm text-muted">
                  {guide}
                </p>
              ))}
            </div>
          </div>

          <Link
            href="/access"
            className="inline-block px-8 py-4 bg-foreground text-background text-sm font-semibold tracking-wider uppercase hover:bg-foreground/80 transition-colors duration-200 rounded-sm"
          >
            詳しいアクセスを見る
          </Link>
        </div>
      </ScrollFadeIn>
    </SectionWrapper>
  );
}
