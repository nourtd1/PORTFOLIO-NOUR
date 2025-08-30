import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

// Optimized Card Component
interface OptimizedCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function OptimizedCard({ children, className, hover = true }: OptimizedCardProps) {
  return (
    <div className={cn(
      "card-shadow-optimized backdrop-blur-optimized bg-white/50 rounded-lg border-0",
      hover && "hover-lift-optimized",
      className
    )}>
      {children}
    </div>
  );
}

// Optimized Gradient Background
interface GradientBackgroundProps {
  children: ReactNode;
  className?: string;
}

export function GradientBackground({ children, className }: GradientBackgroundProps) {
  return (
    <div className={cn("gradient-bg-optimized", className)}>
      {children}
    </div>
  );
}

// Optimized Text Gradient
interface TextGradientProps {
  children: ReactNode;
  className?: string;
}

export function TextGradient({ children, className }: TextGradientProps) {
  return (
    <span className={cn("text-gradient-optimized text-optimized", className)}>
      {children}
    </span>
  );
}

// Optimized Image Container
interface OptimizedImageContainerProps {
  children: ReactNode;
  className?: string;
}

export function OptimizedImageContainer({ children, className }: OptimizedImageContainerProps) {
  return (
    <div className={cn("image-hover-optimized overflow-hidden", className)}>
      {children}
    </div>
  );
}

// Optimized Badge
interface OptimizedBadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'secondary';
}

export function OptimizedBadge({ children, className, variant = 'secondary' }: OptimizedBadgeProps) {
  return (
    <span className={cn(
      "badge-hover-optimized inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
      variant === 'default' ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground",
      className
    )}>
      {children}
    </span>
  );
}

// Optimized Button
interface OptimizedButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export function OptimizedButton({ 
  children, 
  className, 
  variant = 'default', 
  size = 'md',
  asChild = false 
}: OptimizedButtonProps) {
  const baseClasses = "button-hover-optimized focus-optimized inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90"
  };
  
  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8"
  };
  
  const Component = asChild ? 'span' : 'button';
  
  return (
    <Component className={cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    )}>
      {children}
    </Component>
  );
}

// Optimized Grid Container
interface OptimizedGridProps {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4;
}

export function OptimizedGrid({ children, className, cols = 3 }: OptimizedGridProps) {
  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };
  
  return (
    <div className={cn("grid-optimized gap-8", gridClasses[cols], className)}>
      {children}
    </div>
  );
}

// Optimized Stats Card
interface OptimizedStatsCardProps {
  value: string | number;
  label: string;
  className?: string;
}

export function OptimizedStatsCard({ value, label, className }: OptimizedStatsCardProps) {
  return (
    <OptimizedCard className={cn("text-center", className)}>
      <div className="p-6">
        <div className="text-3xl font-bold text-primary mb-2">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </OptimizedCard>
  );
}

// Optimized Section Container
interface OptimizedSectionProps {
  children: ReactNode;
  className?: string;
  background?: 'default' | 'muted' | 'gradient';
}

export function OptimizedSection({ children, className, background = 'default' }: OptimizedSectionProps) {
  const backgroundClasses = {
    default: "",
    muted: "bg-muted/30",
    gradient: "gradient-bg-optimized"
  };
  
  return (
    <section className={cn("py-16", backgroundClasses[background], className)}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}

// Optimized Hero Section
interface OptimizedHeroProps {
  children: ReactNode;
  className?: string;
}

export function OptimizedHero({ children, className }: OptimizedHeroProps) {
  return (
    <section className={cn(
      "relative overflow-hidden gradient-bg-optimized py-20",
      className
    )}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
