import Card from "./components/Card";
function App() {
  let obj={
    name:"aditya",
    age:21
  }

  return(
     <>
       <Card username={obj}/>
       <Card username={obj}/>
     </>
  );
}

export default App;
