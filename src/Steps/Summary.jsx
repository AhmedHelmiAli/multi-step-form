import { useContext } from "react";
import { formContext } from "../Contexts/MultiStepFormContext";

const prices = {
  monthly: {
    gameMode: {
      arcade: 9,
      advanced: 12,
      pro: 15,
    },
    addOns: {
      "online-service": 1,
      "customizable-profile": 2,
      "larger-storage": 2,
    },
  },
  yearly: {
    gameMode: {
      arcade: 90,
      advanced: 120,
      pro: 150,
    },
    addOns: {
      "online-service": 10,
      "customizable-profile": 20,
      "larger-storage": 20,
    },
  },
};

function Summary() {
  const { userData, goTo } = useContext(formContext);
  const { plan, addOns } = userData;
  const { type: userPlan, gameMode: userGameMode } = plan;

  const userModePrice = prices[userPlan].gameMode[userGameMode];
  let userAddOnsPrice;
  if (addOns.length) {
    userAddOnsPrice = addOns
      .map((addOn) => prices[userPlan].addOns[addOn])
      .reduce((acc, curr) => acc + curr);
  }
  const total = userModePrice + userAddOnsPrice || 0;

  return (
    <>
      <h2 className="mb-2 text-2xl font-bold capitalize text-marineBlue">
        finishing up
      </h2>
      <p className="mb-6 text-coolGray">
        Double-check everything looks OK before confirming
      </p>
      <div className="px-4 py-5 mb-5 divide-y bg-magnolia divide-lightGray">
        <div className="flex items-center justify-between pb-4">
          <div>
            <p className="font-bold capitalize text-marineBlue">
              <span className="mr-1">{userData.plan.gameMode}</span>
              <span>({userData.plan.type})</span>
            </p>
            <button
              className="text-sm hover:underline-offset-2 text-coolGray hover:underline"
              onClick={() => goTo(1)}
            >
              Change
            </button>
          </div>
          <p className="text-sm font-bold text-marineBlue">
            {`$${prices[userPlan]["gameMode"][userGameMode]}/${
              userPlan === "monthly" ? "mo" : "yr"
            }`}
          </p>
        </div>

        <ul className="flex flex-col gap-3 pt-4 text-sm">
          {addOns.map((addOn) => (
            <li
              className="flex items-center justify-between"
              key={crypto.randomUUID()}
            >
              <p className="capitalize text-coolGray">
                {addOn.replace("-", " ")}
              </p>
              <p className="text-indigo-900">
                {`+$${prices[userPlan].addOns[addOn]}/${
                  userPlan === "monthly" ? "mo" : "yr"
                }`}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between px-4 py-2">
        <p className="text-sm text-coolGray">
          {`Total ${userPlan === "monthly" ? "(per month)" : "(per year)"}`}
        </p>
        <p className="text-lg font-medium text-indigo-700">{`$${total}/${
          userPlan === "monthly" ? "mo" : "yr"
        }`}</p>
      </div>
    </>
  );
}

export default Summary;
