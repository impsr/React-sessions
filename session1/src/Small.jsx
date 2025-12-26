import {useState} from 'react';

export default function Small (){

    const [count , setCount] = useState(0);
    const [text, setText] = useState ("");


    function increase () {
        setCount(prev => prev+1);
    }

    function decrease () {
        setCount( prev => ( prev > 0 ? prev -1 : 0));
    }




    return (

        <>
           <p>React practice </p> 

           <p>Counter: {count}</p>
            <button onClick = {increase}>+1</button>
            <button onClick = {decrease}>-1</button>
            <button onClick = {() => setCount(0)}>0</button>

           <p>Input</p>

           <input 
             value = {text}
             onChange = {(e) => setText(e.target.value)}
             placeholder = "write something"
            
           />  

           <p>You typed: {text}</p>
        
        
        
        </>



    );
}