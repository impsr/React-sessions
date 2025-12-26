import { useState } from "react";


export default function Likes ( {title} ) {
const [Likes, setLikes] = useState(0);

function numLikes() {
    setLikes(prev => prev +1);
}


return (

    <>
        <h1> hello, {title} </h1>
        <h4>current Like status: {Likes} </h4>
        <button onClick = {numLikes}>Like it!</button>
    
    </>

)

}



