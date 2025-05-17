window.__YOTI_SHARE_CLIENT_URL = 'https://www.yoti.com/share/client'

const addClient = () =>
  new Promise((resolve) => {
    const newScript = window.document.createElement('script')
    newScript.setAttribute('src', window.__YOTI_SHARE_CLIENT_URL)
    newScript.addEventListener('load', resolve)

    window.document.head.appendChild(newScript)
  })

let addClientPromise: Promise<unknown>

export const loadClient = () => {
  if (!addClientPromise) {
    addClientPromise = addClient()
  } else if (window.Yoti?.Share) {
    addClientPromise = addClient()
  }

  return addClientPromise
}
