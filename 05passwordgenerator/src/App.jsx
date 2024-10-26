import { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const[length,setLength]=useState(8)
  const[password,setPassword]=useState("")
  const[numberAllowed,setnumberAllowed]=useState(false)
  const[charAllowed,setcharAllowed]=useState(false)


  const passwordRef=useRef(null)
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="1234567890"
    if(charAllowed) str+="!@#%$^&_~"
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  const copyToClipboard=useCallback(()=>{
       passwordRef.current?.select();
       passwordRef.current?.setSelectionRange(0,999);
       window.navigator.clipboard.writeText(password)
  },[password]
)


  return (
    <div className="max-w-md mx-auto rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden  mb-4">
        <input
          type="text"
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          value={password}
          readOnly
          ref={passwordRef}
        />
        <button className="bg-blue-700 text-white outline-none px-3 py-0.5 shrink-0" onClick={copyToClipboard}>
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" min={8} max={100}  className="cursor-pointer" value={length} onChange={(e)=>{
               setLength(e.target.value)
          }}/>
          <label htmlFor="">Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>{
            setnumberAllowed((prev)=>!prev)
          }}/>
          <label htmlFor="">numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={charAllowed}  onChange={()=>{
            setcharAllowed((prev)=>!prev)
          }}/>
          <label htmlFor="">characters</label>
        </div>
      </div>
    </div>
  );
};
export default App;
