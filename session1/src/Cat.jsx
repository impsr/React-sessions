import {useState} from 'react';

export default function Cat({myColor}){

    const [color , setColor] = useState(myColor);

    function toggleColor(){
        setColor(prev => ( prev === myColor ? "yellow" : myColor));
    }

    return (

        <>
            <h2 style = {{color: color}}>CATTU</h2>
            <button onClick = {toggleColor}>toggle</button>
        
        
        
        
        </>



    );
}