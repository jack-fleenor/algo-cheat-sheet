import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BigCard from './components/BigCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/icon.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <BigCard title={null} description={null} />
    </div>
  )
}

export default App
