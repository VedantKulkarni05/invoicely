import React from "react";
import startbtn from "../assets/StartBtn.svg";

const FromtoSection = ({ goToNextStep, invoiceData, setInvoiceData }) => {
  // Reusable handler for nested updates
  const handleChange = (section, field, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };
  console.log( invoiceData);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {/* FROM Section */}
        <div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white mb-2">Bill From</h2>

            {[
              "name",
              "address",
              "zip",
              "city",
              "country",
              "email",
              "phone",
            ].map((field) => (
              <div key={field} className="space-y-1">
                <label
                  htmlFor={`from-${field}`}
                  className="text-sm text-white capitalize"
                >
                  {field}
                </label>
                <input
                  id={`from-${field}`}
                  type={
                    field === "email"
                      ? "email"
                      : field === "zip"
                      ? "number"
                      : "text"
                  }
                  placeholder={`Your ${field}`}
                  value={invoiceData.from[field] || ""}
                  onChange={(e) => handleChange("from", field, e.target.value)}
                  className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            ))}
          </div>
        </div>

        {/* TO Section */}
        <div className="space-y-4">
          <h1 className="text-xl font-semibold text-white mb-2">Bill To</h1>

          {["name", "address", "zip", "city", "country", "email", "phone"].map(
            (field) => (
              <div key={field} className="space-y-1">
                <label
                  htmlFor={`to-${field}`}
                  className="text-sm text-white capitalize"
                >
                  {field}
                </label>
                <input
                  id={`to-${field}`}
                  type={
                    field === "email"
                      ? "email"
                      : field === "zip"
                      ? "number"
                      : "text"
                  }
                  placeholder={`Receiver ${field}`}
                  value={invoiceData.to[field] || ""}
                  onChange={(e) => handleChange("to", field, e.target.value)}
                  className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* Next Step Button */}
      <div className="flex justify-end">
        <button
          type="button"
          className="relative group mt-7 w-[120px] h-[36px]"
          onClick={goToNextStep}
        >
          <span className="absolute inset-0 bg-white rounded-lg transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></span>
          <div className="relative bg-[#e27b7c] border-2 border-[#e27b7c] text-white rounded-lg w-full h-full flex items-center justify-center gap-1 px-2">
            <img src={startbtn} alt="Next button" className="w-3 h-3" />
            <span className="text-sm">Next</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default FromtoSection;
