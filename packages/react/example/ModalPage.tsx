import { useState } from 'react'

import { YWSModal } from './../lib/main'
import { Button } from './components/Button'
import { Page } from './components/Page'

const SDK_ID = '60f98bf7-0da7-4484-aa64-5a753dd502e0'

const dummySessionIdProvider = () => {
  // return Promise.resolve(`some-session-id-${Date.now()}`)
  return Promise.resolve(`session-46cc7f55-ed32-45d0-b884-2297fd085fba`)
}

// NOTE: only for example purpose, you would likely not want to share these
const sharedProps = {
  onSessionComplete: () => {},
  onSessionIdAwaited: dummySessionIdProvider,
  sdkId: SDK_ID,
}

function ModalPage() {
  const [controlledModalOpened, setControlledModalOpened] = useState<boolean>(false)
  const [controlledModalHandle, setControlledModalHandle] = useState<{
    ready: boolean
    revealHandle?: () => void
  }>({ ready: false })

  return (
    <Page title="Modal">
      <hr />
      <section>
        <p>Default usage - comes with a reveal button</p>
        <YWSModal
          {...sharedProps}
          name="default-demo"
        />
      </section>
      <hr />
      <section>
        <p>
          Controlled usage - passing the props{' '}
          <code style={{ background: 'lightyellow', fontSize: 'large' }}>opened</code>.
          <br />
          <small>
            (currently, modal is opened: <em>{controlledModalOpened ? 'true' : 'false'}</em>)
          </small>
        </p>
        <Button
          disabled={controlledModalOpened}
          onClick={() => {
            setControlledModalOpened((prevState) => !prevState)
          }}>
          Reveal
        </Button>
        <YWSModal
          {...sharedProps}
          mode="controlled"
          opened={controlledModalOpened}
          onOpened={() => {}}
          onClosed={() => {
            setControlledModalOpened(false)
          }}
          name="controlled-demo"
        />
      </section>
      <hr />
      <section>
        <p>
          Controlled usage - with handle received via the props{' '}
          <code style={{ background: 'lightyellow', fontSize: 'large' }}>onRevealReady</code>.
          <br />
          <small>
            (currently, modal can be revealed:{' '}
            <em>{controlledModalHandle.ready ? 'true' : 'false'}</em>)
          </small>
        </p>
        <Button
          disabled={!controlledModalHandle.ready}
          onClick={() => {
            const { ready, revealHandle } = controlledModalHandle
            if (ready && revealHandle) revealHandle()
          }}>
          Reveal
        </Button>

        <YWSModal
          {...sharedProps}
          mode="controlled-with-handle"
          onRevealReady={({ ready, revealHandle }) => {
            setControlledModalHandle({ ready, revealHandle })
          }}
          name="controlled-with-handle-demo"
        />
      </section>
    </Page>
  )
}

export default ModalPage
