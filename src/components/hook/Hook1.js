import { useState } from "react"
import { Link } from "react-router-dom"

function Hook1() {
    console.log("render hook1")

    const [count, setCount] = useState(1)
    function handle_count_up() {
        setCount(count + 1) // count = count + 1
    }
    return (
        <div>
            <h1>Tìm hiểu useState - Green Academy</h1>
            <Link to="/product/3">Lấy link id</Link>
            <p>Count: {count}</p>
            <button onClick={handle_count_up}>Count Up</button>
        </div>
    )
}
export default Hook1