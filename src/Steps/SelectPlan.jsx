import { useContext } from "react";
import { BiJoystick } from "react-icons/bi";
import { BiJoystickAlt } from "react-icons/bi";
import { PiJoystickLight } from "react-icons/pi";
import { formContext } from "../Contexts/MultiStepFormContext";
import TogglePlan from "../Components/TogglePlan";

function SelectPlan() {
  const { userData, setUserData } = useContext(formContext);
  const { type, gameMode } = userData.plan;

  function handleChange(e) {
    setUserData((prevData) => ({
      ...prevData,
      plan: {
        ...prevData.plan,
        gameMode: e.target.value,
      },
    }));
  }

  return (
    <>
      <h2 className="mb-2 text-2xl font-bold capitalize text-marineBlue">
        select your plan
      </h2>
      <p className="mb-6 text-coolGray">
        You have the option of monthly or yearly billing
      </p>
      <div className="flex flex-col gap-3 mb-4 md:flex-row">
        <label
          htmlFor="arcade"
          className="md:w-36 flex gap-4 md:block p-2  border rounded border-coolGray has-[:checked]:border-indigo-800 has-[:checked]:border-[0.1rem] cursor-pointer"
        >
          <input
            className="hidden"
            type="radio"
            name="plan-selection"
            value="arcade"
            id="arcade"
            checked={gameMode === "arcade"}
            onChange={handleChange}
          />
          <span className="flex items-center justify-center w-8 h-8 text-lg text-white bg-orange-400 rounded-full md:mb-8">
            <PiJoystickLight />
          </span>
          <div>
            <h3 className="font-bold capitalize text-marineBlue">arcade</h3>
            <p className="text-coolGray">{`$${
              type === "monthly" ? "9/mo" : "90/yr"
            }`}</p>
            <p
              className={`font-sm h-0 overflow-hidden transition-height duration-500 ease-in-out ${
                type === "yearly" ? "h-auto" : ""
              } text-marineBlue`}
            >
              2 months free
            </p>
          </div>
        </label>
        <label
          htmlFor="advanced"
          className=" md:w-36 flex gap-4 md:block  p-2 border rounded border-coolGray has-[:checked]:border-indigo-800 has-[:checked]:border-[0.1rem] cursor-pointer"
        >
          <input
            className="hidden"
            type="radio"
            name="plan-selection"
            value="advanced"
            id="advanced"
            checked={gameMode === "advanced"}
            onChange={handleChange}
          />
          <span className="flex items-center justify-center w-8 h-8 text-lg text-white bg-red-400 rounded-full md:mb-8">
            <BiJoystickAlt />
          </span>
          <div>
            <h3 className="font-bold capitalize text-marineBlue">advanced</h3>
            <p className="text-coolGray">{`$${
              type === "monthly" ? "12/mo" : "120/yr"
            }`}</p>

            <p
              className={`font-sm h-0 overflow-hidden transition-height duration-500 ease-in-out ${
                type === "yearly" ? "h-auto" : ""
              } text-marineBlue`}
            >
              2 months free
            </p>
          </div>
        </label>
        <label
          htmlFor="pro"
          className="md:w-36  flex gap-4 md:block p-2  border rounded border-coolGray has-[:checked]:border-indigo-800 has-[:checked]:border-[0.1rem] cursor-pointer"
        >
          <input
            className="hidden"
            type="radio"
            name="plan-selection"
            value="pro"
            id="pro"
            checked={gameMode === "pro"}
            onChange={handleChange}
          />
          <span className="flex items-center justify-center w-8 h-8 text-lg text-white rounded-full md:mb-8 bg-purplishBlue">
            <BiJoystick />
          </span>
          <div>
            <h3 className="font-bold capitalize text-marineBlue">pro</h3>
            <p className="text-coolGray">{`$${
              type === "monthly" ? "15/mo" : "150/yr"
            }`}</p>
            <p
              className={`font-sm h-0 overflow-hidden transition-height duration-700 ease-in-out delay-150 ${
                type === "yearly" ? "h-auto" : ""
              } text-marineBlue`}
            >
              2 months free
            </p>
          </div>
        </label>
      </div>
      <TogglePlan />
    </>
  );
}

export default SelectPlan;
