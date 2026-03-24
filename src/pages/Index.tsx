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
      <SearchBar onFilterClick={() => {}} />
      <div className="mt-2">
        <PromoBanner />
      </div>
      <SectionHeader title="Best Selling" onSeeAll={() => {}} />
      <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar">
        {products.slice(0, 4).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <SectionHeader title="Under $20" onSeeAll={() => {}} />
      <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-4">
        {under20.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <BottomNav />
    </div>
  );
};

export default Index;
