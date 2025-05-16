export type Rando = { secret: Stuff.Shhh }

export function createRando(): Rando {
  let secret: Stuff.Shhh = { message: 'default is quiet' }
  if (typeof window !== 'undefined') {
    secret = window.Yoyo?.Titi.getSecret() || secret
  }
  return { secret }
}
