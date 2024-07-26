import { useState } from "react"
import { useParams } from "react-router-dom"

function Hook2() {
    const {id} = useParams()
    console.log("render hook2")
    
    const [number, setNumber] = useState(10)
    function handle_number_up() {
        setNumber(number + 10) // number = number + 10
    }
    return (
        <div>
            <h1>id là {id}</h1>
            <p>Number: {number}</p>
            <button onClick={handle_number_up}>Number Up</button>
        </div>
    )
}
export default Hook2