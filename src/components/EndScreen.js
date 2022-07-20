import React from "react";
import { useTriviaContext } from "../hooks/useTriviaContext";

export default function EndScreen() {
  const { counter,StartGame,EndGame } = useTriviaContext();
  const score = counter * 100;
  
  return (
    <div className="End-Screen">
      <div className="Score">
        <p>Correct Answers : {counter}</p>
        <p>Score: {score}</p>
      </div>
      <div className="Play-Again">
        <h1>Play Again ?</h1>
        <button onClick={StartGame}>Yes</button>
        <button onClick={()=>EndGame(1000)} >No</button>
      </div>
    </div>
  );
}
