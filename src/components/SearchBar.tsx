import { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface SearchBarProps {
  placeholder?: string;
  onFilterClick?: () => void;
  onSearch?: (query: string) => void;
  initialQuery?: string;
}

const SearchBar = ({ placeholder = "Find food, & items", onFilterClick, onSearch, initialQuery = "" }: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (value: string) => {
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
    // Navigate to search page if not already there
    if (value && location.pathname !== '/search') {
      navigate(`/search?q=${encodeURIComponent(value)}`);
    }
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) onSearch('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="flex items-center gap-3 px-4 py-2">
      <div className="flex-1 flex items-center gap-3 bg-card rounded-xl px-4 py-3 border border-border">
        <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
        />
        {query && (
          <button onClick={handleClear} className="flex-shrink-0">
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        )}
      </div>
      {onFilterClick && (
        <button onClick={onFilterClick} className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center active:scale-95 transition-transform duration-150">
          <SlidersHorizontal className="w-5 h-5 text-card" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
