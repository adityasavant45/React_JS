import { useState } from "react"

const App=()=>{
  const [color,setColor]=useState("olive")

  return (
    <div className="h-screen w-full" style={{backgroundColor:color}}>
      <div className="fixed bottom-10 left-[50%]  transform -translate-x-1/2 ">
        <div className="bg-white flex px-10 py-3 rounded-xl gap-2">
          <button className="text-black px-10 py-3 border border-black rounded-xl shadow-2xl" style={{backgroundColor:"green"}} onClick={()=>{setColor("green")
             localStorage.setItem("bgColor",color);
          }}>Green</button>
          <button className="text-black px-10 py-3 border border-black rounded-xl shadow-2xl" style={{backgroundColor:"yellow"}}  onClick={()=>setColor("yellow")}>Yellow</button>
          <button className="text-black px-10 py-3 border border-black rounded-xl shadow-2xl" style={{backgroundColor:"red"}}   onClick={()=>setColor("red")}>Red</button>
        </div>
      </div>
    </div>
  )
}

export default App