import { useContext } from "react";
import { formContext } from "../Contexts/MultiStepFormContext";

function Sidebar() {
  const { goTo, currentStepIndex, userData } = useContext(formContext);
  const { addOns } = userData;
  const isLogged = userData.name && userData.email && userData.phone;

  return (
    <div className="w-full h-[9rem] md:h-full flex gap-3  justify-center md:block md:w-[13.75rem]  md:px-4  md:py-5 text-white uppercase md:bg-no-repeat bg-contain bg-sidebar-mob md:bg-sidebar-desk">
      <div
        onClick={() => goTo(0)}
        className="flex items-center self-start gap-5 mt-6 cursor-pointer md:mt-0 md:mb-8"
      >
        <span
          className={`flex items-center font-medium justify-center w-8 h-8 border rounded-full border-coolGray ${
            currentStepIndex === 0 ? "bg-lightBlue text-marineBlue" : ""
          }`}
        >
          1
        </span>
        <div className="hidden text-sm md:block">
          <p className=" text-lightGray">step 1</p>
          <h3 className="font-bold ">your info</h3>
        </div>
      </div>

      <div
        onClick={() => {
          if (isLogged) {
            goTo(1);
          }
        }}
        className="flex items-center self-start gap-5 mt-6 cursor-pointer md:mt-0 md:mb-8"
      >
        <span
          className={`flex items-center font-medium justify-center w-8 h-8 border rounded-full border-coolGray ${
            currentStepIndex === 1 ? "bg-lightBlue text-marineBlue" : ""
          }`}
        >
          2
        </span>
        <div className="hidden text-sm md:block">
          <p className=" text-lightGray">step 2</p>
          <h3 className="font-bold">select plan</h3>
        </div>
      </div>

      <div
        onClick={() => {
          if (isLogged) {
            goTo(2);
          }
        }}
        className="flex items-center self-start gap-5 mt-6 cursor-pointer md:mb-8"
      >
        <span
          className={`flex items-center font-medium justify-center w-8 h-8 border rounded-full border-coolGray ${
            currentStepIndex === 2 ? "bg-lightBlue text-marineBlue" : ""
          }`}
        >
          3
        </span>
        <div className="hidden text-sm md:block">
          <p className=" text-lightGray">step 3</p>
          <h3 className="font-bold">add-ons</h3>
        </div>
      </div>

      <div
        onClick={() => {
          if (addOns.length) {
            goTo(3);
          }
        }}
        className="flex items-center self-start gap-5 mt-6 cursor-pointer md:mt-0 md:mb-8"
      >
        <span
          className={`flex items-center font-medium justify-center w-8 h-8 border rounded-full border-coolGray ${
            currentStepIndex === 3 ? "bg-lightBlue text-marineBlue" : ""
          }`}
        >
          4
        </span>
        <div className="hidden text-sm md:block">
          <p className=" text-lightGray">step 4</p>
          <h3 className="font-bold">summary</h3>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
