import { useState } from 'react'

import {
  InlineYotiShare,
  ModalYotiShare,
  ModalYotiShareWithScenario,
  InlineYotiShareWithScenario,
} from './../lib/main.ts'
import { Button } from './components/Button.tsx'

import './App.css'

const SDK_ID = '60f98bf7-0da7-4484-aa64-5a753dd502e0'
const SCENARIO_ID = '3f7158bc-4554-47d9-ade6-f35e3fbb4bf2'

const dummyShareUrlProvider = () => {
  return Promise.resolve(`https://code.yoti.com/some-code-${Date.now()}`)
}

function App() {
  const [yotiShareExample, setYotiShareExample] = useState<
    'inline' | 'inline-scenario' | 'modal' | 'modal-scenario'
  >()

  return (
    <>
      <h1>Welcome!</h1>
      <p>Click on one of the case:</p>

      <div className="buttons">
        <Button onClick={() => setYotiShareExample('inline')}>Show Inline</Button>
        <Button onClick={() => setYotiShareExample('inline-scenario')}>
          Show Inline with Scenario
        </Button>
        <Button onClick={() => setYotiShareExample('modal')}>Show Modal</Button>
        <Button onClick={() => setYotiShareExample('modal-scenario')}>
          Show Modal with Scenario
        </Button>
      </div>

      {yotiShareExample === 'inline' && (
        <InlineYotiShare
          sdkId={SDK_ID}
          onShareUrlAwaited={dummyShareUrlProvider}
          skinId="digital-id-uk"
        />
      )}
      {yotiShareExample === 'inline-scenario' && (
        <InlineYotiShareWithScenario
          sdkId={SDK_ID}
          scenarioId={SCENARIO_ID}
          skinId="yoti"
        />
      )}
      {yotiShareExample === 'modal' && (
        <ModalYotiShare
          sdkId={SDK_ID}
          onShareUrlAwaited={dummyShareUrlProvider}
          skinId="digital-id-uk"
        />
      )}
      {yotiShareExample === 'modal-scenario' && (
        <ModalYotiShareWithScenario
          sdkId={SDK_ID}
          scenarioId={SCENARIO_ID}
          skinId="yoti"
        />
      )}
    </>
  )
}

export default App
