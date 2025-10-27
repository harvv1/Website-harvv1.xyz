import { useState } from 'react'
import { generate } from '../verse-generator/src/generate.ts';
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const [message, setMessage] = useState<string>("");
  const handleClick = () =>{
    setMessage(generate())
  }

  return (
    <>
      <div>
      <header>
        <h1 className="glow">Harvey Aaron</h1>
        <p>balla</p>
      </header>
      <section id="about">
        <h2 className="glow">About Me</h2>
        <p>ima balla</p>
      </section>
      <section id="projects">
        <h2 className="glow">Projects</h2>
        <div className="project">
            <h3 className="glow">balla projex 1</h3>
            <button id="myButton" className="glow" onClick={handleClick}>Click me</button>
            {//<div id="output"></div>
            }
            <p>{message}</p>
        </div>
      </section>
      <footer>
        <p>Contact: harveya456@gmail.com</p>
      </footer>
      </div>
      {/*<div>
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
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
    </>
  )
}

export default App
