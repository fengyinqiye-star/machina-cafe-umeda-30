import HeroSection from '@/components/home/HeroSection';
import ConceptSection from '@/components/home/ConceptSection';
import MenuHighlight from '@/components/home/MenuHighlight';
import GallerySummary from '@/components/home/GallerySummary';
import AccessSummary from '@/components/home/AccessSummary';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ConceptSection />
      <MenuHighlight />
      <GallerySummary />
      <AccessSummary />
    </>
  );
}
