'use client';

import { useState } from 'react';
import Image from 'next/image';
import { galleryImages } from '@/data/gallery';
import LightboxModal from './LightboxModal';

export default function GalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {galleryImages.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`hover-zoom rounded-lg overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              img.span === 'wide' ? 'sm:col-span-2' : ''
            }`}
            aria-label={`${img.alt} を拡大表示`}
          >
            <div className="aspect-[4/3]">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.span === 'wide' ? 1200 : 800}
                height={600}
                className="w-full h-full object-cover"
                sizes={
                  img.span === 'wide'
                    ? '(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw'
                    : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                }
              />
            </div>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <LightboxModal
          images={galleryImages}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onChangeIndex={setSelectedIndex}
        />
      )}
    </>
  );
}
