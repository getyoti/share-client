import { startYotiModalShare } from '../lib/main'

import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Welcome!</h1>
    <div class="card">
      <button id="start-btn" type="button">Start Share!</button>
      <div id="share-div" style="visibility: hidden" />
    </div>
  </div>
`

const button = document.querySelector<HTMLButtonElement>('#start-btn')!
const shareContainer = document.querySelector<HTMLDivElement>('#share-div')!

const removeButton = () => {
  button.parentNode?.removeChild(button)
}

const showShareContainer = () => {
  shareContainer.style.visibility = 'visible'
}

const start = async () => {
  const SDK_ID = '60f98bf7-0da7-4484-aa64-5a753dd502e0'
  const DOM_ID = 'share-div'
  // const SCENARIO_ID = '3f7158bc-4554-47d9-ade6-f35e3fbb4bf2'

  await startYotiModalShare({
    clientSdkId: SDK_ID,
    domId: DOM_ID,
    controls: {
      // scenarioId: SCENARIO_ID,
      shareUrlProvider: () => Promise.resolve('https://code.yoti.com/lakdjalskdj'),
      useMobileReturningFlow: true,
    },
    options: {
      skinId: 'yoti',
      button: {
        align: 'left',
      },
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
