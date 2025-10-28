import { createContext } from 'react'

type TYotiWebShareContext = Pick<YotiWebShare.WebShareProps, 'sdkId' | 'skinId' | 'locale'>

const YotiWebShareContext = createContext<TYotiWebShareContext>({
  sdkId: '',
  locale: 'en',
  skinId: 'digital-id-uk',
})

export default YotiWebShareContext
