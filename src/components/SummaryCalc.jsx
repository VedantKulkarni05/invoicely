import React, { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { RefreshCw } from "lucide-react";

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
          <label className="block text-sm font-medium mb-2">Discount</label>
          <Switch
            checked={discountEnabled}
            onCheckedChange={setDiscountEnabled}
          />
        </div>
        <div className="text-center">
          <label className="block text-sm font-medium mb-2">Tax</label>
          <Switch checked={taxEnabled} onCheckedChange={setTaxEnabled} />
        </div>
      </div>

      {/* Conditional Inputs */}
      <div className="space-y-4">
        {discountEnabled && (
          <div className="flex items-center space-x-2">
            <label className="w-20 text-sm">Discount:</label>
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
            <label className="w-20 text-sm">Tax:</label>
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
          <span className="text-sm">Subtotal</span>
          <span className="text-sm">{subtotal.toFixed(2)} USD</span>
        </div>
        {discountEnabled && discountAmount > 0 && (
          <div className="flex justify-between text-red-400">
            <span className="text-sm">Discount</span>
            <span className="text-sm">-{discountAmount.toFixed(2)} USD</span>
          </div>
        )}
        {taxEnabled && taxAmount > 0 && (
          <div className="flex justify-between text-green-400">
            <span className="text-sm">Tax</span>
            <span className="text-sm">+{taxAmount.toFixed(2)} USD</span>
          </div>
        )}
        <div className="flex justify-between font-semibold text-lg pt-2 border-t border-zinc-600">
          <span>Total Amount</span>
          <span>{total.toFixed(2)} USD</span>
        </div>
      </div>

      {/* Words Toggle */}
      <div className="flex items-center justify-between pt-4">
        <label className="text-sm font-medium">Include Total in Words?</label>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Yes</span>
          <Switch
            checked={includeWordsToggle}
            onCheckedChange={setIncludeWordsToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default SummaryCalc;
