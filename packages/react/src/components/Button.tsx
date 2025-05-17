import type { ButtonHTMLAttributes } from 'react'

import './Button.css'

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <span>
      <button
        className="button"
        {...props}
      />
    </span>
  )
}
