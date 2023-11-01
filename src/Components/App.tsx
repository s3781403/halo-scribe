import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
import scribeLogo from '../assets/quill-svgrepo-com.svg'
import '../App.css'
// https://iconscout.com/icon/quill-2969118
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://oliverhale.internal.halopsa.com" target="_blank">
          <img src={scribeLogo} className="logo" alt="Scribe Logo" />
          </a>
      </div>
      <h1>SCRIBE</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        Streamlining Configuration and Requests Interface for Bulk Efficiency
        </p>
      </div>
      <p className="read-the-docs">
      <a href="https://github.com/s3781403/halo-scribe" target="_blank">Open Source</a>
      </p>
    </>
  )
}

export default App
