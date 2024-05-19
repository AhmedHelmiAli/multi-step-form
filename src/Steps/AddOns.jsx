import { useContext } from "react";
import { formContext } from "../Contexts/MultiStepFormContext";

function AddOns() {
  const { userData, setUserData } = useContext(formContext);
  const { type: userPlan } = userData.plan;
  const isChosen = userData.addOns.length;

  function handleChange(e) {
    if (e.target.checked) {
      setUserData((prevData) => ({
        ...prevData,
        addOns: prevData.addOns.concat(e.target.value),
      }));
    } else {
      setUserData((prevData) => ({
        ...prevData,
        addOns: prevData.addOns.filter((el) => el !== e.target.value),
      }));
    }
  }

  return (
    <>
      <h2 className="mb-2 text-2xl font-bold capitalize text-marineBlue">
        Pick add-ons
      </h2>
      <p className="mb-6 text-coolGray">
        Add-ons help enhance your gaming experience
      </p>

      <label className="flex items-center p-3 mb-3 border rounded cursor-pointer border-lightGray has-[:checked]:border-indigo-800 has-[:checked]:border-[0.1rem]">
        <input
          className="w-4 h-4 mr-6 cursor-pointer"
          type="checkbox"
          value="online-service"
          required={!isChosen}
          onChange={handleChange}
          checked={userData.addOns.some((el) => el === "online-service")}
        />
        <div className="mr-auto">
          <h3 className="font-medium text-marineBlue">Online service</h3>
          <p className="text-coolGray">Access to multiple games</p>
        </div>
        <span className="text-indigo-500">{`+${
          userPlan === "monthly" ? "1/mo" : "10/yr"
        }`}</span>
      </label>
      <label className="flex items-center p-3 mb-3 border rounded cursor-pointer border-lightGray has-[:checked]:border-indigo-800 has-[:checked]:border-[0.1rem]">
        <input
          className="w-4 h-4 mr-6 cursor-pointer"
          type="checkbox"
          value="larger-storage"
          required={!isChosen}
          onChange={handleChange}
          checked={userData.addOns.some((el) => el === "larger-storage")}
        />
        <div className="mr-auto">
          <h3 className="font-medium text-marineBlue">Larger storage</h3>
          <p className="text-coolGray">Extra 1TB of cloud save</p>
        </div>
        <span className="text-indigo-500 ">{`+${
          userPlan === "monthly" ? "2/mo" : "20/yr"
        }`}</span>
      </label>
      <label className="flex items-center p-3  border rounded cursor-pointer border-lightGray has-[:checked]:border-indigo-800 has-[:checked]:border-[0.1rem]">
        <input
          className="w-4 h-4 mr-6 cursor-pointer"
          type="checkbox"
          value="customizable-profile"
          required={!isChosen}
          onChange={handleChange}
          checked={userData.addOns.some((el) => el === "customizable-profile")}
        />
        <div className="mr-auto">
          <h3 className="font-medium text-marineBlue">Customizable profile</h3>
          <p className="text-coolGray">Custom scene on your profile</p>
        </div>
        <span className="text-indigo-500 ">{`+${
          userPlan === "monthly" ? "2/mo" : "20/yr"
        }`}</span>
      </label>
    </>
  );
}

export default AddOns;
