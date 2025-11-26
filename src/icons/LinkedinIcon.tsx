
import React from 'react'

export interface LinkedinIconProps extends React.SVGProps<SVGSVGElement> {}

export const LinkedinIcon: React.FC<LinkedinIconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M4.98 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM.75 8.25h4.46V23H.75V8.25Zm7.5 0h4.28v2h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V23h-4.46v-7.19c0-1.71-.03-3.9-2.38-3.9-2.38 0-2.75 1.86-2.75 3.78V23H8.25V8.25Z" />
  </svg>
)
