
import React from 'react'
import { cn } from '../../utils/cn'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-3xl border border-slate-800/70 bg-slate-900/70 p-5 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur-xl',
        className,
      )}
      {...props}
    />
  ),
)

Card.displayName = 'Card'
