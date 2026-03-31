'use client';

import { useState } from 'react';
import PageHeader from '@/components/common/PageHeader';
import SectionWrapper from '@/components/common/SectionWrapper';
import ScrollFadeIn from '@/components/common/ScrollFadeIn';
import CategoryTabs from '@/components/menu/CategoryTabs';
import MenuCard from '@/components/menu/MenuCard';
import { menuItems, type MenuCategory } from '@/data/menu';

export default function MenuPageContent() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('all');

  const filteredItems =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHeader title="Menu" subtitle="メニュー" />
      <SectionWrapper className="pt-0">
        <CategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <ScrollFadeIn key={item.id}>
              <MenuCard item={item} />
            </ScrollFadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted">
            ※ 価格はすべて税込です。
            <br />
            ※ アレルギーに関しましてはスタッフまでお気軽にお問い合わせください。
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
