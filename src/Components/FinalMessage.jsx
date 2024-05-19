import { IoMdCheckmark } from "react-icons/io";

function FinalMessage() {
  return (
    <div className="flex flex-col justify-center h-full py-8 text-center">
      <div className="flex items-center self-center justify-center mb-5 bg-red-400 rounded-full w-14 h-14">
        <span className="flex items-center justify-center w-8 h-8 text-2xl font-medium text-red-400 bg-white rounded-full ">
          <IoMdCheckmark />
        </span>
      </div>
      <h3 className="mb-3 text-2xl font-bold capitalize text-marineBlue">
        thank you!
      </h3>
      <p className="text-coolGray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
}

export default FinalMessage;
