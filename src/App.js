import Initializer from "./components/Initializer";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import { useTriviaContext } from "./hooks/useTriviaContext";

function App() {

  const {questions,StartGame,turn,setTurn,isAlive,EndGame,counter,setCounter} = useTriviaContext()
  
  // console.log(questions)
  // console.log(isAlive,turn)

  return (
    <div className="Main-Container">
      <Navbar turn={turn} />
      {isAlive
      ? <Question quest={questions} turn={turn} setTurn={setTurn} EndGame={EndGame} counter={counter} setCounter={setCounter}/> 
      : <Initializer />
      }
      <button onClick={StartGame}>Start</button>
      <button onClick={()=>setTurn(prev => prev+1)}>NEXT</button>
      <button onClick={EndGame}>END</button>
    </div>
  );
}

export default App;
