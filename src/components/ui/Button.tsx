
import React from 'react'
import { cn } from '../../utils/cn'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild, children, ...props }, ref) => {
    const Comp: React.ElementType = asChild ? 'span' : 'button'

    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full border border-cyber-cyan/70 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-50 shadow-neon-cyan transition hover:-translate-y-0.5 hover:bg-slate-900',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)

ButtonBase.displayName = 'Button'

export const Button = Object.assign(ButtonBase, {})
