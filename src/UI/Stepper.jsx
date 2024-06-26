import { useContext } from "react";
import { formContext } from "../Contexts/MultiStepFormContext";
import StepperController from "../Components/StepperController";
import FinalMessage from "../Components/FinalMessage";

function Stepper() {
  const { step, next, isLastStep, isCompleted, setFinalMessage } =
    useContext(formContext);

  function onSubmit(e) {
    e.preventDefault();
    if (isLastStep) {
      setFinalMessage();
    } else {
      next();
    }
  }

  return (
    <div className="absolute rounded p-3 md:pt-4 md:pb-2 md:px-0  w-[95%]  mx-auto  bg-white md:w-[25rem] top-[5.2rem] md:static left-0 right-0">
      {isCompleted ? (
        <FinalMessage />
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col h-full">
          {step}
          <StepperController />
        </form>
      )}
    </div>
  );
}

export default Stepper;
