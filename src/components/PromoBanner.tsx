import promoIllustration from '@/assets/promo-illustration.png';

const PromoBanner = () => {
  return (
    <div className="mx-4 rounded-2xl bg-promo-bg p-5 flex items-center justify-between relative overflow-hidden">
      <div className="flex-1 z-10">
        <h3 className="text-lg font-bold text-foreground">Save 20%</h3>
        <p className="text-sm text-text-description font-medium mt-0.5">On Your Zemart Plan</p>
        <p className="text-xs text-muted-foreground mt-1">Upgrade to the annual plan and pay less</p>
        <button className="mt-3 px-4 py-2 bg-foreground text-card text-xs font-semibold rounded-lg">
          Explore Plans
        </button>
      </div>
      <img src={promoIllustration} alt="Promo" className="w-28 h-28 object-contain" />
      {/* Dots indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        <div className="w-5 h-1.5 rounded-full bg-foreground" />
        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
      </div>
    </div>
  );
};

export default PromoBanner;
