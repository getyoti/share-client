import { expect, test, vi } from 'vitest'

test('just a file to test Typescript with compiler', async () => {
  vi.stubGlobal('window', {
    Yoti: {
      Share: {
        init: vi.fn().mockImplementation(() => {
          return 'test'
        }),
      },
      ready: vi.fn().mockImplementation(() => true),
      createWebShare: vi.fn().mockImplementation(() => ({ domId: 'something' })),
    },
  })

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
      sessionIdResolver: () => Promise.resolve('13'),
      completionHandler: console.log,
    },
  }

  expect(config).toBeDefined

  await window.Yoti?.ready()
  const Yoti = window.Yoti!
  const result = await Yoti.createWebShare(config)
  expect(result).toMatchObject({ domId: 'something' })
  expect(Yoti.createWebShare).toHaveBeenCalled()
  const {
    domId,
    // reveal,
    // error,
    // name,
    // destroy,
  } = result
  expect(domId).toBe('something')
})
