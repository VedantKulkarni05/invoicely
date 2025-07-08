import React, { useState } from "react";
import startbtn from "../assets/StartBtn.svg";
import { Calendar } from "@/components/ui/calendar.jsx";
import { Input } from "@/components/ui/input.jsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.jsx";
import { format } from "date-fns";

const InvoiceDetailsSection = ({
  goToNextStep,
  invoiceData,
  setInvoiceData,
}) => {
  const [issueDate, setIssueDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());

  const handleChange = (field, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <h1 className="text-2xl font-semibold pb-3">Invoice Details:</h1>

      <div className="max-w-3xs ml-0 space-y-4 pl-2">
        {/* Invoice Number */}
        <div className="flex  items-center gap-2">
          <label htmlFor="invoiceNumber" className="whitespace-nowrap">
            Invoice Number:
          </label>
          <Input
            id="invoiceNumber"
            placeholder="Invoice No"
            value={invoiceData.invoiceNumber}
            onChange={(e) => handleChange("invoiceNumber", e.target.value)}
            className="flex-1 text-secondary focus-visible:ring-white/50 "
          />
        </div>

        {/* Issue Date */}
        <div className="flex items-center gap-4">
          <label className="whitespace-nowrap">Issue Date:</label>
          <Popover>
            <PopoverTrigger asChild>
              <Input
                readOnly
                value={format(issueDate, "yyyy-MM-dd")}
                placeholder="Pick a date"
                className="cursor-pointer flex-1 text-secondary"
              />
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={issueDate}
                onSelect={(date) => {
                  setIssueDate(date);
                  handleChange("issueDate", date);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Due Date */}
        <div className="flex items-center gap-4">
          <label className="whitespace-nowrap">Due Date:</label>
          <Popover>
            <PopoverTrigger asChild>
              <Input
                readOnly
                value={format(dueDate, "yyyy-MM-dd")}
                placeholder="Pick a date"
                className="cursor-pointer flex-1 text-secondary"
              />
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={dueDate}
                onSelect={(date) => {
                  setDueDate(date);
                  handleChange("dueDate", date);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Currency */}
        <div className="flex items-center gap-4">
          <label className="whitespace-nowrap">Currency:</label>
          <Input
            placeholder="United States Dollar (USD)"
            value={invoiceData.currency || ""}
            onChange={(e) => handleChange("currency", e.target.value)}
            className="flex-1 text-secondary focus-visible:ring-white/50"
          />
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-end">
        <button
          type="button"
          className="relative group mt-7 w-[120px] h-[36px]"
          onClick={goToNextStep}
        >
          <span className="absolute inset-0 bg-[#ffffff] rounded-lg transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></span>
          <div className="relative bg-[#e27b7c] border-2 border-[#e27b7c] text-white rounded-lg w-full h-full flex items-center justify-center gap-1 px-2">
            <img src={startbtn} alt="Next button" className="w-3 h-3" />
            <span className="text-sm">Next</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default InvoiceDetailsSection;
