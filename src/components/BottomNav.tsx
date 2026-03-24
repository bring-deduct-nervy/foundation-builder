import { Search, ShoppingBag } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const ExploreIcon = ({ active }: { active: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke={active ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'} strokeWidth="2" />
    <path d="M14.5 9.5L10 10L9.5 14.5L14 14L14.5 9.5Z" fill={active ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'} />
  </svg>
);

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { icon: ExploreIcon, label: 'Explore', path: '/' },
    { icon: null, label: 'Search', path: '/search', lucideIcon: Search },
    { icon: null, label: 'Purchases', path: '/purchases', lucideIcon: ShoppingBag },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-2 pb-2 pt-1 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map(({ icon: CustomIcon, lucideIcon: LucideIcon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="flex flex-col items-center gap-0.5 py-1 px-4"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {CustomIcon ? (
                  <CustomIcon active={isActive} />
                ) : LucideIcon ? (
                  <LucideIcon className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                ) : null}
              </div>
              <span className={`text-[10px] font-medium ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
