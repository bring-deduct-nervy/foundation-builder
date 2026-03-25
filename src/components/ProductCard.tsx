import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="min-w-[160px] max-w-[180px] flex-shrink-0 snap-start">
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="bg-card rounded-2xl p-3 relative cursor-pointer"
      >
        {product.discount && (
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-discount-badge text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
              {product.discount}%
            </span>
          </div>
        )}
        <div className="w-full aspect-square rounded-xl overflow-hidden bg-muted mb-2">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <h4 className="text-sm font-semibold text-foreground leading-tight line-clamp-2 min-h-[2.5rem]">{product.name}</h4>
        <p className="text-xs text-muted-foreground mt-0.5">{product.weight}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-base font-bold text-foreground">${product.price.toFixed(2)}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-9 h-9 rounded-full bg-foreground flex items-center justify-center"
          >
            <Plus className="w-5 h-5 text-card" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
