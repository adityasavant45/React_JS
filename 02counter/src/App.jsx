import { useState } from "react"
import "./App.css"
const App=()=>{
  let[counter,setCounter]=useState(0)
  const addValue=()=>{
    setCounter(counter+1)
  }
  const removeValue=()=>{
    if(counter!=0)
     setCounter(counter-1)
    else
    alert("Oops! Sorry you are at edge of 0")
  }
  return(
    <>
        <div className="card">
        <h1>Counter:{counter}</h1>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Decrease Value</button>
        </div>
    </>
  )
}
export default App