import { useCallback, useState } from 'react'
import { Tada, Button } from './../lib/main.ts'

import './App.css'

function App() {
  const [tadas, setTadas] = useState<string[]>([])

  const addTadas = useCallback((tadaWhat: string) => {
    setTadas((prevState) => [...prevState, tadaWhat])
  }, [])

  return (
    <>
      <h1>Welcome!</h1>

      <Button onClick={() => addTadas('there was ' + tadas.length + ' when I got added')}>
        Add tada
      </Button>

      {tadas &&
        tadas.map((t, index) => (
          <Tada
            key={`${t}-${index}`}
            what={t}
          />
        ))}
    </>
  )
}

export default App
