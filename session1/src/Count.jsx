import { useState } from "react";

export default function Count () {

const [count, setCount] = useState(0);


function addNum () {

    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
}

return(

  <>
    <h1>{count}</h1>
    <button onClick ={addNum}>increase count</button>
  
  </>


)


}