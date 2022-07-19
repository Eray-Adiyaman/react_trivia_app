import { createContext, useState } from "react";

export const TriviaContext = createContext();


export const TriviaContextProvider = ( { children } ) => {

    const [questions,setQuestions] = useState([]);
    const [difficulty,setDifficulty] = useState("easy")
    const [turn,setTurn] =useState(0);
    const [isAlive,setAlive] = useState(false)
    const [counter,setCounter] = useState(0)
    
    const StartGame = async () => {
        const respose = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`)
        const json = await respose.json()
        if(respose.ok){
            setQuestions(json)
            setAlive(true)
        }
        console.log("started game")
    }

    const EndGame = () => {
        setAlive(false);
        setQuestions([]);
        setTurn(0);
        setCounter(0);
    }

    

    return(
        <TriviaContext.Provider value={{questions,StartGame,turn,setTurn,isAlive,EndGame,difficulty,setDifficulty,counter,setCounter}}>
            {children}
        </TriviaContext.Provider>

    )

}