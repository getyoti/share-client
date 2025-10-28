import { YWSElement, YWSInline, YWSModal } from './../lib/main'
import { Page } from './components/Page'

import './App.css'

const SDK_ID = '60f98bf7-0da7-4484-aa64-5a753dd502e0'

const dummySessionIdProvider = () => {
  // return Promise.resolve(`some-session-id-${Date.now()}`)
  return Promise.resolve(`session-08350abe-d5d7-4e1d-a574-294ea23b78bb`)
}

// NOTE: only for example purpose, you would likely not want to share these
const sharedProps = {
  onSessionComplete: () => {},
  onSessionIdAwaited: dummySessionIdProvider,
  sdkId: SDK_ID,
}

function HomePage() {
  return (
    <Page title="Home">
      <hr />
      <section>
        <h5>Modal example:</h5>
        <YWSModal
          {...sharedProps}
          name="modal-demo"
        />
      </section>
      <hr />
      <section>
        <h5>Inline example:</h5>
        <YWSInline
          {...sharedProps}
          name="inline-demo"
        />
      </section>
      <hr />
      <section>
        <h5>Custom example:</h5>
        <div style={{ border: 'thin dashed grey' }}>
          <YWSElement
            {...sharedProps}
            skinId="yoti"
            locale="fr"
            alignment="right"
            flow={{ desktop: 'REVEAL_INLINE_QR_CODE', mobile: 'REVEAL_MODAL_APP_BUTTON' }}
            name="custom-demo"
          />
        </div>
      </section>
    </Page>
  )
}

export default HomePage
