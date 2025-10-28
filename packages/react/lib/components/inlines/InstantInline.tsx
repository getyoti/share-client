import { type JSX, useState } from 'react'

import type { YotiWebShareBaseProps } from '../YotiWebShareBase'
import YotiWebShareBase from '../YotiWebShareBase'

export type InstantInlineProps = Omit<YotiWebShareBaseProps, 'flow'>

function InstantInline(props: InstantInlineProps): JSX.Element {
  const [flow] = useState<YotiWebShareBaseProps['flow']>({
    desktop: 'INSTANT_INLINE_QR_CODE',
    mobile: 'REVEAL_INLINE_QR_CODE',
  })
  return (
    <YotiWebShareBase
      flow={flow}
      {...props}
    />
  )
}

export default InstantInline
