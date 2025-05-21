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
import { startYotiModalShare } from '@getyoti/share-client-core'

const SDK_ID = '60f98bf7-0da7-4484-aa64-5a753dd502e0'
const DOM_ID = 'share-div'

const shareUrlProvider = async () => {
  // Call your server to get a new share url and return that url.
}

await startYotiModalShare({
  clientSdkId: SDK_ID,
  domId: DOM_ID,
  controls: {
    shareUrlProvider,
  },
  options: {
    skin: 'digital-id-uk',
    button: {
      width: 'full',
    },
  },
})
```

### API

The library exposes 3 methods

```typescript
import { loadClient, startYotiModalShare, startYotiInlineShare } from '../lib/main'
```

| Method                      | Description                                                                 |
| --------------------------- | --------------------------------------------------------------------------- |
| loadClient()                | Utility method, loads the Yoti share client once only                       |
| startYotiModalShare({...})  | Loads the share client if not present and then render the **modal** element |
| startYotiInlineShare({...}) | Same as `startYotiModalShare` but for the **inline** element                |
