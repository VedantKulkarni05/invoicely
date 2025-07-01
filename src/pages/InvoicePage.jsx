import logo from "../assets/Logo.svg";
import FromtoSection from "../components/FromtoSection";
const InvoicePage = () => {
  return (
    <div className="min-h-screen bg-[#141414] text-white p-6" data-theme="dark">
      <header className="flex items-center gap-x-4 mb-8">
        <img src={logo} alt="logo" className="h-25 w-auto" />
        <h3 className="text-primary text-2xl font-semibold">
          Generate Invoice
        </h3>
      </header>
      <FromtoSection />
    </div>
  );
};

export default InvoicePage;
