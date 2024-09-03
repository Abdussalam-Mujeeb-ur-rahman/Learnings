import { useState } from "react";
import "./style.css"

function App() {
  return <>
  <Counter />
  </>
};

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

 const date = new Date();
 date.setDate(date.getDate() + count);
 
 return (
  <div className="container">
    <div>
      <button onClick={() => setStep(s => s - 1)}>-</button>
      <span>Step: {step}</span>
      <button onClick={() => setStep(s => s + 1)}>+</button>
    </div>

    <div>
      <button onClick={() => setCount(c => c - step)}>-</button>
      <span>Count: {count}</span>
      <button onClick={() => setCount(c => c + step)}>+</button>
    </div>

    <p>
      <span>{count === 0 ? "Today is " : count > 0 ? `${count} ${count > 1 ? "days" : "day"} from today is ` : `${Math.abs(count)} ${count < -1 ? "days" : "day"} ago was `}</span>
      <span><b>{date.toDateString()}</b></span>
    </p>
  </div>
 )
}

export default App;