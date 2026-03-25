import { useState, useEffect, useCallback } from 'react';
import promoIllustration from '@/assets/promo-illustration.png';

const slides = [
  {
    title: "Save 20%",
    subtitle: "On Your Zemart Plan",
    description: "Upgrade to the annual plan and pay less",
    cta: "Explore Plans",
  },
  {
    title: "Free Delivery",
    subtitle: "On Orders Over $50",
    description: "Shop more and save on delivery fees",
    cta: "Shop Now",
  },
  {
    title: "New Arrivals",
    subtitle: "Fresh Products Daily",
    description: "Check out the latest additions to our store",
    cta: "Browse New",
  },
];

const PromoBanner = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 300);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((current + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [current, goToSlide]);

  const slide = slides[current];

  return (
    <div className="mx-4 rounded-2xl bg-promo-bg p-5 flex items-center justify-between relative overflow-hidden min-h-[140px]">
      <div
        className={`flex-1 z-10 transition-all duration-300 ease-in-out ${
          isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
        }`}
      >
        <h3 className="text-lg font-bold text-foreground">{slide.title}</h3>
        <p className="text-sm text-text-description font-medium mt-0.5">{slide.subtitle}</p>
        <p className="text-xs text-muted-foreground mt-1">{slide.description}</p>
        <button className="mt-3 px-4 py-2 bg-foreground text-card text-xs font-semibold rounded-lg">
          {slide.cta}
        </button>
      </div>
      <img
        src={promoIllustration}
        alt="Promo"
        className={`w-28 h-28 object-contain transition-all duration-300 ease-in-out ${
          isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'w-5 bg-foreground' : 'w-1.5 bg-muted-foreground/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromoBanner;
