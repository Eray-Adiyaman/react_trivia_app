import Navbar from "./components/Navbar";
import Question from "./components/Question";
import { useTriviaContext } from "./hooks/useTriviaContext";

function App() {

  const {questions,StartGame,turn,setTurn,isAlive} = useTriviaContext()
  
  console.log(questions)
  console.log(isAlive)

  return (
    <div className="Main-Container">
      <Navbar turn={turn} />
      {isAlive ? <Question quest={questions} turn={turn} setTurn={setTurn} /> : ""}
      <button onClick={StartGame}>Start</button>
      <button onClick={()=>setTurn(prev => prev+1)}>NEXT</button>
    </div>
  );
}

export default App;
