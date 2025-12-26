import {useState} from "react"

export default function Product({name , price}){

const [qty, setQty] = useState(0);

function increase () {
    setQty( prev => prev+1);
}

function decrease () {
    setQty (prev => ( prev > 0 ?  prev -1 : 0));
}


return (

    <>
        <h2 style={{ color: "blue" }}>Product : {name}</h2>
        <h2 style ={{color: "green"}}>Price: {price}</h2>
        <h2 style ={{color: "pink"}}>Count : {qty}</h2>

        <button style={{ padding: "5px 10px" , margin : "10px"}} onClick = {increase}>+</button>
        <button style={{ padding: "5px 10px" }} onClick ={decrease}>-</button>
    </>  

)

}