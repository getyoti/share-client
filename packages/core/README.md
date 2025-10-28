# share-client - Core

> ⚠️ **Are you set up with Yoti?**  
> Please make sure you have read the [quick introduction](../../README.md)

### Get started

Install the package

```shell
npm i @getyoti/share-client-core
```

Ready to use! Simply pass your `SDK_ID`, the `DOM` identifier of the html container, and specify the controls and options.

```typescript
import { createYotiWebShare } from '@getyoti/share-client-core'

const SDK_ID = '60f98bf7-0da7-4484-aa64-5a753dd502e0'
const DOM_ID = 'share-div'

await createYotiWebShare({
  name: 'demo',
  sdkId: SDK_ID,
  domId: DOM_ID,
  flow: 'MODAL',
  hooks: {
    sessionIdResolver: () => Promise.resolve('some-session-id'),
  },
})
```

### API

The library exposes 3 methods

```typescript
import { loadClient, startYotiModalShare, startYotiInlineShare } from '../lib/main'
```

| Method                        | Description                                                                                                 |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------- |
| loadClient()                  | Utility method, loads the Yoti share client once only (automatically called by `createYotiWebShare({...})`) |
| createYotiWebShare({...})     | Create a Yoti WebShare instance, ready to be used                                                           |
| getYotiWebShareByName({...})  | Returns the Yoti WebShare corresponding to the name if exists                                               |
| getYotiWebShareByDomId({...}) | Returns the Yoti WebShare corresponding to the DOM ID if exists                                             |
| getDetectedDeviceType({...})  | Returns the device detected (currently 'desktop'/'mobile')                                                  |
