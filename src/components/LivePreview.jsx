import React from "react";
import logo from "../assets/Logo.svg";
import { format } from "date-fns";

const LivePreview = ({ invoiceData }) => {
  // Sample data for the invoice
  // const invoiceData = {
  //   logoUrl: logo,
  //   businessName: "",
  //   invoiceNumber: "",
  //   invoiceDate: "",
  //   dueDate: "",
  //   from: {
  //     name: "",
  //     address: "",
  //     zip: "",
  //     city: "",
  //     country: "",
  //     email: "",
  //     phone: "",
  //   },
  //   to: {
  //     name: "",
  //     address: "",
  //     zip: "",
  //     city: "",
  //     country: "",
  //     email: "",
  //     phone: "",
  //   },
  //   items: [
  //     {
  //       description: "Website Design & Development",
  //       quantity: 1,
  //       rate: 2500,
  //       total: 2500,
  //     },
  //     {
  //       description: "Logo Design & Branding",
  //       quantity: 1,
  //       rate: 800,
  //       total: 800,
  //     },
  //     {
  //       description: "Monthly SEO Service",
  //       quantity: 3,
  //       rate: 500,
  //       total: 1500,
  //     },
  //   ],
  //   subtotal: 4800,
  //   tax: {
  //     rate: 8, // in percent
  //     amount: 384,
  //   },
  //   total: 5184,
  //   notes: "Thank you for your business. Please make payment within 30 days.",
  //   paymentDetails: {
  //     bankName: "Global Bank Inc.",
  //     accountNumber: "1234 5678 9012 3456",
  //     swiftCode: "GBIUSAUSXXX",
  //   },
  // };

  return (
    <div className="bg-gray-600 p-4 sm:p-8 print:p-0 rounded-lg">
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 sm:p-12 text-secondary print:shadow-none print:p-0 rounded-lg">
        {/* 1. Header Row */}
        <header className="flex justify-between items-start mb-12 border-b pb-6">
          <div className="flex items-center">
            <img
              src={invoiceData.logoUrl || logo}
              alt="Business Logo"
              className="h-28 w-28 mr-4"
            />
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold uppercase text-gray-600">
              Invoice
            </h2>
            <div className="mt-2">
              <p className="text-sm">
                <strong>Invoice #:</strong>{" "}
                {invoiceData.invoiceNumber || "0001"}
              </p>
              <p className="text-sm">
                <strong>Date:</strong>{" "}
                {invoiceData.issueDate
                  ? format(new Date(invoiceData.issueDate), "yyyy-MM-dd")
                  : ""}
              </p>
              <p className="text-sm">
                <strong>Due Date:</strong>{" "}
                {invoiceData.dueDate
                  ? format(new Date(invoiceData.dueDate), "yyyy-MM-dd")
                  : ""}
              </p>
            </div>
          </div>
        </header>

        {/* 2. From & To Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-gray-600 mb-2">From:</h3>
            <p className="font-semibold">
              {invoiceData.from.name || "Sender Name"}
            </p>
            <p className="text-sm">
              {invoiceData.from.address || "Sender Address"}
            </p>
            <p className="text-sm">{invoiceData.from.zip || "Zip Code"}</p>
            <p className="text-sm">{invoiceData.from.city || "City"}</p>
            <p className="text-sm">{invoiceData.from.country || "Country"}</p>
            <p className="text-sm">
              <strong>Email:</strong>{" "}
              {invoiceData.from.email || "email@example.com"}
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> {invoiceData.from.phone || "0000000000"}
            </p>
          </div>
          <div className="sm:text-right">
            <h3 className="font-bold text-gray-600 mb-2">To:</h3>
            <p className="font-semibold">
              {invoiceData.to.name || "Client Name"}
            </p>
            <p className="text-sm">
              {invoiceData.to.address || "Client Address"}
            </p>
            <p className="text-sm">{invoiceData.to.zip || "Zip Code"}</p>
            <p className="text-sm">{invoiceData.to.city || "City"}</p>
            <p className="text-sm">{invoiceData.to.country || "Country"}</p>
            <p className="text-sm">
              <strong>Email:</strong>{" "}
              {invoiceData.to.email || "client@example.com"}
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> {invoiceData.to.phone || "0000000000"}
            </p>
          </div>
        </section>
        {/* 3. Items Table */}
        {/* 3. Items Table */}
        <section className="mb-12">
          <table className="w-full text-left table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 font-bold uppercase text-gray-600">
                  Description
                </th>
                <th className="p-3 text-right font-bold uppercase text-gray-600">
                  Qty
                </th>
                <th className="p-3 text-right font-bold uppercase text-gray-600">
                  Rate
                </th>
                <th className="p-3 text-right font-bold uppercase text-gray-600">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(invoiceData.items) &&
              invoiceData.items.length > 0 ? (
                invoiceData.items.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="p-3">
                      {item.description?.trim() || item.name?.trim() || "-"}
                    </td>
                    <td className="p-3 text-right">{item.quantity ?? 0}</td>
                    <td className="p-3 text-right">
                      $
                      {typeof item.rate === "number"
                        ? item.rate.toFixed(2)
                        : "0.00"}
                    </td>
                    <td className="p-3 text-right">
                      $
                      {typeof item.total === "number"
                        ? item.total.toFixed(2)
                        : "0.00"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-3 italic text-gray-400" colSpan={4}>
                    No items added
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

        {/* 4. Summary & Totals */}
        <section className="flex justify-end mb-12">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex justify-between text-gray-700">
              <p>Subtotal</p>
              <p>${invoiceData.subtotal?.toFixed(2) || "0.00"}</p>
            </div>
            <div className="flex justify-between text-gray-700">
              <p>Tax ({invoiceData.tax?.rate || 0}%)</p>
              <p>${invoiceData.tax?.amount?.toFixed(2) || "0.00"}</p>
            </div>
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between font-bold text-lg text-blue-600">
                <p>Total</p>
                <p>${invoiceData.total?.toFixed(2) || "0.00"}</p>
              </div>
            </div>
          </div>
        </section>
        {/* 5. Notes & Payment Details */}
        <footer className="border-t pt-8 text-sm text-gray-600">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-2">Notes</h4>
              <p>{invoiceData.notes || "No additional notes."}</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Payment Details</h4>
              <p>
                <strong>Bank:</strong>{" "}
                {invoiceData.paymentDetails?.bankName || "N/A"}
              </p>
              <p>
                <strong>Account #:</strong>{" "}
                {invoiceData.paymentDetails?.accountNumber || "N/A"}
              </p>
              <p>
                <strong>SWIFT:</strong>{" "}
                {invoiceData.paymentDetails?.swiftCode || "N/A"}
              </p>
            </div>
          </div>
          <div className="text-center mt-12 print:hidden">
            <button
              onClick={() => window.print()}
              className="bg-blue-900 text-secondary font-bold py-2 px-6 rounded-lg hover:bg-blue-950 transition duration-300"
            >
              Print / Save as PDF
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LivePreview;
