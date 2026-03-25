import { useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '@/components/SearchBar';
import PromoBanner from '@/components/PromoBanner';
import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import BottomNav from '@/components/BottomNav';
import { products } from '@/data/products';

const useHorizontalScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onWheel = useCallback((e: React.WheelEvent) => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    const atStart = scrollLeft === 0 && e.deltaY < 0;
    const atEnd = scrollLeft + clientWidth >= scrollWidth - 1 && e.deltaY > 0;
    if (!atStart && !atEnd) {
      e.stopPropagation();
      ref.current.scrollBy({ left: e.deltaY, behavior: 'smooth' });
    }
  }, []);
  return { ref, onWheel };
};

const Index = () => {
  const navigate = useNavigate();
  const under20 = products.filter(p => p.price < 20);
  const bestSellingScroll = useHorizontalScroll();
  const under20Scroll = useHorizontalScroll();

  return (
    <div className="h-[100dvh] bg-background flex flex-col max-w-[390px] mx-auto overflow-hidden border-x border-border shadow-lg">
      <div className="flex-1 overflow-y-auto hide-scrollbar smooth-scroll">
        <SearchBar onFilterClick={() => navigate('/search')} />
        <div className="mt-2">
          <PromoBanner />
        </div>
        <SectionHeader title="Best Selling" onSeeAll={() => navigate('/search?filter=best-selling')} />
        <div
          ref={bestSellingScroll.ref}
          onWheel={bestSellingScroll.onWheel}
          className="flex gap-3 px-4 overflow-x-auto hide-scrollbar smooth-scroll snap-x snap-mandatory"
        >
          {products.slice(0, 4).map(product => (
            <div key={product.id} className="snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <SectionHeader title="Under $20" onSeeAll={() => navigate('/search?filter=under20')} />
        <div
          ref={under20Scroll.ref}
          onWheel={under20Scroll.onWheel}
          className="flex gap-3 px-4 overflow-x-auto hide-scrollbar smooth-scroll snap-x snap-mandatory pb-4"
        >
          {under20.map(product => (
            <div key={product.id} className="snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Index;
