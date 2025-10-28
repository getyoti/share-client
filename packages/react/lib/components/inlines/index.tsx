import { useState } from 'react'

import type { BasicInlineProps } from './BasicInline'
import type { InstantInlineProps } from './InstantInline'
import BasicInline from './BasicInline'
import InstantInline from './InstantInline'

export { default as Basic } from './BasicInline'
export { default as Instant } from './InstantInline'

type CombinedModalProps =
  | ({
      mode?: 'default'
    } & BasicInlineProps)
  | ({
      mode: 'instant'
    } & InstantInlineProps)

const Inline = ({ mode, ...props }: CombinedModalProps) => {
  const [initialMode] = useState(mode || 'default')
  switch (initialMode) {
    case 'instant':
      return <InstantInline {...(props as InstantInlineProps)} />
    case 'default':
    default:
      return <BasicInline {...(props as BasicInlineProps)} />
  }
}

export default Inline
