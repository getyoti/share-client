/// <reference path="./yoti.webshare.d.ts" />

// import type { CreateWebShareProps, WebShare } from 'lib/ccc'

interface Window {
  Yoti?: YotiWebShare.Client
  // Yoti?: {
  //   // Share: {
  //   //   init: (config: YotiWebShare.Config) => Promise<YotiWebShare.ShareInstance>
  //   // }
  //
  //   ready: () => Promise<boolean>
  //   getWebShareByName: (name: string) => YotiWebShare.WebShare | void
  //   getWebShareByDomId: (name: string) => YotiWebShare.WebShare | void
  //   getDetectedDeviceType: YotiWebShare.WebShareGetDetectedDevice
  //   createWebShare: (props: YotiWebShare.WebShareProps) => Promise<YotiWebShare.WebShare>
  // }
}
