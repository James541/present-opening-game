import { useState, useRef } from "react";
import "./App.css";
import Snowfall from "react-snowfall";

function App() {
  const [presentOne, setPresentOne] = useState(true);
  const [presentTwo, setPresentTwo] = useState(true);
  const [presentOneTop, setPresentOneTop] = useState(true);
  const [presentTwoTop, setPresentTwoTop] = useState(true);
  const [presentThree, setPresentThree] = useState(true);
  const Moo = "/moo.mp3";
  const Cluck = "/cluck.mp3";
  const Ariana = "/ariana.mp3";
  const Moon = "/moon.mp3";
  const Metal = "/metal.mp3";

  const playMoo = () => {
    const audio = new Audio(Moo);
    audio.play();
  };

  const playCluck = () => {
    const audio = new Audio(Cluck);
    audio.play();
  };

  const playAriana = () => {
    const audio = new Audio(Ariana);
    audio.play();
  };

  const playMoon = () => {
    const audio = new Audio(Moon);
    audio.play();
  };

  const playMetal = () => {
    const audio = new Audio(Metal);
    audio.play();
  };

  function presentOneOpen() {
    setPresentOne(false);
    playMoo();
  }

  function presentTwoOpen() {
    setPresentTwo(false);
    playCluck();
  }

  function presentThreeOpen() {
    setPresentThree(false);
    playAriana();
  }

  function presentOneTopOpen() {
    setPresentOneTop(false);
    playMoon();
  }

  function presentTwoTopOpen() {
    setPresentTwoTop(false);
    playMetal();
  }

  return (
    <>
      <div className="greeting">
        <Snowfall
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
        />
        <h1>Merry Christmas Cillian!</h1>
      </div>
      <div className="presentsTop">
        <div
          className={presentOneTop ? "presentOneTop" : "presentOneOpenTop"}
          onClick={presentOneTopOpen}
        ></div>

        <div
          className={presentTwoTop ? "presentTwoTop" : "presentTwoOpenTop"}
          onClick={presentTwoTopOpen}
        ></div>
      </div>

      <div className="presents">
        <div
          className={presentOne ? "presentOne" : "presentOneOpen"}
          onClick={presentOneOpen}
        ></div>

        <div
          className={presentTwo ? "presentTwo" : "presentTwoOpen"}
          onClick={presentTwoOpen}
        ></div>
        <div
          className={presentThree ? "presentThree" : "presentThreeOpen"}
          onClick={presentThreeOpen}
        ></div>
      </div>
    </>
  );
}

export default App;
