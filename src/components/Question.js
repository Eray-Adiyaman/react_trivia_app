

export default function Question( { quest,turn,setTurn } ) {
    console.log(quest)
  
    const handleClick = () => {
        setTurn(prev => prev+1)
    }
  
    return (
    <div className="Question">
        <p>{quest.results[turn].question}</p>
        <button onClick={handleClick} >{quest.results[turn].correct_answer}</button>
        <button onClick={handleClick} >{quest.results[turn].incorrect_answers[0]}</button>
        <button onClick={handleClick} >{quest.results[turn].incorrect_answers[1]}</button>
        <button onClick={handleClick} >{quest.results[turn].incorrect_answers[2]}</button>
    </div>
  )
}
