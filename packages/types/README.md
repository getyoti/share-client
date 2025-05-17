# share-client - Types

These are the types for the live client.
See [share documentation](http://todo.com)

Install as dev dependency

```shell
npm i -D @getyoti/share-client-types
```

Then, in code

```typescript
// your-file.ts

/// <reference types="@getyoti/share-client-types" />

/**
 * Your code:
 *
 *
 *
 * const config: YotiWebShare.Config = {
 *     elements: [
 *       {
 *         clientSdkId: 'testClientSdkId',
 *         domId: 'testDomId',
 *         scenarioId: 'testScenarioId',
 *         type: 'modal',
 *         skinId: 'digital-id-uk',
 *         displayLearnMoreLink: false,
 *         button: {
 *           align: 'center',
 *           verticalAlign: 'middle',
 *           width: 'auto',
 *         },
 *         modal: {
 *           zIndex: 2,
 *         },
 *         shareComplete: {
 *           closeDelay: 500,
 *           tokenHandler: (token: string) => Promise.resolve(token),
 *           mobileFlow: 'external',
 *         },
 *         shareUrlProvider: () => Promise.resolve('https://code.yoti.com/46ews'),
 *       },
 *     ],
 *   }
 *
 *
 * window.Yoti?.Share.init(config)
 *
 *
 *
 *
 */

window.Yoti?.Share.init(config)
```
