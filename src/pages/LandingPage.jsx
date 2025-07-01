import logo from "../assets/Logo.svg";
import startbtn from "../assets/StartBtn.svg";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const Navigate = useNavigate();
  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      data-theme="dark"
    >
      <img src={logo} alt="logo" />
      <h1 className="text-primary text-3xl font-semibold mt-7">
        Welcome to Invoice <span className="text-secondary">Ly</span>
      </h1>

      <h1 className="text-primary text-3xl font-semibold mt-7">
        Generate Good Invoices in Seconds
      </h1>

      <button
        type="button"
        className="bg-[#e27b7c] text-white rounded-[31.2px] px-5 py-2.5 flex items-center justify-center gap-2 mt-7"
        onClick={() => Navigate("/invoice")}
      >
        <img src={startbtn} alt="Start button" className="w-7 h-7" />
        Start
      </button>
    </div>
  );
};

export default LandingPage;
