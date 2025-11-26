
import React from 'react'
import { cn } from '../../utils/cn'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'solid' | 'outline'
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'solid', ...props }, ref) => {
    const base =
      'inline-flex items-center rounded-full px-3 py-1 text-[11px] font-mono tracking-[0.18em] uppercase'
    const variants: Record<'solid' | 'outline', string> = {
      solid: 'bg-slate-800 text-slate-100',
      outline: 'border border-slate-700/80 text-slate-200',
    }

    return (
      <span
        ref={ref}
        className={cn(base, variants[variant], className)}
        {...props}
      />
    )
  },
)

Badge.displayName = 'Badge'
