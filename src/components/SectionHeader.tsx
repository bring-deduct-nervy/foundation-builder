interface SectionHeaderProps {
  title: string;
  onSeeAll?: () => void;
}

const SectionHeader = ({ title, onSeeAll }: SectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <h2 className="text-lg font-bold text-foreground">{title}</h2>
      {onSeeAll && (
        <button onClick={onSeeAll} className="text-sm text-primary font-medium">
          See all
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
