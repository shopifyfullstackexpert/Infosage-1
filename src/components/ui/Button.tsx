import { ButtonHTMLAttributes, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'text';
  icon?: LucideIcon;
  trailingIcon?: LucideIcon;
  className?: string;
}

const variantClasses: Record<ButtonProps['variant'], string> = {
  primary:
    'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30',
  ghost:
    'bg-white/10 text-primary hover:bg-white/20 border border-white/10',
  text: 'bg-transparent text-accent hover:text-accent/80',
};

export default function Button({
  children,
  variant = 'primary',
  icon: Icon,
  trailingIcon: TrailingIcon,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${variantClasses[variant]} ${className}`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
      {TrailingIcon && <TrailingIcon className="w-5 h-5" />}
    </button>
  );
}
