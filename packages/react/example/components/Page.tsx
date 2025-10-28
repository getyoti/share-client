import type { PropsWithChildren } from 'react'

import './Page.css'

export function Page({ title, children }: PropsWithChildren & { title?: string }) {
  return (
    <main className="page">
      {title && <h2>{title}</h2>}
      {children}
    </main>
  )
}
