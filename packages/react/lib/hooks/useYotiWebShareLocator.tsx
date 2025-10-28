import { getYotiClient } from '@getyoti/share-client-core'
import { useEffect, useState } from 'react'

function useYotiWebShareLocator(name: string): YotiWebShare.WebShare | undefined {
  const [client, setClient] = useState<YotiWebShare.Client | undefined>()
  useEffect(() => {
    let cancelled = false
    getYotiClient().then((c) => {
      if (!cancelled) setClient(c)
    })
    return () => {
      cancelled = true
      setClient(undefined)
    }
  }, [])

  return client ? client.getWebShareByName(name) : undefined
}

export default useYotiWebShareLocator
