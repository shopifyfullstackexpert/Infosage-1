import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  colorClass?: string;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  icon: Icon,
  colorClass = 'text-primary',
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 ${colorClass} text-sm font-medium mb-4`}>
        {Icon && <Icon className="w-4 h-4" />}
        {badge}
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}
