type ElementOptions = {
  skinId?: YotiShare.ConfigElement['skinId']
  button?: YotiShare.ConfigElement['button']
  withLearnMoreLink?: boolean
}

type ModalOptions = ElementOptions & {
  zIndex?: number
  completeShareClosingDelay?: number
}

type InlineOptions = ElementOptions & {
  desktopInstantQrDisplay?: boolean
}

type BaseControls = {
  useMobileReturningFlow?: boolean
  completeShareTokenHandler?: (token: string) => Promise<unknown>
}

type ScenarioControls = BaseControls & {
  scenarioId: string
}

type ShareUrlControls = BaseControls & {
  shareUrlProvider: () => Promise<string>
}

function createElement(
  clientSdkId: string,
  domId: string,
  controls: ScenarioControls | ShareUrlControls,
  options: ElementOptions = {},
): Omit<YotiShare.ConfigElement, 'type'> {
  const isScenarioControl = 'scenarioId' in controls
  const isShareUrlControl = 'shareUrlProvider' in controls
  return {
    clientSdkId,
    domId,
    ...(isScenarioControl && { scenarioId: controls.scenarioId }),
    ...(isShareUrlControl && { shareUrlProvider: controls.shareUrlProvider }),
    skinId: options.skinId,
    displayLearnMoreLink: options.withLearnMoreLink,
    button: options.button,
    shareComplete: {
      tokenHandler: controls.completeShareTokenHandler,
      mobileFlow: controls.useMobileReturningFlow === false ? 'external' : 'internal',
    },
  }
}

type CreateParams = {
  clientSdkId: string
  domId: string
  controls: ScenarioControls | ShareUrlControls
  options?: ModalOptions
}

export type CreateModalParams = CreateParams & {
  options?: ModalOptions
}

export const createModalElement = (params: CreateModalParams): YotiShare.ConfigElement => {
  const { clientSdkId, domId, controls, options = {} } = params

  const element = createElement(clientSdkId, domId, controls, options)

  if (options.zIndex) {
    element.modal = { zIndex: options.zIndex }
  }
  if (options.completeShareClosingDelay) {
    element.shareComplete = { closeDelay: options.completeShareClosingDelay }
  }

  return {
    ...element,
    type: 'modal',
  }
}

export type CreateInlineParams = CreateParams & {
  options?: InlineOptions
}

export const createInlineElement = (params: CreateInlineParams): YotiShare.ConfigElement => {
  const { clientSdkId, domId, controls, options = {} } = params

  if (options.desktopInstantQrDisplay) {
    delete options.button
  } else {
    options.button = {
      align: options.button?.align || 'center',
      verticalAlign: options.button?.verticalAlign || 'middle',
      width: options.button?.width || 'auto',
    }
  }
  const element = createElement(clientSdkId, domId, controls, options)

  return {
    ...element,
    type: 'inline',
  }
}
