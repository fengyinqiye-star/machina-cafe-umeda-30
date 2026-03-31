import Image from 'next/image';
import SectionWrapper from '@/components/common/SectionWrapper';
import ScrollFadeIn from '@/components/common/ScrollFadeIn';

export default function ConceptSection() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <ScrollFadeIn>
          <div className="hover-zoom rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&h=600&fit=crop"
              alt="Cafe Umeda のこだわり"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <div>
            <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">
              Concept
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              こだわりの一杯を
            </h2>
            <p className="text-base text-muted leading-relaxed mb-6">
              Cafe Umedaは、梅田の喧騒から少し離れた場所にある小さなカフェです。
              厳選した豆を丁寧にハンドドリップし、一杯一杯心を込めてお作りしています。
            </p>
            <p className="text-base text-muted leading-relaxed">
              忙しい毎日の中で、ほっと一息つける場所でありたい。
              そんな想いで、居心地の良い空間づくりにもこだわっています。
              お気に入りの一杯を見つけに、ぜひお立ち寄りください。
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </SectionWrapper>
  );
}
