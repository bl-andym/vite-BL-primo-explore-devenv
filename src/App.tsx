import { useState } from 'react'
import './App.css'

function Count() {
  const [count, setCount] = useState(0);
  return (
    <p>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </p>
  )
}

function App() {
  return (
    <div className="card">
      <h1>Vite + React</h1>
      <Count />
      <Count />
    </div>
  )
}

export default App
