import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/common/SectionWrapper';
import ScrollFadeIn from '@/components/common/ScrollFadeIn';
import { galleryImages } from '@/data/gallery';

export default function GallerySummary() {
  const previewImages = galleryImages.filter((img) => !img.span).slice(0, 4);

  return (
    <SectionWrapper>
      <ScrollFadeIn>
        <div className="text-center mb-12 md:mb-16">
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-2">
            Gallery
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            店内の雰囲気
          </h2>
        </div>
      </ScrollFadeIn>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {previewImages.map((img, index) => (
          <ScrollFadeIn key={index}>
            <div className="aspect-square hover-zoom rounded-lg overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </ScrollFadeIn>
        ))}
      </div>

      <ScrollFadeIn className="text-center mt-12">
        <Link
          href="/gallery"
          className="inline-block px-8 py-4 border border-foreground text-foreground text-sm font-semibold tracking-wider uppercase hover:bg-foreground hover:text-background transition-colors duration-200 rounded-sm"
        >
          ギャラリーを見る
        </Link>
      </ScrollFadeIn>
    </SectionWrapper>
  );
}
