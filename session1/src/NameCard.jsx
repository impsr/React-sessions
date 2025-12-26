import { useState } from "react";

export default function NameCard ({name}){
    const [isPink , setIsPink] = useState(false);

       function togglePink () {
         if (isPink){
            setIsPink(false);
        }else{
            setIsPink(true)
        }
    }

  return ( 
    <>
    <h3 style={{ color: isPink ? "pink" : "black" }}>{name} </h3>
     <button onClick={togglePink}>Toggle-Pink</button>  
    </>

  )   
  


}