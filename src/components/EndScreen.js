import React from "react";
import { useTriviaContext } from "../hooks/useTriviaContext";

export default function EndScreen() {
  const { counter,StartGame,EndGame } = useTriviaContext();
  const score = counter * 100;
  
  return (
    <div className="End-Screen">
      <div className="Score">
        <p>Thank you for playing!</p>
        <p>Correct Answers : {counter}</p>
        <p>Score: {score}</p>
      </div>
      <div className="Play-Again">
        <h1>Play Again ?</h1>
        <button className="standart-button" onClick={StartGame}><span>Yes</span></button>
        <button className="standart-button" onClick={()=>EndGame(1000)} ><span>No</span></button>
      </div>
    </div>
  );
}