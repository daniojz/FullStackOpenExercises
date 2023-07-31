import React, { useState } from "react";
import Button from "./Components/Button";

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState(
    new Array(Object.keys(anecdotes).length).fill(0)
  );
  const mostVotedIndex = votes.findIndex((v) => v === Math.max(...votes));

  const setRandomNumber = () => setSelected(Math.floor(Math.random() * 6));
  const voteNote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVote(newVotes);
  };

  return (
    <div className="App">
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]}</p>
        <Button text={"next anecdote"} handleClick={setRandomNumber}></Button>
        <Button text={"vote"} handleClick={voteNote}></Button>
      </div>
      <br></br>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[mostVotedIndex]}</p>
        <p>has {votes[mostVotedIndex]}</p>
      </div>
    </div>
  );
};

export default App;
