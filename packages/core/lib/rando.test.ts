import { expect, test, vi } from 'vitest'

import { createRando } from './rando'

test('calling createRando()', () => {
  vi.stubGlobal('window', {
    Yoyo: {
      Titi: {
        getSecret: vi.fn().mockImplementation(() => {
          return { message: 'this is a test' }
        }),
      },
    },
  })
  expect(createRando()).toStrictEqual({ secret: { message: 'this is a test' } })
  expect(window.Yoyo?.Titi.getSecret).toHaveBeenCalled()
})
