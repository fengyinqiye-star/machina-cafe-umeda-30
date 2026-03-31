import { shopInfo } from '@/data/shop-info';

export default function GoogleMap() {
  return (
    <div className="mt-12">
      <div className="rounded-lg overflow-hidden shadow-sm">
        <iframe
          src={shopInfo.googleMapEmbedUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          sandbox="allow-scripts allow-same-origin"
          title="Cafe Umeda の地図"
          className="w-full h-[300px] md:h-[400px] lg:h-[450px]"
        />
      </div>
      <div className="mt-4 text-center">
        <a
          href={shopInfo.googleMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Google マップで開く
        </a>
      </div>
    </div>
  );
}
