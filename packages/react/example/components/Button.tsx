import type { ButtonHTMLAttributes } from 'react'

import './Button.css'

export function Button(
  props: ButtonHTMLAttributes<HTMLButtonElement> & { size?: 'default' | 'small' },
) {
  return (
    <span>
      <button
        className={`button${props.size === 'small' ? ' button_small' : ''}`}
        {...props}
      />
    </span>
  )
}
