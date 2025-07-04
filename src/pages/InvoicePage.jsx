import { Component, useState } from "react";
import logo from "../assets/Logo.svg";
import FromtoSection from "../components/FromtoSection";
import InvoiceDetailsSection from "../components/InvoiceDetailsSection";
import ItemsSection from "../components/ItemsSection";
import PaymentSection from "../components/PaymentSection";
import SummarySection from "../components/SummarySection";

const InvoicePage = () => {
  const [currStep, setSteps] = useState(0);
  const goToNextStep = () => setSteps(currStep + 1);

  const stepsData = [
    {
      id: 0,
      label: "From & To",
      Component: <FromtoSection goToNextStep={goToNextStep} />,
    },
    {
      id: 1,
      label: "Invoice Details",
      Component: <InvoiceDetailsSection goToNextStep={goToNextStep} />,
    },
    {
      id: 2,
      label: "Items",
      Component: <ItemsSection goToNextStep={goToNextStep} />,
    },
    {
      id: 3,
      label: "Payment",
      Component: <PaymentSection goToNextStep={goToNextStep} />,
    },
    {
      id: 4,
      label: "Summary",
      Component: <SummarySection goToNextStep={goToNextStep} />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white p-6" data-theme="dark">
      <header className="flex items-center gap-x-4 mb-8">
        <img src={logo} alt="logo" className="h-25 w-auto" />
        <h3 className="text-primary text-2xl font-semibold">
          Generate Invoice
        </h3>
        <div className="flex ml-auto gap-4">
          {[
            "From & To",
            "Invoice Details",
            "Items",
            "Payment Details",
            "Summary",
          ].map((label, idx) => (
            <button
              key={idx}
              type="button"
              className="relative group"
              onClick={() => setSteps(idx)}
            >
              {/* White hover background */}
              <span className="absolute inset-0 bg-white rounded-lg transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

              {/* Inner pink content */}
              <div className="relative px-3 py-2 rounded-lg border border-[#e27b7c] bg-[#e27b7c] text-white text-sm font-medium transition-colors duration-300">
                {idx + 1}. {label}
              </div>
            </button>
          ))}
        </div>
      </header>
      <section className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 mb-8">
        {/* <FromtoSection /> */}
        {stepsData.map((step, i) => (
          <div key={i} className={currStep === i ? "" : "hidden"}>
            {step.Component}
          </div>
        ))}{" "}
      </section>

      <section className="flex justify-center bg-zinc-900 p-6 rounded-xl border border-zinc-700 mb-8 ">
        <h3 className="text-primary text-3xl font-semibold">Live Preview</h3>
      </section>
    </div>
  );
};

export default InvoicePage;
