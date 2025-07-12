/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import startbtn from "../assets/StartBtn.svg";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash, CircleArrowRight } from "lucide-react";

const ItemsSection = ({ goToNextStep, invoiceData, setInvoiceData }) => {
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...invoiceData.items];
    updatedItems[index][field] = value;

    // Recalculate row total
    const qty = Number(updatedItems[index].quantity || 0);
    const rate = Number(updatedItems[index].rate || 0);
    updatedItems[index].total = qty * rate;

    setInvoiceData((prev) => ({
      ...prev,
      items: updatedItems,
    }));
  };

  const handleAddItem = () => {
    setInvoiceData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          description: "",
          quantity: 0,
          rate: 0,
          total: 0,
        },
      ],
    }));
  };

  const handleRemoveItem = (indexRemove) => {
    if (invoiceData.items.length <= 1) return;
    const newItems = invoiceData.items.filter((_, i) => i !== indexRemove);
    setInvoiceData((prev) => ({
      ...prev,
      items: newItems,
    }));
  };

  // Auto add first item if none
  useEffect(() => {
    if (invoiceData.items.length === 0) {
      handleAddItem();
    }
  }, [invoiceData.items.length]);

  // Subtotal and total calculation
  useEffect(() => {
    const subtotal = invoiceData.items.reduce(
      (sum, item) => sum + Number(item.total || 0),
      0
    );

    setInvoiceData((prev) => ({
      ...prev,
      subtotal,
      total: subtotal,
    }));
  }, [invoiceData.items]);

  const formatCurrency = (amount) => {
    const currency = invoiceData.currency || "$";
    return `${currency}${Number(amount).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
        Items:
      </h1>
      <div>
        {invoiceData.items.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-8 md:grid-cols-12 gap-4 md:gap-7 border text-primary rounded-xl text-lg md:text-2xl mb-5 md:mb-7 p-3 md:p-5"
          >
            {/* Item Name */}
            <div className="col-span-8 md:col-span-5">
              <label className="font-semibold block mb-2">Name:</label>
              <Input
                placeholder="Item Name"
                value={item.description}
                onChange={(e) =>
                  handleItemChange(index, "description", e.target.value)
                }
                className="w-full h-10 md:h-12 text-secondary font-medium"
              />
            </div>

            {/* Quantity */}
            <div className="col-span-4 md:col-span-2">
              <label className="font-semibold block mb-2">Quantity:</label>
              <Input
                type="number"
                placeholder="0"
                value={item.quantity}
                onChange={(e) =>
                  handleItemChange(index, "quantity", Number(e.target.value))
                }
                className="w-full h-10 md:h-12 text-secondary font-medium"
              />
            </div>

            {/* Rate */}
            <div className="col-span-4 md:col-span-2">
              <label className="font-semibold block mb-2">Rate:</label>
              <Input
                type="number"
                placeholder="0"
                value={item.rate}
                onChange={(e) =>
                  handleItemChange(index, "rate", Number(e.target.value))
                }
                className="w-full h-10 md:h-12 text-secondary font-medium"
              />
            </div>

            {/* Total - Shows on same row as inputs on desktop */}
            <div className="col-span-8 md:col-span-3">
              <label className="font-semibold block mb-2 md:mb-5">Total:</label>
              <p className="text-xl md:text-2xl font-bold text-secondary">
                {formatCurrency(item.total || 0)}
              </p>
            </div>

            {/* Description */}
            <div className="col-span-8 md:col-span-9 mb-3">
              <label className="font-semibold block mb-2">Description:</label>
              <Textarea
                placeholder="More details (optional)"
                value={item.notes || ""}
                onChange={(e) =>
                  handleItemChange(index, "notes", e.target.value)
                }
                className="w-full h-20 md:h-24 text-secondary font-medium"
              />
            </div>

            {/* Delete Button */}
            <div className="col-span-8 md:col-span-3 flex items-end justify-end">
              <button
                onClick={() => handleRemoveItem(index)}
                className="bg-red-600 text-primary py-2 px-4 md:py-3 md:px-7 flex items-center rounded-md hover:bg-red-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={invoiceData.items.length === 1}
              >
                <Trash className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Button */}
      <div className="mt-4 md:mt-6">
        <button
          onClick={handleAddItem}
          className="bg-green-600 text-primary text-lg md:text-xl py-2 px-4 md:py-3 md:px-7 rounded-md hover:bg-green-700 transition duration-300"
        >
          <Plus className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Next Button */}
      <div className="flex justify-end">
        <button
          type="button"
          className="relative group md:mt-7 w-[100px] h-[32px] md:w-[120px] md:h-[36px]"
          onClick={goToNextStep}
        >
          <span className="absolute inset-0 bg-white rounded-lg transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          <div className="relative bg-[#e27b7c] border-2 border-[#e27b7c] text-white rounded-lg w-full h-full flex items-center justify-center gap-1 px-2">
            <img
              src={startbtn}
              alt="Next button"
              className="w-5 h-7 md:w-5 md:h-6"
            />

            <span className="text-xs md:text-sm">Next</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default ItemsSection;
