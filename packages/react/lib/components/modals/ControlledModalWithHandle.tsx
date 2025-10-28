import { type JSX, useCallback, useState } from 'react'

import type { ControlledModalProps } from './ControlledModal'
import type { YotiWebShareBaseProps } from '../YotiWebShareBase'
import ControlledModal from './ControlledModal'

type RequiredHandler = Required<Pick<YotiWebShareBaseProps, 'onEvent' | 'onReady'>>
type OnReadyCallback = RequiredHandler['onReady']

export type ControlledModalWithHandleProps = Omit<
  ControlledModalProps,
  'opened' | 'onOpened' | 'onClosed'
> & {
  onRevealReady: ({ ready, revealHandle }: { ready: boolean; revealHandle?: () => void }) => void
}
const ControlledModalWithHandle = ({
  onReady,
  onRevealReady,
  ...props
}: ControlledModalWithHandleProps): JSX.Element => {
  const [internalOpened, setInternalOpened] = useState<boolean>(false)

  const onClosed = useCallback(() => {
    onRevealReady({ ready: true, revealHandle: () => setInternalOpened(true) })
    setInternalOpened(false)
  }, [onRevealReady])

  const onOpened = useCallback(() => {
    onRevealReady({ ready: false, revealHandle: () => {} })
    setInternalOpened(true)
  }, [onRevealReady])

  const onReadyHandle = useCallback(
    (...[webShareInstance]: Parameters<OnReadyCallback>) => {
      if (onReady) onReady(webShareInstance)
      onClosed()
    },
    [onReady, onClosed],
  )

  return (
    <ControlledModal
      {...props}
      opened={internalOpened}
      onClosed={onClosed}
      onOpened={onOpened}
      onReady={onReadyHandle}
    />
  )
}

export default ControlledModalWithHandle
