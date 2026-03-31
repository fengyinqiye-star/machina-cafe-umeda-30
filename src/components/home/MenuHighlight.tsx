import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/common/SectionWrapper';
import ScrollFadeIn from '@/components/common/ScrollFadeIn';
import { menuItems } from '@/data/menu';

export default function MenuHighlight() {
  const featuredItems = menuItems.filter((item) => item.featured).slice(0, 4);

  return (
    <SectionWrapper className="bg-white">
      <ScrollFadeIn>
        <div className="text-center mb-12 md:mb-16">
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-2">
            Menu
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            おすすめメニュー
          </h2>
        </div>
      </ScrollFadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {featuredItems.map((item) => (
          <ScrollFadeIn key={item.id}>
            <div className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-[4/3] hover-zoom">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                {item.nameEn && (
                  <p className="font-heading text-xs tracking-wider text-primary mb-1">
                    {item.nameEn}
                  </p>
                )}
                <h3 className="text-lg font-bold text-foreground mb-2">{item.name}</h3>
                <p className="text-sm text-muted mb-3 line-clamp-2">{item.description}</p>
                <p className="text-lg font-semibold text-foreground">
                  &yen;{item.price.toLocaleString()}
                  <span className="text-xs text-muted ml-1">（税込）</span>
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>

      <ScrollFadeIn className="text-center mt-12">
        <Link
          href="/menu"
          className="inline-block px-8 py-4 bg-foreground text-background text-sm font-semibold tracking-wider uppercase hover:bg-foreground/80 transition-colors duration-200 rounded-sm"
        >
          メニューを見る
        </Link>
      </ScrollFadeIn>
    </SectionWrapper>
  );
}
