import { useEffect, useState } from "react"
function Github() {
    const [data,setData]=useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/adityasavant45')
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        console.log(data)
        setData(data)
    })
  }, )
  
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex justify-center items-center flex-col">Github Followers:{data.followers}
    <img src={data.avatar_url} alt="Github Profile Picture" width={300}/>
    </div>
  )
}

export default Github