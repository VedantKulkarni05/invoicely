/* eslint-disable no-unused-vars */
import { useState } from "react";
import logo from "../assets/Logo.svg";
import FromtoSection from "../components/FromtoSection";
import InvoiceDetailsSection from "../components/InvoiceDetailsSection";
import ItemsSection from "../components/ItemsSection";
import PaymentSection from "../components/PaymentSection";
import SummarySection from "../components/SummarySection";
import LivePreview from "../components/LivePreview";

const InvoicePage = () => {
  const [currStep, setSteps] = useState(0);
  const goToNextStep = () => setSteps(currStep + 1);

  const [invoiceData, setInvoiceData] = useState({
    from: {
      name: "",
      address: "",
      zip: "",
      city: "",
      country: "",
      email: "",
      phone: "",
    },
    to: {
      name: "",
      address: "",
      zip: "",
      city: "",
      country: "",
      email: "",
      phone: "",
    },
    invoiceDetails: { number: "", date: "", dueDate: "" },
    items: [],
    payment: { taxRate: 0, discount: 0 },
    notes: "",
    bankDetails: { bankName: "", accountNumber: "", swiftCode: "" },
  });

  const stepsData = [
    {
      id: 0,
      label: "From & To",
      Component: (
        <FromtoSection
          goToNextStep={goToNextStep}
          invoiceData={invoiceData}
          setInvoiceData={setInvoiceData}
        />
      ),
    },
    {
      id: 1,
      label: "Invoice Details",
      Component: (
        <InvoiceDetailsSection
          goToNextStep={goToNextStep}
          invoiceData={invoiceData}
          setInvoiceData={setInvoiceData}
        />
      ),
    },
    {
      id: 2,
      label: "Items",
      Component: (
        <ItemsSection
          goToNextStep={goToNextStep}
          invoiceData={invoiceData}
          setInvoiceData={setInvoiceData}
        />
      ),
    },
    {
      id: 3,
      label: "Payment",
      Component: (
        <PaymentSection
          goToNextStep={goToNextStep}
          invoiceData={invoiceData}
          setInvoiceData={setInvoiceData}
        />
      ),
    },
    {
      id: 4,
      label: "Summary",
      Component: (
        <SummarySection
          goToNextStep={goToNextStep}
          invoiceData={invoiceData}
          setInvoiceData={setInvoiceData}
        />
      ),
    },
  ];

  const stepLabels = [
    "From & To",
    "Invoice Details",
    "Items",
    "Payment Details",
    "Summary",
  ];

  return (
    <div
      className="min-h-screen bg-[#141414] text-white p-4 md:p-6"
      data-theme="dark"
    >
      <header className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-x-4 mb-8">
        {/* Logo and Title */}
        <div className="flex items-center gap-x-4">
          <img src={logo} alt="logo" className="h-20 md:h-25 w-auto" />
          <h3 className="text-primary text-xl md:text-2xl font-semibold">
            Generate Invoice
          </h3>
        </div>

        {/* Navigation Steps */}
        <div className="flex flex-wrap gap-2 lg:gap-4 lg:ml-auto w-full lg:w-auto">
          {stepLabels.map((label, idx) => (
            <button
              key={idx}
              type="button"
              className="relative group flex-shrink-0"
              onClick={() => setSteps(idx)}
            >
              {/* White hover background */}
              <span className="absolute inset-0 bg-white rounded-lg transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

              {/* Inner pink content */}
              <div className="relative px-2 md:px-3 py-1.5 md:py-2 rounded-lg border border-[#e27b7c] bg-[#e27b7c] text-white text-xs md:text-sm font-medium transition-colors duration-300">
                <span className="hidden md:inline">
                  {idx + 1}. {label}
                </span>
                <span className="md:hidden">{idx + 1}</span>
              </div>
            </button>
          ))}
        </div>
      </header>

      {/* Main Content Section */}
      <section className="bg-zinc-900 p-4 md:p-6 rounded-xl border border-zinc-700 mb-8">
        {stepsData.map((step, i) => (
          <div key={i} className={currStep === i ? "" : "hidden"}>
            {step.Component}
          </div>
        ))}
      </section>

      {/* Live Preview Section */}
      <section className="flex justify-center bg-zinc-900 p-4 md:p-6 rounded-xl border border-zinc-700 mb-8">
        <div className="w-full max-w-6xl">
          <LivePreview invoiceData={invoiceData} />
        </div>
      </section>
    </div>
  );
};

export default InvoicePage;
