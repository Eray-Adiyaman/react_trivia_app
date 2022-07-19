

export default function Question( { quest,turn,setTurn,EndGame,setCounter } ) {

    const answers = [
      {answer: quest.results[turn].correct_answer, correct: true},
      {answer: quest.results[turn].incorrect_answers[0], correct: false},
      {answer: quest.results[turn].incorrect_answers[1], correct: false},
      {answer: quest.results[turn].incorrect_answers[2], correct: false}
    ]
    
    
    

    const handleClick = (e) => {
      if(turn === 9){
          EndGame();
      }else{
        if(e.target.value === "true"){
          setCounter(prev => prev+1)
        }
        setTurn(prev => prev+1)
      }
  }

   const buttonFunction = (answers) => {

    // takes the [0,1,2,3] array and randomizes its order
    const randomizer = (randoms) => {
      let i = randoms.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = randoms[i];
        randoms[i] = randoms[j];
        randoms[j] = temp;

    }

    return randoms;
  }
  const randoms = randomizer([0,1,2,3])
    console.log(answers)
    console.log(randoms)
 
    // create answer buttons with randomized arrays indexes,this shuffles the answers every question
    return(
      <>
      <button onClick={(e)=>handleClick(e)} value={answers[randoms[0]].correct} >{answers[randoms[0]].answer.replace(/&quot;/g,'"').replace(/&#039;/g,"'")}</button>
      <button onClick={(e)=>handleClick(e)} value={answers[randoms[1]].correct} >{answers[randoms[1]].answer.replace(/&quot;/g,'"').replace(/&#039;/g,"'")}</button>
      <button onClick={(e)=>handleClick(e)} value={answers[randoms[2]].correct} >{answers[randoms[2]].answer.replace(/&quot;/g,'"').replace(/&#039;/g,"'")}</button>
      <button onClick={(e)=>handleClick(e)} value={answers[randoms[3]].correct} >{answers[randoms[3]].answer.replace(/&quot;/g,'"').replace(/&#039;/g,"'")}</button>
      </>
      )
   }

    return (
    <div className="Question">
        <p>{`Question No: ${turn+1}`}</p>
        <p>{quest.results[turn].question.replace(/&quot;/g,'"').replace(/&#039;/g,"'")}</p>
        {buttonFunction(answers)}
    </div>
  )
}
