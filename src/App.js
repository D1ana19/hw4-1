import { useState } from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";


function App() {
  const [count, setCount] = useState(0);
  
  const countIncrement = () => {
    if(count < 15)   setCount(count + 5)
  } 

  const decrement = () => {
   if(count > 0)  setCount(count - 5)
  }

  return (
    <div className="App">
      <h2>{count}</h2>

      <Decrement decrement={decrement}/>
      <Increment increment={countIncrement}/>
    </div>
  );
}

export default App;