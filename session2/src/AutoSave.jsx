import {useState, useEffect} from 'react';

export default function AutoSave() {
    const [text, setText] = useState("");

    useEffect(()=>{
        console.log("Auto-saving:", text);
    } ,[text]);


    return (
        <>
        
          <h2>Auto Save Form</h2>

          <input 
            value ={text}
            onChange = {(e) => setText(e.target.value)}
            placeholder ="Type Something...."
        
         />

         <p>Live Text: {text}</p>

        </>
    );


}