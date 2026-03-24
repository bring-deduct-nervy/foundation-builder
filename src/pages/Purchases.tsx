import { ShoppingBag } from 'lucide-react';
import BottomNav from '@/components/BottomNav';
import { useCart } from '@/context/CartContext';

const Purchases = () => {
  const { items, totalItems, updateQuantity } = useCart();
  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <div className="h-[100dvh] bg-background flex flex-col max-w-[390px] mx-auto overflow-hidden border-x border-border shadow-lg">
      <div className="px-4 pt-4 pb-2">
        <h1 className="text-xl font-bold text-foreground">My Cart</h1>
        <p className="text-sm text-muted-foreground">{totalItems} items</p>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
          <p className="text-lg font-semibold text-foreground">Your cart is empty</p>
          <p className="text-sm text-muted-foreground mt-1">Start adding some items!</p>
        </div>
      ) : (
        <div className="px-4">
          {items.map(item => (
            <div key={item.product.id} className="flex items-center gap-3 py-3 border-b border-border">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-foreground line-clamp-1">{item.product.name}</h4>
                <p className="text-xs text-muted-foreground">{item.product.weight}</p>
                <p className="text-sm font-bold text-foreground mt-0.5">${(item.product.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-foreground font-bold text-sm">−</button>
                <span className="text-sm font-bold text-foreground w-4 text-center">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center text-card font-bold text-sm">+</button>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between py-4 mt-2">
            <span className="text-base font-bold text-foreground">Total</span>
            <span className="text-xl font-bold text-foreground">${total.toFixed(2)}</span>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default Purchases;
