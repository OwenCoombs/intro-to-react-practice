
import { useState } from "react"
import { Link } from "react-router-dom"
import NavBar from "./Menus";


function resetScreen(){
  location.reload()
}





// const Title = () => {
//   return (
//     <h1>
//       Hello World!
//     </h1>
//   )
// }

function App() {
  const [count, setCount] = useState(0);
  if (count > 9){
    alert("STOP!")
  }
  
  return (
    <div>
      <NavBar />


      
   
    <div 
      className="h-100 p-5 text-center"
      style={{ color: 'black' }}
      
    >
  <div className="mt-3 p-2">
    <h1>Counter</h1>
      </div>
      
      <button onClick={() => setCount(count + 1)} style={{backgroundColor: count > 9 ? "red" : "white"}}>Counter</button>
      <div className="p-2">{count}</div>
     
      <button onClick={resetScreen} style={{backgroundColor: "white"}}>Reset Game</button>
      
    </div> 
    </div>
  )
}


export default App
