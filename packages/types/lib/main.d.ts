/// <reference path="./yoti.share.d.ts" />

interface Window {
  Yoti?: {
    Share: {
      init: (config: YotiShare.Config) => Promise<YotiShare.ShareInstance>
    }
  }
}
