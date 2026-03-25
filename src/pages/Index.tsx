import SearchBar from '@/components/SearchBar';
import PromoBanner from '@/components/PromoBanner';
import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import BottomNav from '@/components/BottomNav';
import { products } from '@/data/products';

const Index = () => {
  const under20 = products.filter(p => p.price < 20);

  return (
    <div className="h-[100dvh] bg-background flex flex-col max-w-[390px] mx-auto overflow-hidden border-x border-border shadow-lg">
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <SearchBar onFilterClick={() => {}} />
        <div className="mt-2">
          <PromoBanner />
        </div>
        <SectionHeader title="Best Selling" onSeeAll={() => {}} />
        <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <SectionHeader title="Under $20" onSeeAll={() => {}} />
        <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth pb-4">
          {under20.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Index;
