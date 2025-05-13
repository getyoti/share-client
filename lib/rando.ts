export type Rando = { secret: { message: string } };


export function createRando(): Rando {
  let secret = {message: 'Default'}
  if (typeof window !== 'undefined') {
    secret = window.Yoyo?.Titi.getSecret() || secret
  }
  return {secret}
}
