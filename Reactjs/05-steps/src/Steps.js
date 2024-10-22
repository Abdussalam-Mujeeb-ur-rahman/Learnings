import { useState } from "react";

function Steps() {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const messages = [
    "Learn React 🚀",
    "Apply For Jobs 🛄",
    "Invest Your Income 💰",
  ];

  function prevStep() {
    setStep(step > 0 ? step - 1 : 0);
  }

  function nextStep() {
    setStep(step < 2 ? step + 1 : 2);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 0 ? "active" : ""}>1</div>
            <div className={step === 1 ? "active" : ""}>2</div>
            <div className={step === 2 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step]}
          </StepMessage>

          <div className="buttons">
            <Button
              textColor="#fff"
              bgColor={step > 0 ? "#7950f2" : "grey"}
              onClick={prevStep}
            >
              <span>👈</span> Previous
            </Button>
            <Button
              textColor="#fff"
              bgColor={step < 2 ? "#7950f2" : "grey"}
              onClick={nextStep}
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {

 return <p className="message">
    <h3>Step {step}:</h3>
    {children}
  </p>
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: `${bgColor}`, color: `${textColor}` }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Steps;
