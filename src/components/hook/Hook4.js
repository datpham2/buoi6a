import { useState } from "react"
import React from 'react'

export default function Hook3() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [res, setRes] = useState();
  return (
    <div>
        <input placeholder="a" onChange={(e) => setA(e.target.value * 1)} type="number" value={a}/>
        <input placeholder="b" onChange={(e) => setB(e.target.value * 1)} type="number" value={b}/>
        <button onClick={(e) => setRes(a + b)}>+</button>
        <button onClick={(e) => setRes(a - b)}>-</button>
        <button onClick={(e) => setRes(a * b)}>*</button>
        <button onClick={(e) => setRes(a / b)}>/</button>
        <p>Result: {res}</p>
    </div>
  )
}
