import { useState } from "react";
import "./style.css"

function App() {
  return <>
  <Counter />
  </>
};

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

 const date = new Date();
 date.setDate(date.getDate() + count);

 function handleReset() {
   setCount(0);
   setStep(1);
 }
 
 return (
  <div className="container">
    <div>
      <input type="range" min={1} max={10} value={step} onChange={(e) => setStep(Number(e.target.value))} /> <span>step: {step}</span>
    </div>

    <div>
      <button onClick={() => setCount(c => c - step)}>-</button>
      <input type="number" value={count} onChange={e => setCount(Number(e.target.value))} />
      <button onClick={() => setCount(c => c + step)}>+</button>
    </div>

    <p>
      <span>{count === 0 ? "Today is " : count > 0 ? `${count} ${count > 1 ? "days" : "day"} from today is ` : `${Math.abs(count)} ${count < -1 ? "days" : "day"} ago was `}</span>
      <span><b>{date.toDateString()}</b></span>
    </p>

    {
      count !== 0 || step !== 1 ? <div>
      <button onClick={handleReset}>Reset</button>
    </div> : ""
    }
    
  </div>
 )
}

export default App;