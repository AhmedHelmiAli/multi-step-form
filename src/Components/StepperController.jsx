import { useContext, useState } from "react";
import { formContext } from "../Contexts/MultiStepFormContext";

function StepperController() {
  const { isLastStep, isFirstStep, back } = useContext(formContext);

  return (
    <div className="flex justify-between mt-4 md:mt-auto">
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
        className={`text-white w-24 ml-auto capitalize rounded p-1 text-center ${
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
