import { useContext, useState } from "react";
import { formContext } from "../Contexts/MultiStepFormContext";

function StepperController() {
  const { isLastStep, isFirstStep, back } = useContext(formContext);

  return (
    <div className="justify-between md:flex md:static  md:mt-auto fixed bottom-[30%] ">
      {!isFirstStep && (
        <button
          type="button"
          className="capitalize text-coolGray"
          onClick={back}
        >
          go back
        </button>
      )}
      <button
        type="submit"
        className={`text-white w-24 md:static fixed right-2 md:ml-auto capitalize rounded p-1 text-center ${
          isLastStep
            ? "bg-purplishBlue  hover:bg-indigo-400"
            : "bg-marineBlue  hover:bg-indigo-900"
        }`}
      >
        {isLastStep ? "confirm" : "next step"}
      </button>
    </div>
  );
}

export default StepperController;
