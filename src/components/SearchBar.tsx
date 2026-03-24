import { Search, SlidersHorizontal } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onFilterClick?: () => void;
}

const SearchBar = ({ placeholder = "Find food, & items", onFilterClick }: SearchBarProps) => {
  return (
    <div className="flex items-center gap-3 px-4 py-2">
      <div className="flex-1 flex items-center gap-3 bg-card rounded-xl px-4 py-3 border border-border">
        <Search className="w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
        />
      </div>
      {onFilterClick && (
        <button onClick={onFilterClick} className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center">
          <SlidersHorizontal className="w-5 h-5 text-card" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
