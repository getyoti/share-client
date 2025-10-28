import { type JSX, useCallback, useEffect, useRef, useState } from 'react'

import type { YotiWebShareBaseProps } from '../YotiWebShareBase'
import YotiWebShareBase from '../YotiWebShareBase'

type OnEventCallback = Required<YotiWebShareBaseProps>['onEvent']
type OnReadyCallback = Required<YotiWebShareBaseProps>['onReady']

export type ControlledModalProps = Omit<YotiWebShareBaseProps, 'flow'> & {
  onClosed: () => void
  onOpened: () => void
  opened: boolean
}

const ControlledModal = ({
  onClosed,
  onOpened,
  onEvent,
  onReady,
  opened,
  name,
  ...props
}: ControlledModalProps): JSX.Element => {
  const [usedName] = useState(name)
  const [ready, setReady] = useState(false)
  const revealedRef = useRef(false)
  const [flow] = useState<Required<YotiWebShareBaseProps>['flow']>({
    desktop: 'CONTROL_MODAL_QR_CODE',
    mobile: 'CONTROL_MODAL_APP_BUTTON',
  })

  const onYotiWebShareModalEvent = useCallback(
    (...[eventName, eventData]: Parameters<OnEventCallback>) => {
      switch (eventName) {
        case 'SHARE_MODAL_OFF_SCREEN':
          onClosed()
          revealedRef.current = false
          break
        case 'SHARE_MODAL_ON_SCREEN':
          onOpened()
          revealedRef.current = true
          break
        default:
          if (onEvent) onEvent(eventName, eventData)
          break
      }
    },
    [onClosed, onOpened, onEvent],
  )

  const onYotiWebShareModalReady = useCallback(
    (...[webShareInstance]: Parameters<OnReadyCallback>) => {
      if (onReady) onReady(webShareInstance)
      setReady(true)
    },
    [onReady],
  )

  useEffect(() => {
    if (opened && ready && !revealedRef.current) {
      const webshare = window.Yoti?.getWebShareByName(usedName)
      if (webshare) {
        webshare.reveal!()
      } else {
        console.warn(`no webshare to reveal`)
      }
    }
  }, [opened, ready, usedName])

  return (
    <YotiWebShareBase
      {...props}
      flow={flow}
      name={usedName}
      onReady={onYotiWebShareModalReady}
      onEvent={onYotiWebShareModalEvent}
    />
  )
}

export default ControlledModal
