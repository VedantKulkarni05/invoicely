import React from "react";
import startbtn from "../assets/StartBtn.svg";
import { Input } from "@/components/ui/input.jsx";

const PaymentSection = ({ goToNextStep, invoiceData, setInvoiceData }) => {
  const handleChange = (field, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      paymentDetails: {
        ...prev.paymentDetails,
        [field]: value,
      },
    }));
  };
  return (
    <>
      <h1 className="text-xl md:text-2xl font-semibold pb-2 md:pb-3">
        Payments Details:
      </h1>

      <div className="max-w-sm md:max-w-3xl ml-0 space-y-3 md:space-y-4 pl-1 md:pl-2">
        {/* Bank Name */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label
            htmlFor="bankName"
            className="whitespace-nowrap text-sm md:text-base font-medium md:font-normal min-w-[120px] md:min-w-[140px]"
          >
            Bank Name:
          </label>
          <Input
            id="bankName"
            placeholder="Bank Name"
            value={invoiceData.paymentDetails?.bankName}
            onChange={(e) => handleChange("bankName", e.target.value)}
            className="flex-1 text-secondary focus-visible:ring-white/50 h-9 md:h-10"
          />
        </div>

        {/* Account Name */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label
            htmlFor="accountNumber"
            className="whitespace-nowrap text-sm md:text-base font-medium md:font-normal min-w-[120px] md:min-w-[140px]"
          >
            Account Number:
          </label>
          <Input
            id="accountNumber"
            placeholder="Account Name"
            value={invoiceData.paymentDetails?.accountNumber}
            onChange={(e) => handleChange("accountNumber", e.target.value)}
            className="flex-1 text-secondary focus-visible:ring-white/50 h-9 md:h-10"
          />
        </div>

        {/* Account Number */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label
            htmlFor="swiftCode"
            className="whitespace-nowrap text-sm md:text-base font-medium md:font-normal min-w-[120px] md:min-w-[140px]"
          >
            Swift Code:
          </label>
          <Input
            id="swiftCode"
            placeholder="Account Number"
            value={invoiceData.paymentDetails?.swiftCode}
            onChange={(e) => handleChange("swiftCode", e.target.value)}
            className="flex-1 text-secondary focus-visible:ring-white/50 h-9 md:h-10"
          />
        </div>
      </div>

      {/* Next button */}
      <div className="flex justify-end ">
        <button
          type="button"
          className="relative group mt-7 w-[120px] h-[36px]"
          onClick={goToNextStep}
        >
          <span className="absolute inset-0 bg-[#ffffff] rounded-lg transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></span>

          <div className="relative bg-[#e27b7c] border-2 border-[#e27b7c] text-white rounded-lg w-full h-full flex items-center justify-center gap-1 px-2">
            <img src={startbtn} alt="Next button" className="w-3 h-3" />
            <span className="text-sm  ">Next</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default PaymentSection;
