import { YWSCInline, YWSCModal, YWSProvider } from './../lib/main'
import { Page } from './components/Page'

const SDK_ID = '50f98bf7-0da7-4484-aa64-5a753dd502e0'

const dummySessionIdProvider = () => {
  return Promise.resolve(`some-session-id-${Date.now()}`)
}

// NOTE: only for example purpose, you would likely not want to share these
const sharedProps = {
  onSessionComplete: () => {},
  onSessionIdAwaited: dummySessionIdProvider,
}

function ContextPage() {
  return (
    <Page title="Context Based">
      <YWSProvider
        sdkId={SDK_ID}
        locale="fr"
        skinId="yoti">
        <hr />
        <section>
          Some inline wired with context
          <YWSCInline
            {...sharedProps}
            name="context-inline-demo"
          />
        </section>
        <hr />
        <section>
          Some modal wired with context
          <YWSCModal
            {...sharedProps}
            name="context-modal-demo"
          />
        </section>
      </YWSProvider>
    </Page>
  )
}

export default ContextPage
