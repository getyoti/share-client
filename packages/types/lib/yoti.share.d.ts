enum Skin {
  YOTI = 'yoti',
  YOTI_POST_OFFICE = 'yoti-with-post-office',
  DIGITAL_ID_UK = 'digital-id-uk',
}

enum ButtonAlignment {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

enum ButtonVerticalAlignment {
  TOP = 'top',
  MIDDLE = 'middle',
  BOTTOM = 'bottom',
}

enum ButtonWidth {
  AUTO = 'auto',
  FULL = 'full',
}

enum MobileCompletionFlow {
  INTERNAL = 'internal',
  EXTERNAL = 'external',
}

enum ElementType {
  MODAL = 'modal',
  INLINE = 'inline',
}

declare namespace YotiShare {
  type ConfigElement = {
    clientSdkId: string
    domId: string
    scenarioId?: string
    type: `${ElementType}`
    skinId?: `${Skin}`
    displayLearnMoreLink?: boolean
    button?: {
      align?: `${ButtonAlignment}`
      verticalAlign?: `${ButtonVerticalAlignment}`
      width?: `${ButtonWidth}`
    }
    modal?: {
      zIndex?: number
    }
    shareComplete?: {
      closeDelay?: number
      tokenHandler?: (token: string) => Promise<any>
      mobileFlow?: `${MobileCompletionFlow}`
    }
    shareUrlProvider?: () => Promise<string>
  }

  type Config = {
    elements: YotiShare.ConfigElement[]
  }

  type ShareInstance = {
    destroy: () => void
  }
}
