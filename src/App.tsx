import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cards from './components/Cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 const [ vars,setVars] =useState<number>(88)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}{vars}
        </button>
        <p>
      
        </p>
      </div>
      <p className="read-the-docs">
        Click fff sdffff
      </p>
      <div>

        <Cards/>
      </div>
    </>
  )
}

export default App
