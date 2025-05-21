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


const config: YotiWebShare.Config = {
  elements: [
    {
      clientSdkId: 'testClientSdkId',
      domId: 'testDomId',
      type: 'modal',
      skinId: 'digital-id-uk',
      displayLearnMoreLink: false,
      button: {
        align: 'center',
        verticalAlign: 'middle',
        width: 'auto',
      },
      modal: {
        zIndex: 2,
      },
      shareComplete: {
        closeDelay: 500,
        tokenHandler: (token: string) => Promise.resolve(token),
        mobileFlow: 'external',
      },

      // Choose either the share url mode by setting a 'shareUrlProvider' method that returns Yoti share urls created on your server
      shareUrlProvider: () => Promise.resolve('https://code.yoti.com/46ews'),
      // or use the scenario mode by providing a 'scenarioId'
      scenarioId: 'testScenarioId',
    },
  ],
}

window.Yoti?.Share.init(config)
```
