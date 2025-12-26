import {useState} from 'react';

export default function CustomCount ({step}) {

    const [count , setCount] = useState(0);

   function stepCounter () {
    setCount(prev => prev + step);

   }

    return (
      
        <>
            <h2>Current Count : {count}</h2>
            <button onClick ={stepCounter}> increase by {step}</button>
        </>
       


    )

}