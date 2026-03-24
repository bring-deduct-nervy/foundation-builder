import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import BottomNav from '@/components/BottomNav';
import { categories, products } from '@/data/products';

const SearchPage = () => {
  return (
    <div className="h-[100dvh] bg-background flex flex-col max-w-[390px] mx-auto overflow-hidden border-x border-border shadow-lg">
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <SearchBar onFilterClick={() => {}} />
        <div className="px-4 mt-2">
          <h2 className="text-lg font-bold text-foreground mb-3">Product types</h2>
          <div className="grid grid-cols-4 gap-2">
            {categories.map(cat => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
        <SectionHeader title="All Products" onSeeAll={() => {}} />
        <div className="grid grid-cols-2 gap-3 px-4 pb-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default SearchPage;
