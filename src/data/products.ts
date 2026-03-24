export interface Product {
  id: string;
  name: string;
  weight: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating?: number;
  image: string;
  description: string;
  available?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  gradient: string;
}

export const categories: Category[] = [
  { id: "1", name: "Dairy Products", image: "🥛", gradient: "from-orange-100 to-yellow-50" },
  { id: "2", name: "Fruits and Vegetables", image: "🥬", gradient: "from-green-100 to-lime-50" },
  { id: "3", name: "Meat and Poultry", image: "🍗", gradient: "from-red-100 to-pink-50" },
  { id: "4", name: "Snacks", image: "🍿", gradient: "from-amber-100 to-orange-50" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Beng-Beng Chocolate",
    weight: "50 gm.",
    price: 16.00,
    image: "https://images.unsplash.com/photo-1575377427642-087cf684f29d?w=300&h=300&fit=crop",
    description: "Beng-Beng Chocolate Wafer 50g is a delicious chocolate wafer bar with a crispy wafer center, caramel layer, and rice crisps, all coated in rich chocolate.",
    available: true,
  },
  {
    id: "2",
    name: "Chitato Supreme Cheese Potato Chips 68 g",
    weight: "68 gm.",
    price: 11.00,
    originalPrice: 12.20,
    discount: 20,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&h=300&fit=crop",
    description: "Chatty Supreme Cheese Potato Chips 68g offers a deliciously crunchy potato chip experience, infused with rich, savoury cheese flavour. Made from high-quality potatoes, these chips deliver a perfect balance of crispy texture and bold cheese taste.",
    available: true,
  },
  {
    id: "3",
    name: "Oreo Chocolate Cookies",
    weight: "120 gm.",
    price: 14.00,
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=300&h=300&fit=crop",
    description: "Oreo Chocolate Cookies 120g - the classic sandwich cookie with a rich chocolate base and sweet cream filling.",
    available: true,
  },
  {
    id: "4",
    name: "Lays Classic Salted",
    weight: "75 gm.",
    price: 12.00,
    originalPrice: 15.00,
    discount: 20,
    image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=300&h=300&fit=crop",
    description: "Lays Classic Salted potato chips made from the finest potatoes for a perfectly crispy and lightly salted snack.",
    available: true,
  },
  {
    id: "5",
    name: "KitKat Wafer Bar",
    weight: "45 gm.",
    price: 8.00,
    image: "https://images.unsplash.com/photo-1527904324834-3bda86da6771?w=300&h=300&fit=crop",
    description: "KitKat crispy wafer fingers covered in smooth milk chocolate. Have a break, have a KitKat!",
    available: true,
  },
  {
    id: "6",
    name: "Pringles Original",
    weight: "110 gm.",
    price: 18.00,
    originalPrice: 22.00,
    discount: 18,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=300&h=300&fit=crop",
    description: "Pringles Original flavor stackable chips with their iconic saddle shape and perfectly seasoned taste.",
    available: true,
  },
];
