import { type JSX, useState } from 'react'

import type { YotiWebShareBaseProps } from '../YotiWebShareBase'
import YotiWebShareBase from '../YotiWebShareBase'

export type BasicInlineProps = Omit<YotiWebShareBaseProps, 'flow'>

function BasicInline(props: BasicInlineProps): JSX.Element {
  const [flow] = useState<YotiWebShareBaseProps['flow']>('INLINE')
  return (
    <YotiWebShareBase
      flow={flow}
      {...props}
    />
  )
}

export default BasicInline
