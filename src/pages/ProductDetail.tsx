import { useParams, useNavigate } from 'react-router-dom';
import { X, ShoppingCart, Star, Zap, AlertCircle, Heart } from 'lucide-react';
import { useState } from 'react';
import QuantitySelector from '@/components/QuantitySelector';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, totalItems, toggleFavorite, isFavorite } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [expanded, setExpanded] = useState(false);

  const product = products.find(p => p.id === id);
  if (!product) return null;

  const fav = isFavorite(product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
          <X className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-base font-semibold text-foreground">Product Details</h1>
        <button onClick={() => navigate('/purchases')} className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center relative">
          <ShoppingCart className="w-5 h-5 text-card" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Product Image */}
      <div className="mx-4 rounded-2xl bg-card overflow-hidden aspect-square">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>

      {/* Quantity Selector */}
      <div className="flex justify-center mt-4">
        <QuantitySelector
          quantity={quantity}
          onIncrease={() => setQuantity(q => q + 1)}
          onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
        />
      </div>

      {/* Product Info */}
      <div className="px-4 mt-4">
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-bold text-foreground flex-1 pr-4">{product.name}</h2>
          <button onClick={() => toggleFavorite(product.id)} className="mt-1">
            <Heart className={`w-6 h-6 ${fav ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
          </button>
        </div>
        {product.available && (
          <div className="flex items-center gap-1 mt-1">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-xs text-primary font-medium">Available on fast delivery</span>
          </div>
        )}

        {/* Price & Rating */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-2xl font-bold text-foreground">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-price-old line-through">${product.originalPrice.toFixed(2)}</span>
          )}
          {product.discount && (
            <span className="bg-discount-pill-bg text-foreground text-xs font-semibold px-2 py-0.5 rounded-full">
              {product.discount}%
            </span>
          )}
        </div>

        {product.rating && (
          <div className="flex items-center gap-1 mt-2">
            <Star className="w-4 h-4 fill-rating-star text-rating-star" />
            <span className="text-sm text-foreground font-medium">{product.rating} Rating</span>
          </div>
        )}

        {/* Promo Notice */}
        <div className="flex items-start gap-2 mt-4 p-3 bg-warning-bg rounded-xl">
          <AlertCircle className="w-5 h-5 text-warning-icon flex-shrink-0 mt-0.5" />
          <p className="text-xs text-warning-foreground">
            This promo is limited and may change at anytime depending on product availability.
          </p>
        </div>

        {/* Description */}
        <div className="mt-4 pb-24">
          <h3 className="text-base font-bold text-foreground mb-1">Description</h3>
          <p className="text-sm text-text-description leading-relaxed">
            {expanded ? product.description : product.description.slice(0, 150) + '...'}
            <button onClick={() => setExpanded(!expanded)} className="text-foreground font-bold ml-1">
              {expanded ? 'Show Less' : 'Read More'}
            </button>
          </p>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background max-w-md mx-auto">
        <button onClick={handleAddToCart} className="w-full py-4 bg-foreground text-card text-base font-bold rounded-2xl">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
