import { createYotiWebShare } from '../lib/main'

import './style.css'

window.__YOTI_SHARE_CLIENT_URL = 'https://www.public.stg1.dmz.yoti.com/share/client/v2'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Welcome!</h1>
    <div class="card">
      <button id="start-btn" type="button">Start Share!</button>
      <div id="webshare-div" style="visibility: hidden" />
    </div>
  </div>
`

const button = document.querySelector<HTMLButtonElement>('#start-btn')!
const shareContainer = document.querySelector<HTMLDivElement>('#webshare-div')!

const removeButton = () => {
  button.parentNode?.removeChild(button)
}

const showShareContainer = () => {
  shareContainer.style.visibility = 'visible'
}

const start = async () => {
  const SDK_ID = '60f98bf7-0da7-4484-aa64-5a753dd502e0'
  const DOM_ID = 'webshare-div'

  await createYotiWebShare({
    name: 'demo',
    sdkId: SDK_ID,
    domId: DOM_ID,
    hooks: {
      sessionIdResolver: () => Promise.resolve('some-session-id'),
    },
  })
}

function setup() {
  button.addEventListener('click', () => {
    removeButton()
    showShareContainer()
    start().catch(console.error)
  })
}

setup()
