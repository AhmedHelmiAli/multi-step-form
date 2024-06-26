import MultiStepForm from "./Contexts/MultiStepFormContext.jsx";
import Stepper from "./UI/Stepper";
import Sidebar from "./UI/Sidebar";

function App() {
  return (
    <MultiStepForm>
      <div className="flex md:p-4 bg-lightBlue md:bg-white w-screen md:w-[90%] xl:w-[65%] md:h-[30.125rem] h-[40rem] rounded font-ubuntu ">
        <Sidebar />
        <Stepper />
      </div>
    </MultiStepForm>
  );
}

export default App;
