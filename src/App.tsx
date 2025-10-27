import { useState } from "react";
import { generate } from "../verse-generator/src/generate.ts";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0)
  const [message, setMessage] = useState<string>("");
  const handleClick = () => {
    setMessage(generate());
  };

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
            <button id="myButton" className="glow" onClick={handleClick}>
              Verse Generator
            </button>
            {
              //<div id="output"></div>
            }
            <p>{message}</p>
          </div>
        </section>
        <footer>
          <p>Contact: harveya456@gmail.com</p>
        </footer>
      </div>
    </>
  );
}

export default App;
