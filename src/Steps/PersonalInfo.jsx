import { useContext } from "react";
import { formContext } from "../Contexts/MultiStepFormContext";

function PersonalInfo() {
  const { userData, setUserData } = useContext(formContext);

  function handleUserName(e) {
    setUserData((prevData) => ({ ...prevData, name: e.target.value }));
  }
  function handleUserEmail(e) {
    setUserData((prevData) => ({ ...prevData, email: e.target.value }));
  }
  function handleUserPhone(e) {
    setUserData((prevData) => ({ ...prevData, phone: e.target.value }));
  }

  return (
    <>
      <h2 className="mb-2 text-2xl font-bold capitalize text-marineBlue">
        personal info
      </h2>
      <p className="mb-6 text-coolGray">
        Please provide your name, email and phone number
      </p>

      <label
        htmlFor="name"
        className="block mb-1 text-sm font-medium capitalize text-marineBlue "
      >
        name
      </label>
      <input
        className="w-full p-2 mb-4 font-medium border rounded text-marineBlue focus:outline-none placeholder:font-normal focus:border-indigo-800 invalid:border-pink-600 border-slate-300 "
        type="text"
        id="name"
        autoFocus
        required
        placeholder="e.g:jonas"
        value={userData.name}
        onChange={handleUserName}
      />
      <label
        htmlFor="email"
        className="block mb-1 text-sm font-medium capitalize text-marineBlue "
      >
        email address
      </label>
      <input
        className="w-full p-2 mb-4 font-medium border rounded text-marineBlue focus:border-indigo-800v placeholder:font-normal invalid:border-pink-600 focus:outline-none border-slate-300"
        type="email"
        id="email"
        required
        placeholder="e.g:jonas@gmail.com"
        value={userData.email}
        onChange={handleUserEmail}
      />
      <label
        htmlFor="tel"
        className="block mb-1 text-sm font-medium capitalize text-marineBlue"
      >
        phone number
      </label>
      <input
        className="w-full p-2 font-medium border rounded text-marineBlue focus:border-indigo-800 placeholder:font-normal invalid:border-pink-600 focus:outline-none border-slate-300"
        type="tel"
        id="tel"
        required
        minLength={2}
        placeholder="e.g:+21026583826"
        value={userData.phone}
        onChange={handleUserPhone}
      />
    </>
  );
}

export default PersonalInfo;
