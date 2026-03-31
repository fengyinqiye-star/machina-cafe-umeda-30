import Image from 'next/image';
import type { MenuItem } from '@/data/menu';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="aspect-[4/3] hover-zoom">
        <Image
          src={item.image}
          alt={item.name}
          width={600}
          height={450}
          className="w-full h-full object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        {item.nameEn && (
          <p className="font-heading text-xs tracking-wider text-primary mb-1">
            {item.nameEn}
          </p>
        )}
        <h3 className="text-xl font-bold text-foreground mb-2">{item.name}</h3>
        <p className="text-sm text-muted mb-4 leading-relaxed">{item.description}</p>
        <p className="text-lg font-semibold text-foreground">
          &yen;{item.price.toLocaleString()}
          <span className="text-xs text-muted ml-1">（税込）</span>
        </p>
      </div>
    </div>
  );
}
