import { type JSX, useState } from 'react'

import type { YotiWebShareBaseProps } from '../YotiWebShareBase'
import YotiWebShareBase from '../YotiWebShareBase'

export type BasicModalProps = Omit<YotiWebShareBaseProps, 'flow'>

function BasicModal(props: BasicModalProps): JSX.Element {
  const [flow] = useState<YotiWebShareBaseProps['flow']>('MODAL')
  return (
    <YotiWebShareBase
      flow={flow}
      {...props}
    />
  )
}

export default BasicModal
