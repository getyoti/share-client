import { useState } from 'react'

import type { BasicModalProps } from './BasicModal'
import type { ControlledModalProps } from './ControlledModal'
import type { ControlledModalWithHandleProps } from './ControlledModalWithHandle'
import BasicModal from './BasicModal'
import ControlledModal from './ControlledModal'
import ControlledModalWithHandle from './ControlledModalWithHandle'

export { default as Basic } from './BasicModal'
export { default as Controlled } from './ControlledModal'
export { default as ControlledWithHandle } from './ControlledModalWithHandle'

type CombinedModalProps =
  | ({
      mode?: 'default'
    } & BasicModalProps)
  | ({
      mode: 'controlled'
    } & ControlledModalProps)
  | ({
      mode: 'controlled-with-handle'
    } & ControlledModalWithHandleProps)

const Modal = ({ mode, ...props }: CombinedModalProps) => {
  const [initialMode] = useState(mode || 'default')
  switch (initialMode) {
    case 'controlled':
      return <ControlledModal {...(props as ControlledModalProps)} />
    case 'controlled-with-handle':
      return <ControlledModalWithHandle {...(props as ControlledModalWithHandleProps)} />
    case 'default':
    default:
      return <BasicModal {...(props as BasicModalProps)} />
  }
}

export default Modal
