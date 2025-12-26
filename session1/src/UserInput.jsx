import {useState} from 'react';

export default function UserInput({label}) {

const [text, setText] = useState("");


return (

    <>
        <p>{label}</p>

        <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>You typed: {text}</p>
    
    
    </>


)


}