import {useState} from 'react';

export default function ColorBox({initialColor}){

   const [color, setColor] = useState(initialColor);

   function toggleColor() {
     setColor(prev => (prev === "pink" ? "green" : "pink"));
  }



    return (
 
        <>
            <h2 style={{color: color}}>MEOW MEOW</h2>
            <button onClick ={toggleColor}>toggle color</button>
        
        </>



    )
}