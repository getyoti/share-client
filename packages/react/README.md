# share-client - React

> ⚠️\*Are you set up with Yoti?\*\*  
> Please make sure you have read the [quick introduction](../../README.md)

### Get started

Install the package

```shell
npm i @getyoti/share-client-react
```

Ready to use!

```typescript jsx
import { useCallback } from 'react'
import { ModalYotiShare } from '@getyoti/share-client-react'

const SDK_ID = '60f98bf7-0da7-4484-aa64-5a753dd502e0'

export function MyComponent() {

  const onShareUrlAwaited = useCallback(async (): Promise<string> => {
    // Call your server to get a new share url and return that url.
    // Make sure to resolve
  }, [])

  const onTokenReceived = useCallback(async (token: string): Promise<unknown> => {
    // Use the token to submit it to your server if need be
    // Make sure to resolve
  }, [])

  return (
    <div>
      <h4>Yoti share</h4>
      <ModalYotiShare
          sdkId={SDK_ID}
          onShareUrlAwaited={onShareUrlAwaited}
          skinId="digital-id-uk"
          buttonAlignment="center"
          buttonVerticalAlignment="middle"
          buttonWidth="full"
          onTokenReceived={onTokenReceived}
      />
    </div>
  )
}
```

### API

The library exposes 4 components

```typescript
import {
  ModalYotiShare,
  InlineYotiShare,
  ModalYotiShareWithScenario,
  InlineYotiShareWithScenario,
} from '@getyoti/share-client-react'
```

| Component                         | Description                                                                                                                  |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| <ModalYotiShare.../>              | Component that displays the Yoti modal - comes with a trigger button                                                         |
| <InlineYotiShare.../>             | Component that displays the Yoti inline - comes with an optional trigger button                                              |
| <ModalYotiShareWithScenario.../>  | (😵 deprecated flow) Same as the ModalYotiShare excepts it relies on a `scenarioId` property (replaces `onShareUrlAwaited`)  |
| <InlineYotiShareWithScenario.../> | (😵 deprecated flow) Same as the InlineYotiShare excepts it relies on a `scenarioId` property (replaces `onShareUrlAwaited`) |
