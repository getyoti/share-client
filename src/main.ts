import {createBob, getBobs} from './../lib/main'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Welcome!</h1>
    <div class="card">
      <button id="counter" type="button">Add a bob</button>
      <pre id="content"></pre>
    </div>
  </div>
`


function setup(button: HTMLButtonElement, paragraph: HTMLParagraphElement) {
  const updateDisplay = () => {
    const bobs = getBobs()
    paragraph.innerHTML = `There are ${bobs.length} bobs!\n` +
      bobs.map(bob => JSON.stringify(bob)).join('\n')
  }

  button.addEventListener('click', () => {
    createBob()
    updateDisplay()
  })
}


setup(
  document.querySelector<HTMLButtonElement>('#counter')!,
  document.querySelector<HTMLParagraphElement>('#content')!
)
