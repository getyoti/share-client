import { useState } from 'react'

import HomePage from './HomePage'
import ModalPage from './ModalPage'
import ContextPage from './ContextPage'
import { Button } from './components/Button'

import './App.css'

const Pages = ['home', 'modal', 'context'] as const

type Page = (typeof Pages)[number]

const defaultPage: Page = 'context'

function App() {
  const [page, setPage] = useState<Page>(defaultPage)

  return (
    <>
      <nav>
        {Pages.map((page) => (
          <Button
            key={page}
            size="small"
            onClick={() => setPage(page)}>
            {page}
          </Button>
        ))}
      </nav>

      {page === 'home' && <HomePage />}
      {page === 'modal' && <ModalPage />}
      {page === 'context' && <ContextPage />}
    </>
  )
}

export default App
