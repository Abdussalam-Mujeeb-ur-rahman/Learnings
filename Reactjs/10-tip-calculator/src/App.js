import { useState } from "react"
import "./style.css"

export function App() {
    return (
        <TipCalculator />
    )
}

function TipCalculator() {
    const [bill, setBill] = useState(Number);
    const [percentage1, setPercentage1] = useState(0);
    const [percentage2, setPercentage2] = useState(0);

    const tip = bill * ((Number(percentage1) + Number(percentage2)) / 2 / 100);

    function handleReset() {
        setBill(0);
        setPercentage1(0);
        setPercentage2(0);
    }

    return (
        <div>
            <BillInput bill={bill} onSetBill={setBill} />
            <SelectPercentage percentage={percentage1} onSetPercentage={setPercentage1}> How did you like the service? </SelectPercentage>
            <SelectPercentage percentage={percentage2} onSetPercentage={setPercentage2}>How did your friend like the service?</SelectPercentage>
            <Output bill={bill} tip={tip}/>
            <Reset onReset={handleReset} />
        </div>
    )
}

function BillInput({ bill, onSetBill }) {
    return (
        <div>
            <label>How much was the bill?</label>
            <input type="number" placeholder="Bill value" value={bill} onChange={e => onSetBill(e.target.value)} />
        </div>
    )
}

function SelectPercentage({ children, percentage, onSetPercentage }) {
    return (
        <div>
            {children}
            <select value={percentage} onChange={e => onSetPercentage(e.target.value)}>
                <option value={0}>Dissatisfied (0%)</option>
                <option value={5}>It was okay (5%)</option>
                <option value={10}>It was good (10%)</option>
                <option value={20}>Absolutely amazing! (20%)</option>
            </select>
        </div>
    )
}

function Output({ bill, tip }) {
    return (
        <h3>You pay Bill: ${bill} + Tip: ${tip} = ${parseFloat(bill) + parseFloat(tip)}</h3>
    )
}

function Reset({ onReset }) {
    return <button onClick={onReset} >Reset</button>
}