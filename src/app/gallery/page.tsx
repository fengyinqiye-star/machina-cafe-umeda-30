import type { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import SectionWrapper from '@/components/common/SectionWrapper';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export const metadata: Metadata = {
  title: 'ギャラリー',
  description: 'Cafe Umedaの店内風景やドリンクの写真をご覧いただけます。',
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" subtitle="ギャラリー" />
      <SectionWrapper className="pt-0">
        {/* 仮画像注記 */}
        <div className="mb-8 p-4 bg-primary/10 rounded-lg text-center">
          <p className="text-sm text-muted">
            ※ 現在は仮画像を使用しています。実際の店舗写真に差し替え予定です。
          </p>
        </div>

        <GalleryGrid />
      </SectionWrapper>
    </>
  );
}
