// Declare namespace
declare namespace Stuff {
  type Thing = {
    one: string
    orTwo: string
  }

  type Shhh = { message: string }

  type Bit = {
    secret: Shhh
    shh: boolean
    more: number
  }
}
