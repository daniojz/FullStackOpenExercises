import React, { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = (props) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div className="App">
      <section id="feedback">
        <Header text={"give feedback"}></Header>
        <div>
          <Button text={"good"} handleClick={() => setGood(good + 1)}></Button>
          <Button
            text={"neutral"}
            handleClick={() => setNeutral(neutral + 1)}
          ></Button>
          <Button text={"bad"} handleClick={() => setBad(bad + 1)}></Button>
        </div>
      </section>
      <section id="statistics">
        <Header text={"statistics"}></Header>
        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      </section>
    </div>
  );
};

export default App;
