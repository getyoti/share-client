enum DeviceType {
  DESKTOP = 'desktop',
  MOBILE = 'mobile',
}

enum DeviceOS {
  Android = 'Android',
  iOS = 'iOS',
  Windows = 'Windows',
}

enum Locale {
  EN = 'en',
  FR = 'fr',
}

enum SkinId {
  YOTI = 'yoti',
  POST_OFFICE = 'post-office',
  PARTNER = 'partner',
  DIDC = 'digital-id-uk',
}

enum Alignment {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
  FILL = 'fill',
}

enum EventName {
  MODAL_ON_SCREEN = 'SHARE_MODAL_ON_SCREEN',
  MODAL_OFF_SCREEN = 'SHARE_MODAL_OFF_SCREEN',
}

type WebShareInstance = {
  readonly name: string
  readonly domId: string
  readonly error?: string
  readonly destroyed?: boolean
  reveal?: () => void
  destroy: () => void
}

enum QrCodeFlow {
  REVEAL_MODAL_QR_CODE = 'REVEAL_MODAL_QR_CODE',
  CONTROL_MODAL_QR_CODE = 'CONTROL_MODAL_QR_CODE',
  REVEAL_INLINE_QR_CODE = 'REVEAL_INLINE_QR_CODE',
  INSTANT_INLINE_QR_CODE = 'INSTANT_INLINE_QR_CODE',
}

enum AppButtonFlow {
  REVEAL_MODAL_APP_BUTTON = 'REVEAL_MODAL_APP_BUTTON',
  CONTROL_MODAL_APP_BUTTON = 'CONTROL_MODAL_APP_BUTTON',
  REVEAL_INLINE_APP_BUTTON = 'REVEAL_INLINE_APP_BUTTON',
}

enum BasicFlow {
  MODAL = 'MODAL',
  INLINE = 'INLINE',
  INSTANT = 'INSTANT',
}

type DesktopFlow = `${QrCodeFlow}`
type MobileFlow =
  | `${AppButtonFlow}`
  | `${QrCodeFlow.REVEAL_INLINE_QR_CODE}`
  | `${QrCodeFlow.INSTANT_INLINE_QR_CODE}`

type WebShareFlow =
  | `${BasicFlow}`
  | {
      desktop: DesktopFlow
      mobile: MobileFlow
    }

type Presentation = {
  alignment?: `${Alignment}`
}

type Hooks = {
  sessionIdResolver: () => Promise<string>
  completionHandler?: (receiptId: string) => void
  errorListener?: (code: number) => void
  eventListener?: (eventName: `${EventName}`, eventData?: unknown) => void
}

type CreateWebShareProps = {
  name: string
  domId: string
  sdkId: string
  hooks: Hooks
  flow?: WebShareFlow
  skinId?: `${SkinId}`
  locale?: `${Locale}`
  presentation?: Presentation
}

type WebShareClient = {
  ready: () => Promise<boolean>
  getWebShareByName: (name: string) => YotiWebShare.WebShare | undefined
  getWebShareByDomId: (name: string) => YotiWebShare.WebShare | undefined
  getDetectedDeviceType: YotiWebShare.WebShareGetDetectedDevice
  createWebShare: (props: YotiWebShare.WebShareProps) => Promise<YotiWebShare.WebShare>
}

declare namespace YotiWebShare {
  type Client = WebShareClient
  type WebShare = WebShareInstance
  type WebShareProps = CreateWebShareProps
  type WebShareGetDetectedDevice = () => `${DeviceType}`
}
