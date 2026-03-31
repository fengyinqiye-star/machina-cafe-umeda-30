'use client';

import { menuCategories, type MenuCategory } from '@/data/menu';

interface CategoryTabsProps {
  activeCategory: MenuCategory | 'all';
  onCategoryChange: (category: MenuCategory | 'all') => void;
}

export default function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
      {menuCategories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onCategoryChange(cat.key)}
          className={`px-6 py-2.5 text-sm font-semibold tracking-wider uppercase rounded-sm transition-colors duration-200 ${
            activeCategory === cat.key
              ? 'bg-foreground text-background'
              : 'bg-transparent border border-border text-foreground hover:bg-foreground hover:text-background'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
