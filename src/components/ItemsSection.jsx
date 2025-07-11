/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import startbtn from "../assets/StartBtn.svg";
import trash from "../assets/trash-icon.svg";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea";

const ItemsSection = ({ goToNextStep, invoiceData, setInvoiceData }) => {
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...invoiceData.items];
    updatedItems[index][field] = value;

    // Recalculate total
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
  useEffect(() => {
    if ((invoiceData.items, length === 0)) {
      handleAddItem();
    }
  }, []);

  const handleRemoveItem = (indexRemove) => {
    const newItems = invoiceData.items.filter((items, i) => i !== indexRemove);
    if (invoiceData.items.length <= 1) return;
    setInvoiceData({ ...invoiceData, items: newItems });
  };

  // Auto-calculate subtotal, tax, and total when items change
  useEffect(() => {
    const subtotal = invoiceData.items.reduce(
      (sum, item) => sum + Number(item.total || 0),
      0
    );

    const taxRate = invoiceData.tax?.rate || 0;
    const taxAmount = (subtotal * taxRate) / 100;
    const total = subtotal + taxAmount;

    setInvoiceData((prev) => ({
      ...prev,
      subtotal,
      tax: {
        ...prev.tax,
        amount: taxAmount,
      },
      total,
    }));
  }, [invoiceData.items]);

  return (
    <>
      <h1 className="text-3xl font-semibold mb-6">Items:</h1>
      <div className="space-y-6">
        {invoiceData.items.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-6 border text-primary rounded-md"
          >
            {/* Description */}
            <div className="col-span-2 p-6">
              <label className="font-semibold block">Name:</label>
              <Input
                placeholder="Item Name"
                value={item.description}
                onChange={(e) =>
                  handleItemChange(index, "description", e.target.value)
                }
                className="w-full text-secondary font-medium"
              />
            </div>

            {/* Quantity */}
            <div className="col-span-2 p-6">
              <label className="font-semibold block">Quantity:</label>
              <Input
                type="number"
                placeholder="0"
                value={item.quantity}
                onChange={(e) =>
                  handleItemChange(index, "quantity", Number(e.target.value))
                }
                className="w-full text-secondary font-medium"
              />
            </div>

            {/* Rate */}
            <div className="col-span-2 p-6">
              <label className="font-semibold block">Rate:</label>
              <Input
                type="number"
                placeholder="0"
                value={item.rate}
                onChange={(e) =>
                  handleItemChange(index, "rate", Number(e.target.value))
                }
                className="w-full text-secondary font-medium"
              />
            </div>

            {/* Total */}
            <div className="col-span-6 p-6 pt-0">
              <label className="font-semibold block mb-1">Total:</label>
              <p className="text-xl font-bold text-secondary">
                ${item.total?.toFixed(2) || "0.00"}
              </p>
            </div>

            {/* Optional: Description text area */}
            <div className="col-span-6 p-6 pt-0">
              <label className="font-semibold block mb-1">Description:</label>
              <Textarea
                placeholder="More details (optional)"
                value={item.notes || ""}
                onChange={(e) =>
                  handleItemChange(index, "notes", e.target.value)
                }
                className="w-full text-secondary font-medium"
              />
            </div>
            {/* Delete Item */}

            <div className="col-span-6 p-6 pt-0 flex justify-end ">
              <button
                onClick={() => handleRemoveItem(index)}
                className="bg-red-500 text-primary py-2 px-4   flex items-center gap-0.5 rounded-md hover:bg-red-700 transition duration-300 ... disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={invoiceData.items.length === 1}
              >
                <img src={trash} />
                <span className="font-semibold">Remove Item</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Item */}
      <div className="mt-6">
        <button
          onClick={handleAddItem}
          className="bg-green-600 text-primary text-xl py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
        >
          + Add Item
        </button>
      </div>

      {/* Next Step Button */}
      <div className="flex justify-end">
        <button
          type="button"
          className="relative group mt-7 w-[120px] h-[36px]"
          onClick={goToNextStep}
        >
          <span className="absolute inset-0 bg-white rounded-lg transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          <div className="relative bg-[#e27b7c] border-2 border-[#e27b7c] text-white rounded-lg w-full h-full flex items-center justify-center gap-1 px-2">
            <img src={startbtn} alt="Next button" className="w-3 h-3" />
            <span className="text-sm">Next</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default ItemsSection;
