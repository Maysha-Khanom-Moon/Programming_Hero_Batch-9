import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0); // initial with 0
    console.log(count);

    function handleAdd() {
        const newCount = count + 1;
        setCount(newCount); // update the state
    }
    function handleReduce() {
        const newCount = count - 1;
        setCount(newCount); // update the state
    }

    return (
        <div style={{border: '2px solid green', paddingBottom:'20px', marginBottom:'20px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    ) 
}