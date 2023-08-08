import { useState } from 'react'
import './App.css'

function Count() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  return (
    <div>
      <p>
        <button onClick={() => setCount((count) => count + 1)}>
          Add: {count}
        </button>
        {count > 0 && (
          <button onClick={handleDecrement}>
            Subtract:
          </button>
        )}
      </p>

    </div>
  );
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
