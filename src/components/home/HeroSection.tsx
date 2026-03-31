import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&h=1080&fit=crop"
          alt="Cafe Umeda の店内"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="animate-fade-in font-heading text-sm md:text-base tracking-[0.3em] uppercase text-white/80 mb-6">
          Cafe Umeda
        </p>
        <h1 className="animate-fade-in-delay font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
          一杯のコーヒーから
          <br />
          始まる特別な時間
        </h1>
        <p className="animate-fade-in-delay-2 text-base md:text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          梅田の小さなカフェで、こだわりのドリンクと
          <br className="hidden md:block" />
          居心地の良い空間をお届けします。
        </p>
        <div className="animate-fade-in-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/menu"
            className="px-8 py-4 bg-foreground text-background text-sm font-semibold tracking-wider uppercase hover:bg-foreground/80 transition-colors duration-200 rounded-sm"
          >
            メニューを見る
          </Link>
          <Link
            href="/access"
            className="px-8 py-4 border border-white text-white text-sm font-semibold tracking-wider uppercase hover:bg-white hover:text-foreground transition-colors duration-200 rounded-sm"
          >
            アクセス
          </Link>
        </div>
      </div>
    </section>
  );
}
