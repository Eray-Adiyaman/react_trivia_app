import { createContext, useState } from "react";

export const TriviaContext = createContext();


export const TriviaContextProvider = ( { children } ) => {

    const [questions,setQuestions] = useState([]);
    const [difficulty,setDifficulty] = useState("easy")
    const [category,setCategory] = useState("animals")
    const [turn,setTurn] =useState(0);
    const [isAlive,setAlive] = useState(false)
    const [counter,setCounter] = useState(0)
    
    const categorySelect = (category) => {
        
        switch (category) {
            case "animals":
                return 27
            case "sports":
                    return 21
            default:
               return 23;
        }

    }

    const StartGame = async () => {
        const respose = await fetch(`https://opentdb.com/api.php?amount=10&category=${categorySelect(category)}&difficulty=${difficulty}&type=multiple`)
        const json = await respose.json()
        if(respose.ok){
            setQuestions(json)
            setAlive(true)
            setTurn(0)
            setCounter(0)
        }
       // console.log("started game")
    }

    const EndGame = (timeout) => {
        setAlive(false);
        setQuestions([]);
        setTimeout(() => {
            setTurn(0);
            setCounter(0);
        }, timeout ? timeout : 10000);
    }

    

    return(
        <TriviaContext.Provider value={{questions,StartGame,turn,setTurn,isAlive,EndGame,difficulty,setDifficulty,counter,setCounter,category,setCategory}}>
            {children}
        </TriviaContext.Provider>

    )

}