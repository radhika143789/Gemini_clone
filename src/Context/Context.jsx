import { createContext } from 'react';
import { useState } from 'react';
import run from '../config/gemini';

export const Context = createContext();
const ContextProvider = (props) => {
    const[input,setInput]=useState("");
    const[recentPromt,setRecentPrompt]=useState("");
    const[prevPromts,setPrevPrompts]=useState([]);
    const[showResult,setShowResult]=useState(false);
    const[loading,setLoading]=useState(false); 
    const[resultData,setResultData]=useState("");
    const onSent = async(prompt) =>{
      setResultData("")
      setLoading(true)
      setshowResult(true)
      setRecentPrompt(input)
      const response = await  run(input)
      setResultData(response)
      setLoading(false)
      setInput("")

    }
    
    const ContextValue={
      prevPromts,
      setPrevPrompts,
      onSent,
      setRecentPrompt,
      recentPromt,
      showResult,
      loading,
      resultData,
      input,
      setInput

    }
    return(
        <Context.Provider value ={ContextValue}>
            {props.children}
            </Context.Provider>
    )
    
}
export { ContextProvider };