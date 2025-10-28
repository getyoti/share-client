# share-client - Types

> ⚠️*Are you set up with Yoti?**  
> Please make sure you have read the [quick introduction](../../README.md)

### Get started

Install the package

```shell
npm i @getyoti/share-client-types
```

Ready to use!

Simply add the typescript reference as shown below, and you can then benefit from the typing completion.

```typescript
// your-file.ts - or a global.d.ts

// Add the reference
/// <reference types="@getyoti/share-client-types" />


const config: YotiWebShare.WebShareProps = {
  sdkId: 'testClientSdkId',
  domId: 'testDomId',
  skinId: 'digital-id-uk',
  name: 'test',
  flow: {
    desktop: 'REVEAL_MODAL_QR_CODE',
    mobile: 'REVEAL_MODAL_APP_BUTTON',
  },
  presentation: {
    alignment: 'center',
  },
  hooks: {
    sessionIdResolver: () => Promise.resolve('some-session-id'),
    completionHandler: (receiptId) => {},
  },
}

await window.Yoti?.ready()
const Yoti = window.Yoti!
const instance = await Yoti.createWebShare(config)

// Call destroy when done with the WebShare instance
// instance.destroy()
```
