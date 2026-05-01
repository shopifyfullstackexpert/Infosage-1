import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  colorClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  className?: string;
  badgeBackground?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  icon: Icon,
  colorClass = 'text-primary',
  titleClass = 'text-gray-900',
  descriptionClass = 'text-gray-600',
  className = '',
  badgeBackground = 'bg-primary/10',
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full ${badgeBackground} ${colorClass} text-sm font-medium mb-4`}>
        {Icon && <Icon className="w-4 h-4" />}
        {badge}
      </div>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${titleClass}`}>
        {title}
      </h2>
      <p className={`text-lg max-w-2xl mx-auto ${descriptionClass}`}>
        {description}
      </p>
    </div>
  );
}
