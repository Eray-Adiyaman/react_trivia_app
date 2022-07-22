import EndScreen from "./components/EndScreen";
import Initializer from "./components/Initializer";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import { useTriviaContext } from "./hooks/useTriviaContext";
import {ToastContainer,Zoom} from "react-toastify"
function App() {

  const {questions,turn,setTurn,isAlive,EndGame,counter,setCounter} = useTriviaContext()
  
  // console.log(questions)
  // console.log(isAlive,turn)

  return (
    <div className="Main-Container">
      <Navbar turn={turn} />
      {isAlive
      ? <Question quest={questions} turn={turn} setTurn={setTurn} EndGame={EndGame} counter={counter} setCounter={setCounter}/> /*if isAlive true start the game,Load Questions Component*/ 
      : turn === 9 ? <EndScreen /> /* after reaching 10 questions load endScreen with scoreboard and play Again fields,if no action is taken by the user replace it with Init component after 10 seconds*/
      : <Initializer /> /* Game init component with Difficulty and Category selection */
      }
      <ToastContainer
          className={"toastify"}
          transition={Zoom}
          position="top-center"
          autoClose={1}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable={false}
          pauseOnHover={false}
          />
    </div>
  );
}

export default App;
