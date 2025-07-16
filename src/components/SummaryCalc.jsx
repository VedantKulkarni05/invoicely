import React, { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { RefreshCw } from "lucide-react";
import { toWords } from "number-to-words";

const SummaryCalc = ({ invoiceData, onCalculationChange }) => {
  const [discountEnabled, setDiscountEnabled] = useState(false);
  const [taxEnabled, setTaxEnabled] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [includeWordsToggle, setIncludeWordsToggle] = useState(true);

  // Subtotal calculation
  const calculateSubtotal = () => {
    if (!Array.isArray(invoiceData.items)) return 120.0;
    return invoiceData.items.reduce((sum, item) => {
      return sum + (item.quantity || 0) * (item.rate || 0);
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const finalTaxAmount = taxEnabled ? taxAmount : 0;
  const finalDiscountAmount = discountEnabled ? discountAmount : 0;
  const total = subtotal - finalDiscountAmount + finalTaxAmount;

  const dollarPart = Math.floor(total);
  const centsPart = Math.round((total - dollarPart) * 100);

  const amountInWords = includeWordsToggle
    ? `${toWords(dollarPart)} dollar${dollarPart === 1 ? "" : "s"}${
        centsPart > 0
          ? ` and ${toWords(centsPart)} cent${centsPart === 1 ? "" : "s"}`
          : ""
      } only`
    : "";

  // Send updated values to parent
  useEffect(() => {
    onCalculationChange({
      subtotal,
      tax: {
        amount: finalTaxAmount,
      },
      total,
      summary: {
        discountEnabled,
        taxEnabled,
        discountAmount: finalDiscountAmount,
        includeWordsToggle,
      },
      amountInWords,
    });
  }, [
    subtotal,
    finalTaxAmount,
    finalDiscountAmount,
    discountEnabled,
    taxEnabled,
    includeWordsToggle,
    onCalculationChange,
  ]);

  const refreshDiscount = () => setDiscountAmount(0);
  const refreshTax = () => setTaxAmount(0);

  return (
    <div className="space-y-6">
      {/* Toggles */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <label className="block  font-medium mb-2">Discount</label>
          <Switch
            checked={discountEnabled}
            onCheckedChange={setDiscountEnabled}
          />
        </div>
        <div className="text-center">
          <label className="block  font-medium mb-2">Tax</label>
          <Switch checked={taxEnabled} onCheckedChange={setTaxEnabled} />
        </div>
      </div>

      {/* Conditional Inputs */}
      <div className="space-y-4">
        {discountEnabled && (
          <div className="flex items-center space-x-2">
            <label className="w-20 ">Discount:</label>
            <Input
              type="number"
              value={discountAmount}
              onChange={(e) => setDiscountAmount(Number(e.target.value))}
              className="bg-zinc-800 border-zinc-600 text-white"
              placeholder="0.00"
            />
            <button
              onClick={refreshDiscount}
              className="p-2 hover:bg-zinc-700 rounded"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        )}

        {taxEnabled && (
          <div className="flex items-center space-x-2">
            <label className="w-20 ">Tax:</label>
            <Input
              type="number"
              value={taxAmount}
              onChange={(e) => setTaxAmount(Number(e.target.value))}
              className="bg-zinc-800 border-zinc-600 text-white"
              placeholder="0.00"
            />
            <button
              onClick={refreshTax}
              className="p-2 hover:bg-zinc-700 rounded"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Summary Totals */}
      <div className="space-y-3 pt-4 border-t border-zinc-600">
        <div className="flex justify-between">
          <span className="text text-secondary">Subtotal</span>
          <span className="font-bold">{subtotal.toFixed(2)} USD</span>
        </div>
        {discountEnabled && discountAmount > 0 && (
          <div className="flex justify-between text-red-400">
            <span className=" text-secondary">Discount</span>
            <span className="font-bold">-{discountAmount.toFixed(2)} USD</span>
          </div>
        )}
        {taxEnabled && taxAmount > 0 && (
          <div className="flex justify-between text-green-400">
            <span className="text-secondary">Tax</span>
            <span className="font-bold">+{taxAmount.toFixed(2)} USD</span>
          </div>
        )}
        <div className="flex justify-between font-semibold text-lg pt-2 border-t border-zinc-600">
          <span className="text-secondary">Total Amount</span>
          <span className="font-bold">{total.toFixed(2)} USD</span>
        </div>
      </div>

      {/* Words Toggle */}
      <div className="flex items-center justify-between pt-4">
        <label className="font-medium">Include Total in Words?</label>
        <div className="flex items-center space-x-2">
          <span className="">Yes</span>
          <Switch
            checked={includeWordsToggle}
            onCheckedChange={setIncludeWordsToggle}
          />
        </div>
      </div>
      {invoiceData.amountInWords && (
        <p className="mt-4  text-zinc-400">
          Total in words:{" "}
          <strong className="text-secondary capitalize">
            {invoiceData.amountInWords}
          </strong>
        </p>
      )}
    </div>
  );
};

export default SummaryCalc;
