import { ButtonHTMLAttributes } from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'relative font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed group',
        // Base styles with cyberpunk theme
        'before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#9D4EDD] before:to-[#5A189A] before:transition-all',
        'before:clip-path-cyberpunk hover:before:opacity-90',
        // Glowing border effect
        'after:absolute after:inset-0 after:clip-path-cyberpunk after:bg-gradient-to-r after:from-[#9D4EDD] after:to-[#5A189A]',
        'after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100',
        // Text and shadow effects
        'text-white text-shadow-neon uppercase tracking-wider',
        // Size variations
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        // Hover animations
        'hover:scale-105 hover:shadow-neon transition-transform',
        // Scanline effect
        'before:scanline',
        className
      )}
      {...props}
    />
  );
}