import {useState, useEffect} from 'react';

export default function FocusTimer({initialTask }) {

    const [task , setTask] = useState(initialTask);
    const [time , setTime] = useState(0);
    const [running , setRunning] = useState(false);

    useEffect(() =>{
        let id;

        if(running) {
            id = setInterval(() =>{
                setTime(prev => prev+1);
            },1000);
        }

        return () => clearInterval(id);
    }, [running]);


    const status = running ? "Running 🟢" : "Paused 🔴";

    function resetSession() {
        setRunning(false);
        setTime(0);
        setTask("");
    }

    return (

        <>
            <label>Task Name: </label>
            <input 
                value = {task}
                onChange={(e) => setTask(e.target.value)}
            />

            <h2>Session Time: {time} sec</h2>

            <button onClick ={() => setRunning(true)}>Start</button>
            <button onClick = {() => setRunning(false)}>Stop</button>
            <button onClick = {resetSession}>Reset</button>

            <hr />

            <h3>Status</h3>
            <p>Task: {task}</p>
            <p> Time Spent: {time}</p>
            <p>Status: {status}</p>
        
        </>

    );

}