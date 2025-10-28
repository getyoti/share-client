import { type ContextType, type PropsWithChildren, useState } from 'react'

import YotiWebShareContext from './YotiWebShareContext'

type Props = ContextType<typeof YotiWebShareContext> &
  PropsWithChildren & {
    clientURL?: string
  }

const YotiWebShareContextProvider = ({ sdkId, locale, skinId, clientURL, children }: Props) => {
  // @ts-expect-error Acceptable to have 'clientUrl' not used
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [clientUrl] = useState(() => {
    if (clientURL) window.__YOTI_SHARE_CLIENT_URL = clientURL
    return window.__YOTI_SHARE_CLIENT_URL
  })

  return (
    <YotiWebShareContext.Provider value={{ sdkId, locale, skinId }}>
      {children}
    </YotiWebShareContext.Provider>
  )
}

export default YotiWebShareContextProvider
