import { expect, test, vi } from 'vitest'

test('just a file to test Typescript with compiler ', () => {
  vi.stubGlobal('window', {
    Yoyo: {
      Titi: {
        getSecret: vi.fn().mockImplementation(() => {
          return 'test'
        }),
      },
    },
  })

  const aThing:Stuff.Thing = {one:'asd', orTwo: "13"}
  const secret: Stuff.Shhh = {message: 'asdsd'};
  const anIt:Stuff.Bit = {secret: secret, shh: true}

  expect(aThing).toBeDefined
  expect(anIt).toBeDefined

  const result= window.Yoyo?.Titi.getSecret()
  expect(result).toBe('test')
  expect(window.Yoyo?.Titi.getSecret).toHaveBeenCalled()
})
