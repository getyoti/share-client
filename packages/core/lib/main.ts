import { loadClient } from './loader'

export const createYotiWebShare = async (props: YotiWebShare.WebShareProps) => {
  const client = await loadClient()
  return client.createWebShare(props)
}

export const getYotiWebShareByName = async (name: string) => {
  const client = await loadClient()
  return client.getWebShareByName(name)
}

export const getYotiWebShareByDomId = async (domId: string) => {
  const client = await loadClient()
  return client.getWebShareByDomId(domId)
}

export const getDetectedDeviceType = async () => {
  const client = await loadClient()
  return client.getDetectedDeviceType()
}

export const getYotiClient = loadClient
