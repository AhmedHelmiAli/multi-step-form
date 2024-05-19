import { useContext, useState } from "react";
import { formContext } from "../Contexts/MultiStepFormContext";

function TogglePlan() {
  const { userData, setUserData } = useContext(formContext);
  const selectedPlan = userData.plan.type;

  const handleChange = () => {
    setUserData((prevData) => ({
      ...prevData,
      plan: {
        ...prevData.plan,
        type: selectedPlan === "monthly" ? "yearly" : "monthly",
      },
    }));
  };

  return (
    <div className="flex items-center justify-center gap-3 px-3 py-1 rounded bg-magnolia">
      <label htmlFor="toggle-count-switch" className="inline-block p-2">
        <span
          className={`inline-block text-md ${
            selectedPlan === "monthly" ? "text-marineBlue" : "text-coolGray"
          } cursor-pointer `}
        >
          Monthly
        </span>
      </label>
      <input
        id="toggle-count-switch"
        name="toggle-count-switch"
        type="checkbox"
        value={selectedPlan}
        onChange={handleChange}
        checked={selectedPlan === "yearly"}
        className="relative w-[3.25rem] h-6  checked:bg-none checked:bg-marineBlue border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-marineBlue focus:ring-marineBlue ring-offset-white focus:outline-none appearance-none   bg-marineBlue 

        before:inline-block before:size-5 before:bg-white before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200  "
      />
      <label htmlFor="toggle-count-switch" className="inline-block p-2">
        <span
          className={`inline-block text-md  ${
            selectedPlan === "yearly" ? "text-marineBlue" : "text-coolGray"
          } cursor-pointer `}
        >
          Yearly
        </span>
      </label>
    </div>
  );
}

export default TogglePlan;
