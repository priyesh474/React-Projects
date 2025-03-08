import React, {useState} from 'react'

export default function Counter() {

    // Create all Hooks first 
    const [count, setCount] = useState(0)

    // Create all Arrow Function second
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0); 

  return (
    <div>
        <div className="container card-box">
            <div className="text-center ">
                <div className="">
                    <h2>Counter App</h2>
                    <div className="my-4">
                        <h3>{count}</h3>
                        <button className="btn btn-success m-3" onClick={increment}>Increment +</button>
                        <button className="btn btn-primary m-3" onClick={decrement} disabled = {count === 0}>Decrement -</button>
                        <button className="btn btn-secondary m-3" onClick={reset} disabled = {count === 0}>Reset </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
