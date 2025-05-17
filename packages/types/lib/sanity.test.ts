import { expect, test, vi } from 'vitest'

test('just a file to test Typescript with compiler ', () => {
  vi.stubGlobal('window', {
    Yoti: {
      Share: {
        init: vi.fn().mockImplementation(() => {
          return 'test'
        }),
      },
    },
  })

  const config: YotiShare.Config = {
    elements: [
      {
        clientSdkId: 'testClientSdkId',
        domId: 'testDomId',
        scenarioId: 'testScenarioId',
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
        shareUrlProvider: () => Promise.resolve('https://code.yoti.com/46ews'),
      },
    ],
  }

  expect(config).toBeDefined

  const result = window.Yoti?.Share.init(config)
  expect(result).toBe('test')
  expect(window.Yoti?.Share.init).toHaveBeenCalled()
})
