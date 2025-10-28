import { createYotiWebShare } from '@getyoti/share-client-core'
import { type JSX, useEffect, useRef, useState } from 'react'

type TConfig = Required<YotiWebShare.WebShareProps>

type YotiWebShareHandlerProps = {
  onSessionIdAwaited: TConfig['hooks']['sessionIdResolver']
  onSessionComplete?: TConfig['hooks']['completionHandler']
  onError?: TConfig['hooks']['errorListener']
  onEvent?: TConfig['hooks']['eventListener']
  onReady?: (webShareInstance: YotiWebShare.WebShare) => void
}

export type YotiWebShareBaseProps = Pick<TConfig, 'name' | 'sdkId'> &
  TConfig['presentation'] &
  Partial<Pick<TConfig, 'locale' | 'skinId' | 'domId' | 'flow'>> &
  YotiWebShareHandlerProps

function YotiWebShareBase(props: YotiWebShareBaseProps): JSX.Element {
  const [oopsError, setOopsError] = useState<Error | null>(null)
  const initialising = useRef<boolean>(false)
  const uniqueInstance = useRef<YotiWebShare.WebShare | undefined>(undefined)
  const {
    sdkId,
    name,
    locale,
    onSessionIdAwaited,
    onSessionComplete,
    onError,
    onEvent,
    flow,
    skinId,
    alignment,
    onReady,
  } = props

  const [domId] = useState<string>(props.domId || `${name}-${sdkId}-${Date.now()}`)

  useEffect(() => {
    return () => {
      if (uniqueInstance.current) {
        uniqueInstance.current.destroy()
      }
    }
  }, [])

  useEffect(() => {
    if (!initialising.current && !uniqueInstance.current) {
      initialising.current = true
      createYotiWebShare({
        name,
        sdkId,
        domId,
        skinId,
        locale,
        flow,
        presentation: { alignment },
        hooks: {
          completionHandler: onSessionComplete,
          sessionIdResolver: onSessionIdAwaited,
          errorListener: onError,
          eventListener: onEvent,
        },
      })
        .then((shareInstance) => {
          uniqueInstance.current = shareInstance
          if (onReady) onReady(shareInstance)
        })
        .catch(setOopsError)
    }
  }, [
    domId,
    name,
    sdkId,
    skinId,
    alignment,
    onSessionIdAwaited,
    onSessionComplete,
    onError,
    onEvent,
    flow,
    locale,
    onReady,
  ])

  return <div id={domId}>{oopsError && <div>Inline error: {oopsError.message}</div>}</div>
}

export default YotiWebShareBase
