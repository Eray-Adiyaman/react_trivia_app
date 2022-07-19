import { useTriviaContext } from "../hooks/useTriviaContext";

export default function Initializer() {

  const {StartGame,difficulty,setDifficulty} = useTriviaContext();
  
  // console.log(difficulty)

  const handleChange = (e) => {
    setDifficulty(e.target.value)
  }

  return (
    <div className="Init-Box">
        <h1>initializer</h1>
        <form>
          <label>Choose a difficulty: </label>
          <select name="difficulty" value={difficulty} onChange={(e)=>handleChange(e)} >
              <option value="easy" >easy</option>
              <option value="medium" >medium</option>
              <option value="hard" >hard</option>
          </select>
        </form>
          <button onClick={StartGame}>Start</button>
    </div>
  )

}