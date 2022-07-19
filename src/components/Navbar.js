import { useTriviaContext } from "../hooks/useTriviaContext";

export default function Navbar( { turn } ) {
  const {isAlive,difficulty,counter} = useTriviaContext()

  return (
    <header>
      <div className="Navbar-Wrapper">
        <h2>Trivia Game</h2>
        <h3>Difficulty: {difficulty}</h3>
        {isAlive && <h3>Correct Answers: {counter}</h3>}
      </div>
    </header>
  );
}
