import YotiWebShareBase from './YotiWebShareBase'
import { withYotiWebShareContext } from './withYotiWebShareContext'
import {
  default as Modal,
  Basic as BasicModal,
  Controlled as ControlledModal,
  ControlledWithHandle as ControlledWithHandleModal,
} from './modals'
import { default as Inline, Basic as BasicInline, Instant as InstantInline } from './inlines'

export { default as YWSElement } from './YotiWebShareBase'
export {
  default as YWSModal,
  Basic as YWSBaseModal,
  Controlled as YWSControlledModal,
  ControlledWithHandle as YWSControlledWithHandleModal,
} from './modals'
export {
  default as YWSInline,
  Basic as YWSBasicInline,
  Instant as YWSInstantInline,
} from './inlines'
export const YWSCElement = withYotiWebShareContext(YotiWebShareBase)
export const YWSCModal = withYotiWebShareContext(Modal)
export const YWSCBasicModal = withYotiWebShareContext(BasicModal)
export const YWSCControlledModal = withYotiWebShareContext(ControlledModal)
export const YWSCControlledWithHandleModal = withYotiWebShareContext(ControlledWithHandleModal)
export const YWSCInline = withYotiWebShareContext(Inline)
export const YWSCBasicInline = withYotiWebShareContext(BasicInline)
export const YWSCInstantInline = withYotiWebShareContext(InstantInline)
