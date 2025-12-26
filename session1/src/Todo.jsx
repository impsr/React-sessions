import {useState} from 'react';

export default function Todo(){

    const [todo , setTodo] = useState("");


    return (

        <>
            <input 
                value = {todo}
                onChange ={(e) => setTodo(e.target.value)}
                placeholder ="write todo"
            />

            <button onClick ={() => console.log(todo)}>Add</button>
        
        
        </>


    );
}