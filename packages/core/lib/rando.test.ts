import { expect, test, vi } from 'vitest'
import { createRando } from './rando'

test('calling createRando()', () => {
  vi.stubGlobal('window', {
    Yoyo: {
      Titi: {
        getSecret: vi.fn().mockImplementation(() => {
          return 'test'
        }),
      },
    },
  })
  expect(createRando()).toStrictEqual({ secret: 'test' })
  expect(window.Yoyo?.Titi.getSecret).toHaveBeenCalled()
})
