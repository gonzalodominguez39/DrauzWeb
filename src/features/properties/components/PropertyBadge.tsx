import { PropertyBadge as PropertyBadgeType } from '../types/property.types';

interface PropertyBadgeProps {
  badge: PropertyBadgeType;
  variant?: 'absolute' | 'static';
}

export const PropertyBadge = ({ badge, variant = 'absolute' }: PropertyBadgeProps) => {
  const baseClasses = "bg-[#009B77]/80 text-[#121212] text-xs font-bold px-3 py-1 rounded-full";
  const positionClasses = variant === 'absolute' ? "absolute top-3 left-3" : "";
  
  return (
    <div className={`${baseClasses} ${positionClasses}`}>
      {badge}
    </div>
  );
};
