import { useState } from "react";
import "./index.css";


function App() {
    const [step, setStep] = useState(0);
    const [isOpen, setIsOpen] = useState(true);
    const messages = [
        "Learn React 🎓",
        "Apply For Jobs 🖥️",
        "Invest Your Income 🤑"
    ];

    function prevStep() {
        setStep((step > 0) ? step - 1 : 0 )
    }

    function nextStep() {
        setStep((step < 2) ? step + 1 : 2)
    }

  return (
    <>
    {isOpen && (
      <div className="steps">
        <div className="numbers">
            <div className={step === 0 ? "active": ""}>1</div>
            <div className={step === 1 ? "active": ""}>2</div>
            <div className={step === 2 ? "active": ""}>3</div>
        </div>

        <p className="message">
            {
                messages[step]
            }
        </p>

        <div className="buttons">
            <button style={{ backgroundColor: `${step > 0 ? '#7950f2' : 'grey'}`, color: '#fff' }} onClick={prevStep}>Prev</button>
            <button style={{ backgroundColor: `${step < 2 ? '#7950f2' : 'grey'}`, color: '#fff' }} onClick={nextStep}>Next</button>
        </div>
      </div>
    )}
    </>
  );
}

export default App;