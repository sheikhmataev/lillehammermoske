import { HTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  variant?: 'default' | 'elevated' | 'outlined' | 'subtle';
  className?: string;
}

export function Card({ 
  children, 
  hover = false, 
  variant = 'default',
  className, 
  ...props 
}: CardProps) {
  const baseStyles = 'bg-white rounded-xl transition-all duration-200';
  
  const variants = {
    default: 'shadow-sm border border-gray-100 p-6',
    elevated: 'shadow-md border border-gray-100 p-8',
    outlined: 'shadow-none border-2 border-gray-200 p-6',
    subtle: 'shadow-none border border-gray-100 bg-gray-50/50 p-6',
  };
  
  const hoverStyles = hover 
    ? 'hover:shadow-md hover:border-emerald-200 hover:-translate-y-0.5 cursor-pointer' 
    : '';
  
  return (
    <div
      className={clsx(baseStyles, variants[variant], hoverStyles, className)}
      {...props}
    >
      {children}
    </div>
  );
}
