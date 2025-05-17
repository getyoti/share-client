import { startYotiInlineShare, startYotiModalShare } from '@getyoti/share-client-core'
import { type JSX, useEffect, useRef, useState } from 'react'

type TConfig = Required<YotiShare.ConfigElement>

export type YotiShareBaseProps = {
  sdkId: string
  skinId?: TConfig['skinId']
  buttonAlignment?: TConfig['button']['align']
  buttonVerticalAlignment?: TConfig['button']['verticalAlign']
  buttonWidth?: TConfig['button']['width']
  resumeOnMobile?: boolean
  onTokenReceived?: TConfig['shareComplete']['tokenHandler']
}

export type YotiShareModalOnlyProps = {
  zIndex?: number
  closingDelay?: number
}

export type YotiShareInlineOnlyProps = {
  instantQrDisplay?: boolean
}

export type YotiShareWithShareUrlProps = {
  onShareUrlAwaited: TConfig['shareUrlProvider']
}

export type YotiShareWithScenarioProps = {
  scenarioId: string
  withLearnMoreLink?: boolean
}

const INLINE = 'inline'
const MODAL = 'modal'

function YotiShareBase({
  type,
  // YotiShareBaseProps
  sdkId,
  skinId = 'digital-id-uk',
  buttonAlignment = 'center',
  buttonVerticalAlignment = 'middle',
  buttonWidth = 'auto',
  onTokenReceived,
  resumeOnMobile = true,
  //YotiShareInlineOnlyProps
  instantQrDisplay = false,
  //YotiShareModalOnlyProps
  zIndex,
  closingDelay,
  //YotiShareWithShareUrlProps
  onShareUrlAwaited,
  //YotiShareWithScenarioProps
  scenarioId,
  withLearnMoreLink = false,
}: {
  type: typeof MODAL | typeof INLINE
} & YotiShareBaseProps &
  YotiShareModalOnlyProps &
  YotiShareInlineOnlyProps &
  Partial<YotiShareWithShareUrlProps> &
  Partial<YotiShareWithScenarioProps>): JSX.Element {
  const [oopsError, setOopsError] = useState<Error | null>(null)
  const initialising = useRef<boolean>(false)
  const uniqueInstance = useRef<YotiShare.ShareInstance | undefined>(undefined)
  const [domId] = useState<string>(`${type}-${sdkId}-${Date.now()}`)

  useEffect(() => {
    if (!initialising.current && !uniqueInstance.current) {
      const validType = [INLINE, MODAL].includes(type)
      if (!validType) {
        console.warn('Invalid type')
        return
      }

      const buttonOptions = {
        align: buttonAlignment,
        width: buttonWidth,
        verticalAlign: buttonVerticalAlignment,
      }

      const controlBase = {
        useMobileReturningFlow: resumeOnMobile,
        completeShareTokenHandler: onTokenReceived,
      }
      const validControls =
        (typeof onShareUrlAwaited === 'function' && {
          ...controlBase,
          shareUrlProvider: onShareUrlAwaited!,
        }) ||
        (typeof scenarioId === 'string' && { ...controlBase, scenarioId })

      if (!validControls) {
        console.warn('Invalid controls parameters')
        return
      }

      initialising.current = true

      const startYotiShare = type === MODAL ? startYotiModalShare : startYotiInlineShare

      startYotiShare({
        clientSdkId: sdkId,
        domId,
        controls: validControls,
        options: {
          skinId,
          button: buttonOptions,
          desktopInstantQrDisplay: instantQrDisplay,
          withLearnMoreLink: withLearnMoreLink,
          zIndex,
          completeShareClosingDelay: closingDelay,
        },
      })
        .then((shareInstance) => {
          uniqueInstance.current = shareInstance
        })
        .catch(setOopsError)
    }
  }, [
    buttonAlignment,
    buttonVerticalAlignment,
    buttonWidth,
    closingDelay,
    domId,
    instantQrDisplay,
    onShareUrlAwaited,
    onTokenReceived,
    resumeOnMobile,
    scenarioId,
    sdkId,
    skinId,
    type,
    withLearnMoreLink,
    zIndex,
  ])

  return <div id={domId}>{oopsError && <div>Inline error: {oopsError.message}</div>}</div>
}

export default YotiShareBase
