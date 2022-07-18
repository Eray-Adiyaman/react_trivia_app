import { createContext, useState } from "react";

export const TriviaContext = createContext();


export const TriviaContextProvider = ( { children } ) => {

    const [questions,setQuestions] = useState([]);
    const [turn,setTurn] =useState(0);
    const [isAlive,setAlive] = useState(false)
    const StartGame = async () => {
        const respose = await fetch("https://opentdb.com/api.php?amount=10&type=multiple")
        const json = await respose.json()
        if(respose.ok){
            setQuestions(json)
            setAlive(true)
        }
        console.log("started game")
    }

    return(
        <TriviaContext.Provider value={{questions,StartGame,turn,setTurn,isAlive}}>
            {children}
        </TriviaContext.Provider>

    )

}