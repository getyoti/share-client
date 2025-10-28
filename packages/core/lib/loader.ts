window.__YOTI_SHARE_CLIENT_URL = 'https://www.yoti.com/share/client/v2'

const addClient = () =>
  new Promise((resolve) => {
    const newScript = window.document.createElement('script')
    newScript.setAttribute('src', window.__YOTI_SHARE_CLIENT_URL)
    newScript.setAttribute('id', 'yoti-share-client')
    newScript.addEventListener('load', resolve)

    window.document.head.appendChild(newScript)
  })

let addClientPromise: Promise<unknown> | undefined

export const loadClient: () => Promise<YotiWebShare.Client> = async () => {
  if (!addClientPromise) {
    addClientPromise = addClient()
  }
  await addClientPromise

  // In case the script was removed after a prior loading
  if (!window.Yoti) {
    addClientPromise = undefined
    return loadClient()
  } else {
    await window.Yoti.ready()
    return window.Yoti
  }
}
