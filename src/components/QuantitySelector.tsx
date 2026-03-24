import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantitySelector = ({ quantity, onIncrease, onDecrease }: QuantitySelectorProps) => {
  return (
    <div className="flex items-center gap-4 bg-card rounded-full px-3 py-2 border border-border">
      <button onClick={onDecrease} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
        <Minus className="w-4 h-4 text-foreground" />
      </button>
      <span className="text-base font-bold text-foreground w-6 text-center">
        {String(quantity).padStart(2, '0')}
      </span>
      <button onClick={onIncrease} className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
        <Plus className="w-4 h-4 text-card" />
      </button>
    </div>
  );
};

export default QuantitySelector;
