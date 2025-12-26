import {useState, useEffect} from 'react';

export default function Timer() {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() =>{
        let id;

        if (running) {
            id = setInterval(() =>{
                setTime(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(id);
    }, [running]);

    return (

        <>
            <h2>Timer App</h2>
            <h3>{time}s</h3>

            <button onClick = { () => setRunning(true)}>Start</button>
            <button onClick = {() => setRunning(false)}>Stop</button>
            <button onClick ={() => {setTime(0); setRunning(false);}}>Reset</button>
        </>

    )



}