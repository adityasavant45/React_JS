
const App=()=>{
  return(
    <>
      <nav className="w-full h-[30px] p-10 bg-red-900 flex justify-between items-center">
         <h1 className="text-2xl">To Desktop</h1>
         <div className="text-[18px] flex justify-center items-center gap-2">
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Contact Us</h3>
            <button className="py-1 px-5 bg-green-900 text-white rounded hover:bg-blue-600">Add To Cart</button>
         </div>
      </nav>
    </>
  )
}

export default App