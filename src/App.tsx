import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <header>
        <h1>ehnding</h1>
      </header>

      <main>
        {/* Tracker.gg embed */}
        <div className="tracker-container">
          <h2>Marvel Rivals Stats</h2>
          <iframe
            src="https://tracker.gg/marvel-rivals/profile/ign/zehn/overview"
            width="100%"
            height="600"
            frameBorder="0"
            title="Tracker.gg Profile"
          />
        </div>

        {/* Keep the counter as a test component */}
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </main>

      <footer>
        <p>Created by Ethan Nguyen</p>
      </footer>
    </div>
  )
}

export default App