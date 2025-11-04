import { useState } from "react";
import { generate } from "../verse-generator/src/generate.ts";
import { getAllPrayers } from "../DigitalRosary/src/digital-rosary.ts";
import "./App.css";

function App() {
  const [message, setMessage] = useState<string>("");
  const [isShow, setIsShow] = useState<string>("");

  const handleClick = () => {
    setMessage(generate());
  };

  const toggleOnClick = (page: string) => {
    setIsShow(page);
  };

  const verseGenerator = () => {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <header>
          <h1 className="glow">Verse Generator</h1>
        </header>
        <div className="project">
          <p>{message}</p>
        </div>
        <br></br>
        <div>
          <button
            id="myButton"
            className="glow"
            onClick={() => toggleOnClick("")}
          >
            Home
          </button>
          &nbsp; &nbsp;
          <button id="myButton" className="glow" onClick={() => handleClick()}>
            Generate
          </button>
        </div>
      </>
    );
  };

  const [index, setIndex] = useState(0);
  const digitalRosary = () => {
    const prayers = getAllPrayers();

    const nextPrayer = () => {
      if (index < prayers.length - 1) setIndex(index + 1);
    };

    const prevPrayer = () => {
      if (index > 0) setIndex(index - 1);
    };

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <header>
          <h1 className="glow">Digital Rosary</h1>
        </header>

        <div className="project">
          <p>{prayers[index]}</p>
        </div>

        <div className="glow">
          <button onClick={prevPrayer} disabled={index === 0} className="glow">
            ← Back
          </button>
          &nbsp; &nbsp;
          <button
            onClick={nextPrayer}
            disabled={index === prayers.length - 1}
            className="glow"
          >
            Next →
          </button>
          <br></br>
          <br></br>
          <button
            id="myButton"
            className="glow"
            onClick={() => toggleOnClick("")}
          >
            Home
          </button>
        </div>

        <p className="glow">
          {index + 1} / {prayers.length}
        </p>
      </>
    );
  };

  const home = () => {
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
            toggleOnClick("verse");
            handleClick();
          }}
        >
          Verse Generator
        </button>
        <br></br>
        <br></br>
        <button
          id="myButton"
          className="glow"
          onClick={() => {
            toggleOnClick("rosary");
          }}
        >
          Digital Rosary
        </button>
      </div>
    );
  };

  const switchPage = () => {
    if (isShow === "verse") {
      return verseGenerator();
    } else if (isShow === "rosary") {
      return digitalRosary();
    } else {
      return home();
    }
  };

  return (
    <>
      <div>
        <section id="projects">{switchPage()}</section>
        <footer>
          <p>Contact: harveya456@gmail.com</p>
        </footer>
      </div>
    </>
  );
}

export default App;
