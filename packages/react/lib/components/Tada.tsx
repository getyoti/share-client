import { createBob } from '@getyoti/share-client-core'
import { useState } from 'react'

import { Button } from './Button'


type Props = {
  what: string
}

export function Tada({ what }: Props) {
  const [bob, setBob] = useState<ReturnType<typeof createBob> | null>(createBob())

  return (
    <div className="card">
      TADA: {what} - has a bob:
      {bob && (
        <>
          <Button
            onClick={() => {
              setBob(null)
            }}>
            ╳ Delete bob
          </Button>
          <pre> {JSON.stringify(bob)}</pre>
        </>
      )}
      {!bob && (
        <Button
          onClick={() => {
            setBob(createBob())
          }}>
          ＋ Add bob
        </Button>
      )}
    </div>
  )
}
