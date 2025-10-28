import { useState } from "react";
import { generate } from "../verse-generator/src/generate.ts";
import "./App.css";

function App() {
  const [message, setMessage] = useState<string>("");
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setMessage(generate());
  };

  const toggleOnClick = () => {
    setIsShow(!isShow);
  };

  const verseGenerator = () => {
    return (
      <>
        <header>
          <h1 className="glow">Verse Generator</h1>
        </header>
        <div className="project">
          <p>{message}</p>
        </div>
        <br></br>
        <div>
          <button id="myButton" className="glow" onClick={toggleOnClick}>
            Home
          </button>
          &nbsp; &nbsp;
          <button id="myButton" className="glow" onClick={handleClick}>
            Generate
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      {!isShow && (
        <div>
          <header>
            <h1 className="glow">Harvey Aaron</h1>
          </header>
          <section id="about">
            <h2 className="glow">About Me</h2>
            <p>
              Final year Bsc Computer Science student at Queen's University
              Belfast.
            </p>
          </section>
          <br></br>
          <h2 className="glow">Projects</h2>
          <button
            id="myButton"
            className="glow"
            onClick={() => {
              toggleOnClick();
              handleClick();
            }}
          >
            Verse Generator
          </button>
        </div>
      )}
      <div>
        <section id="projects">{isShow && verseGenerator()}</section>
        <footer>
          <p>Contact: harveya456@gmail.com</p>
        </footer>
      </div>
    </>
  );
}

export default App;
