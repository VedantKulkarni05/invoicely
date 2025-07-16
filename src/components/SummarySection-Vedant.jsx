import React, { useState, useCallback } from "react";
import SummaryCalc from "./SummaryCalc";
import { Textarea } from "@/components/ui/textarea";
import { Upload, X } from "lucide-react";
//import { toWords } from "number-to-words";
import downloadI from "../assets/download-icon.svg";

const SummarySection = ({ goToNextStep, invoiceData, setInvoiceData }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [notes, setNotes] = useState("");

  const handleCalculationChange = useCallback(
    (calculationData) => {
      // const total = calculationData.totalAmount || 0;
      // const amountInWords = `${toWords(Math.floor(total))} dollar${
      //   total === 1 ? "" : "s"
      // } only`;
      setInvoiceData((prev) => ({
        ...prev,
        ...calculationData,
        //amountInWords,
      }));
    },
    [setInvoiceData]
  );
  const handleNotesChange = (e) => {
    const value = e.target.value;
    setNotes(value);
    setInvoiceData((prev) => ({
      ...prev,
      notes: value || "No additional notes.",
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageDataUrl = e.target.result;
      setImagePreview(imageDataUrl);
      setInvoiceData((prev) => ({
        ...prev,
        signature: imageDataUrl,
      }));
    };
    reader.readAsDataURL(file);
  };

  const removeSignature = () => {
    setImagePreview(null);
    setInvoiceData((prev) => ({
      ...prev,
      signature: null,
    }));
  };

  return (
    <>
      <h1 className="text-xl md:text-2xl font-semibold pb-4 md:pb-6">
        Summary:
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Signature & Notes */}
        <div className="space-y-6">
          {/* Signature Upload */}
          <div>
            <h3 className="text-lg font-medium mb-3">Signature</h3>
            <div className="relative bg-zinc-800 border-2 border-zinc-600 rounded-lg p-4 h-48">
              {!imagePreview ? (
                <label className="flex flex-col items-center justify-center h-full cursor-pointer hover:bg-zinc-700 transition-colors rounded">
                  <Upload className="w-8 h-8 text-zinc-400 mb-2" />
                  <span className="text-zinc-400 text-sm">
                    Click to upload signature
                  </span>
                  <span className="text-zinc-500 text-xs mt-1">
                    PNG, JPG, or JPEG
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="relative h-full">
                  <img
                    src={imagePreview}
                    alt="Signature"
                    className="w-full h-full object-contain"
                  />
                  <button
                    onClick={removeSignature}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <h3 className="text-lg font-medium mb-3">Additional Notes:</h3>
            <Textarea
              placeholder="Add any additional notes here..."
              value={notes}
              onChange={handleNotesChange}
              className="bg-zinc-800 border-zinc-600 text-white placeholder-zinc-400 min-h-[100px]"
            />
          </div>
        </div>

        {/* Right Column - Calculations */}
        <SummaryCalc
          invoiceData={invoiceData}
          onCalculationChange={handleCalculationChange}
        />
      </div>

      {/* Generate Button */}
      <div className="flex justify-end">
        <button
          type="button"
          className="relative group mt-7 w-[120px] h-[36px]"
          onClick={goToNextStep}
        >
          <span className="absolute inset-0 bg-[#ffffff] rounded-lg transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></span>
          <div className="relative bg-[#e27b7c] border-2 border-[#e27b7c] text-white rounded-lg w-full h-full flex items-center justify-center gap-1 px-2">
            <img src={downloadI} alt="Next button" className="w-3 h-3" />
            <span className="text-sm">Generate</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default SummarySection;
