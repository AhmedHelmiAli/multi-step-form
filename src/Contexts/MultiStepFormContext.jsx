import { createContext, useState } from "react";
import PersonalInfo from "../Steps/PersonalInfo";
import SelectPlan from "../Steps/SelectPlan";
import AddOns from "../Steps/AddOns";
import Summary from "../Steps/Summary";

const formContext = createContext("formContext");

const steps = [
  <PersonalInfo key="personal-info" />,
  <SelectPlan key="select-plan" />,
  <AddOns key="add-ons" />,
  <Summary key="summary" />,
];

const initialData = {
  name: "",
  email: "",
  phone: "",
  plan: {
    type: "monthly",
    gameMode: "arcade",
  },
  addOns: [],
};

function MultiStepForm({ children }) {
  const [userData, setUserData] = useState(initialData);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const step = steps[currentStepIndex];
  const isLastStep = currentStepIndex === steps.length - 1;
  const isFirstStep = currentStepIndex === 0;
  const [isCompleted, setIsCompleted] = useState(false);

  function next() {
    if (currentStepIndex === steps.length - 1) return;
    setCurrentStepIndex(currentStepIndex + 1);
  }
  function back() {
    setCurrentStepIndex(currentStepIndex - 1);
  }
  function goTo(index) {
    setCurrentStepIndex(index);
  }

  function setFinalMessage() {
    setIsCompleted(true);
    setCurrentStepIndex(currentStepIndex + 1);
  }

  return (
    <formContext.Provider
      value={{
        steps,
        currentStepIndex,
        step,
        isLastStep,
        isFirstStep,
        goTo,
        next,
        back,
        userData,
        setUserData,
        isCompleted,
        setFinalMessage,
      }}
    >
      {children}
    </formContext.Provider>
  );
}

export default MultiStepForm;
export { formContext };
