import logo from "../assets/Logo.svg";
import Startbtn from "../assets/StartBtn.svg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const Navigate = useNavigate();
  return (
    <div
      className="h-screen flex flex-col justify-center items-center px-4 md:px-8"
      data-theme="dark"
    >
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="w-auto h-26 md:h-24 lg:h-28 mb-4 md:mb-6"
      />

      {/* Main Heading */}
      <h1 className="text-primary text-xl md:text-2xl lg:text-3xl font-semibold tracking-widest leading-relaxed text-center">
        Welcome to Invoice <span className="text-secondary">Ly</span>
      </h1>

      {/* Subheading */}
      <h1 className="text-primary text-xl md:text-2xl lg:text-3xl font-semibold tracking-widest leading-relaxed mt-4 md:mt-6 lg:mt-7 text-center px-2">
        Generate Good Invoices in Seconds
      </h1>

      {/* Start Button */}
      <button
        type="button"
        onClick={() => Navigate("/invoice")}
        className="relative group mt-6 md:mt-8 lg:mt-10"
      >
        <span className="absolute inset-0 bg-[#ffffff] rounded-lg transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"></span>

        <div className="relative bg-[#e27b7c] border-2 border-[#e27b7c] text-white rounded-lg px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 flex items-center justify-center gap-2">
          <img
            src={Startbtn}
            alt="Start button"
            className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
          />
          <span className="text-lg md:text-xl lg:text-xl font-outerSans font-medium">
            Start
          </span>
        </div>
      </button>
    </div>
  );
};

export default LandingPage;
