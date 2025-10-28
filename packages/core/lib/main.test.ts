import { describe, expect, test, vi } from 'vitest'

import { loadClient } from './loader'
import { createYotiWebShare, getYotiClient } from './main'

vi.mock('./loader')

// vi.stubGlobal('window', {
//   Yoti: {
//     ready: vi.fn().mockImplementation(()=> Promise.resolve(true)),
//     createWebShare: vi.fn().mockImplementation(()=> Promise.resolve({some: 'instance'})),
//   },
// })

// const Yoti = window.Yoti!

const SDK_ID = 'client-sdk-id'
const DOM_ID = 'some-dom-id'

// const mockedClient: YotiWebShare.Client = {
//   ready: vi.fn().mockImplementation(()=> Promise.resolve(true)),
//   createWebShare: vi.fn().mockImplementation(()=> Promise.resolve({some: 'instance'})),
//   getWebShareByDomId: vi.fn(),
//   getWebShareByName: vi.fn(),
//   getDetectedDeviceType: vi.fn()
// }

describe('it exports methods', () => {
  describe('getYotiWebShareClient()', () => {
    test('that returns loadClient', async () => {
      const mockedClient: YotiWebShare.Client = {
        mocked: 'client',
      } as unknown as YotiWebShare.Client

      vi.mocked(loadClient).mockResolvedValue(mockedClient)

      const client = await getYotiClient()

      expect(loadClient).toHaveBeenCalled()
      expect(client).toEqual(mockedClient)
      // expect(Yoti.ready).toHaveBeenCalled()
      // expect(Yoti.createWebShare).toHaveBeenCalledWith(props)
    })
  })

  describe('createYotiWebShare(props)', () => {
    test('that orchestrates loadClient() >> Yoti.createWebShare(props)', async () => {
      const mockedClient: YotiWebShare.Client = {
        mocked: 'client',
        createWebShare: vi.fn().mockImplementation(() => Promise.resolve({ some: 'instance' })),
      } as unknown as YotiWebShare.Client

      vi.mocked(loadClient).mockResolvedValue(mockedClient)

      const props = {
        name: 'test',
        domId: DOM_ID,
        sdkId: SDK_ID,
        hooks: {
          sessionIdResolver: () => Promise.resolve('123'),
        },
      }
      await createYotiWebShare(props)

      expect(loadClient).toHaveBeenCalled()
      expect(mockedClient.createWebShare).toHaveBeenCalledWith(props)
    })
  })
})
