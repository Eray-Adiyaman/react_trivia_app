import { useTriviaContext } from "../hooks/useTriviaContext";

export default function Initializer() {

  const {StartGame,difficulty,setDifficulty,category,setCategory} = useTriviaContext();
  
  // console.log(difficulty)

  const handleChange = (e) => {
   e.target.name === "difficulty" ? setDifficulty(e.target.value)
   : setCategory(e.target.value)
  }
  return (
    <div className="Init-Box">
        <h1>WELCOME</h1>
        <form>
          <label>Choose a difficulty: </label>
          <select name="difficulty" value={difficulty} onChange={(e)=>handleChange(e)} >
              <option value="easy" >easy</option>
              <option value="medium" >medium</option>
              <option value="hard" >hard</option>
          </select>
          <label>Choose a Category: </label>
          <select name="category" value={category} onChange={(e)=>handleChange(e)} >
              <option value="animals" >animals</option>
              <option value="sports" >sports</option>
              <option value="history" >history</option>
          </select>
        </form>
          <button className="standart-button" onClick={StartGame}><span >Start</span></button>
    </div>
  )

}