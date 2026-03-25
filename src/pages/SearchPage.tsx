import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import BottomNav from '@/components/BottomNav';
import { categories, products } from '@/data/products';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const filterParam = searchParams.get('filter') || '';
  
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high' | 'rating'>('default');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    
    // Apply search query
    if (query) {
      const q = query.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }

    // Apply filter param from "See All"
    if (filterParam === 'under20') {
      filtered = filtered.filter(p => p.price < 20);
    }

    // Apply category filter
    if (selectedCategory) {
      // Simple category matching based on product type
      filtered = filtered.filter(p => {
        const cat = categories.find(c => c.id === selectedCategory);
        if (!cat) return true;
        const name = cat.name.toLowerCase();
        if (name.includes('snack')) return p.name.toLowerCase().includes('chip') || p.name.toLowerCase().includes('pringles') || p.name.toLowerCase().includes('lays');
        return true;
      });
    }

    // Apply sorting
    if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));

    return filtered;
  }, [query, selectedCategory, sortBy, filterParam]);

  const title = filterParam === 'under20' ? 'Under $20' : filterParam === 'best-selling' ? 'Best Selling' : 'All Products';

  return (
    <div className="h-[100dvh] bg-background flex flex-col max-w-[390px] mx-auto overflow-hidden border-x border-border shadow-lg">
      <div className="flex-1 overflow-y-auto hide-scrollbar smooth-scroll">
        <SearchBar 
          onFilterClick={() => setShowFilters(!showFilters)} 
          onSearch={setQuery}
          initialQuery={initialQuery}
        />

        {/* Filter panel */}
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: showFilters ? '200px' : '0' }}
        >
          <div className="px-4 py-3 space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Sort by</p>
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'default', label: 'Default' },
                { key: 'price-low', label: 'Price: Low' },
                { key: 'price-high', label: 'Price: High' },
                { key: 'rating', label: 'Top Rated' },
              ].map(opt => (
                <button
                  key={opt.key}
                  onClick={() => setSortBy(opt.key as typeof sortBy)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200 ${
                    sortBy === opt.key
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-foreground border border-border'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {!filterParam && (
          <div className="px-4 mt-2">
            <h2 className="text-lg font-bold text-foreground mb-3">Product types</h2>
            <div className="grid grid-cols-4 gap-2">
              {categories.map(cat => (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                  className={`cursor-pointer rounded-xl transition-all duration-200 ${
                    selectedCategory === cat.id ? 'ring-2 ring-primary scale-95' : ''
                  }`}
                >
                  <CategoryCard category={cat} />
                </div>
              ))}
            </div>
          </div>
        )}

        <SectionHeader title={title} />
        <div className="grid grid-cols-2 gap-3 px-4 pb-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-2 py-12 text-center">
              <p className="text-muted-foreground text-sm">No products found</p>
              <p className="text-xs text-muted-foreground/60 mt-1">Try a different search term</p>
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default SearchPage;
