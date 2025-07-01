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
      <h1 className="text-primary text-3xl font-semibold  tracking-widest leading-relaxed mt-7">
        Welcome to Invoice <span className="text-secondary">Ly</span>
      </h1>

      <h1 className="text-primary text-3xl font-semibold tracking-widest leading-relaxed mt-7">
        Generate Good Invoices in Seconds
      </h1>

      <button
        type="button"
        onClick={() => Navigate("/invoice")}
        className="relative group mt-7"
      >
        <span className="absolute inset-0 bg-[#ffffff] rounded-[31.2px] transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"></span>

        <div className="relative bg-[#e27b7c] border-2 border-[#e27b7c] text-white rounded-[31.2px] px-5 py-2.5 flex items-center justify-center gap-2">
          <img src={startbtn} alt="Start button" className="w-7 h-7" />
          <span className="text-xl font-outerSans font-medium">Start</span>
        </div>
      </button>
    </div>
  );
};

export default LandingPage;
