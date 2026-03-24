import type { Category } from '@/data/products';

interface CategoryCardProps {
  category: Category;
  onClick?: () => void;
}

const CategoryCard = ({ category, onClick }: CategoryCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-b ${category.gradient} min-w-[100px]`}
    >
      <span className="text-3xl">{category.image}</span>
      <span className="text-xs font-medium text-foreground text-center leading-tight">{category.name}</span>
    </button>
  );
};

export default CategoryCard;
