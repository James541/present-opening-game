import { useState, useRef } from "react";
import "./App.css";
import Snowfall from "react-snowfall";

function App() {
  const [presentOne, setPresentOne] = useState(true);
  const [presentTwo, setPresentTwo] = useState(true);
  const [presentOneTop, setPresentOneTop] = useState(true);
  const [presentTwoTop, setPresentTwoTop] = useState(true);
  const [presentThree, setPresentThree] = useState(true);
  const [presentFour, setPresentFour] = useState(true);
  const [presentFive, setPresentFive] = useState(true);
  const [presentSix, setPresentSix] = useState(true);
  const Moo = "/moo.mp3";
  const Cluck = "/cluck.mp3";
  const Ariana = "/ariana.mp3";
  const Moon = "/moon.mp3";
  const Metal = "/metal.mp3";
  const Monkey = "/monkey.mp3";
  const Elephant = "/elephant.mp3";
  const Banjo = "/banjo.mp3";

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

  const playMonkey = () => {
    const audio = new Audio(Monkey);
    audio.play();
  };

  const playElephant = () => {
    const audio = new Audio(Elephant);
    audio.play();
  };

  const playBanjo = () => {
    const audio = new Audio(Banjo);
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

  function presentFourOpen() {
    setPresentFour(false);
    playMonkey();
  }

  function presentFiveOpen() {
    setPresentFive(false);
    playElephant();
  }

  function presentSixOpen() {
    setPresentSix(false);
    playBanjo();
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
      <div className="presents">
        <div
          className={presentFour ? "presentFour" : "presentFourOpen"}
          onClick={presentFourOpen}
        ></div>

        <div
          className={presentFive ? "presentFive" : "presentFiveOpen"}
          onClick={presentFiveOpen}
        ></div>
        <div
          className={presentSix ? "presentSix" : "presentSixOpen"}
          onClick={presentSixOpen}
        ></div>
      </div>
    </>
  );
}

export default App;
