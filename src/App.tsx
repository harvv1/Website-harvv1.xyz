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
      <div className="project">
        <h3 className="glow"></h3>
        <button id="myButton" className="glow" onClick={handleClick}>
          Generate
        </button>
        <p>{message}</p>
      </div>
    );
  };

  return (
    <>
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
        <section id="projects">
          <h2 className="glow">Projects</h2>
          <button id="myButton" className="glow" onClick={toggleOnClick}>
            Verse Generator
          </button>
          {isShow && verseGenerator()}
        </section>
        <footer>
          <p>Contact: harveya456@gmail.com</p>
        </footer>
      </div>
    </>
  );
}

export default App;
