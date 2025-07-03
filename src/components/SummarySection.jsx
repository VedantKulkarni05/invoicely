import React from "react";
import downloadI from "../assets/download-icon.svg";
const SummarySection = ({ goToNextStep }) => {
  return (
    <>
      <h1 style={{ color: "white" }}>InvoiceDetailsSection</h1>
      <div className="flex justify-end ">
        <button
          type="button"
          className="relative group mt-7 w-[120px] h-[36px]"
          onClick={goToNextStep}
        >
          <span className="absolute inset-0 bg-[#ffffff] rounded-lg transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></span>

          <div className="relative bg-[#e27b7c] border-2 border-[#e27b7c] text-white rounded-lg w-full h-full flex items-center justify-center gap-1 px-2">
            <img src={downloadI} alt="Next button" className="w-3 h-3" />
            <span className="text-sm  ">Generate</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default SummarySection;
