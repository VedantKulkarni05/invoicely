import React from "react";
import startbtn from "../assets/StartBtn.svg";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea";

const ItemsSection = ({ goToNextStep, invoiceData, setInvoiceData }) => {
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...invoiceData.items];
    updatedItems[index][field] = value;

    // Auto-calculate total on quantity or rate change
    if (field === "quantity" || field === "rate") {
      const qty = Number(updatedItems[index].quantity || 0);
      const rate = Number(updatedItems[index].rate || 0);
      updatedItems[index].total = qty * rate;
    }

    setInvoiceData((prev) => ({
      ...prev,
      items: updatedItems,
    }));
  };

  return (
    <>
      <h1 className="text-3xl font-semibold mb-6">Items:</h1>
      <div className="space-y-6">
        {invoiceData.items.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-6 border text-primary rounded-md"
          >
            {/* Name */}
            <div className="col-span-2 p-10">
              <label htmlFor={`name-${index}`} className="font font-semibold">
                Name:
              </label>
              <Input
                id={`name-${index}`}
                placeholder="Item Name"
                value={item.name}
                onChange={(e) =>
                  handleItemChange(index, "name", e.target.value)
                }
                className="w-3xs text-secondary font-medium"
              />
            </div>

            {/* Quantity */}
            <div className="col-span-2 p-10">
              <label htmlFor={`qty-${index}`} className="font font-semibold">
                Quantity:
              </label>
              <Input
                id={`qty-${index}`}
                type="number"
                placeholder="0"
                value={item.quantity}
                onChange={(e) =>
                  handleItemChange(index, "quantity", Number(e.target.value))
                }
                className="w-3xs text-secondary font-medium"
              />
            </div>

            {/* Rate */}
            <div className="col-span-2 p-10">
              <label htmlFor={`rate-${index}`} className="font font-semibold">
                Rate:
              </label>
              <Input
                id={`rate-${index}`}
                type="number"
                placeholder="0"
                value={item.rate}
                onChange={(e) =>
                  handleItemChange(index, "rate", Number(e.target.value))
                }
                className="w-3xs text-secondary font-medium"
              />
            </div>

            {/* Total */}
            <div className="col-span-2 p-10">
              <label
                htmlFor={`total-${index}`}
                className="font font-semibold text-2xl"
              >
                Total:
                <p className="text-3xl text-secondary font-medium">
                  ${item.total?.toFixed(2) || "0.00"}
                </p>
              </label>
            </div>

            {/* Description */}
            <div className="col-span-1 p-10">
              <label htmlFor={`desc-${index}`} className="font font-semibold">
                Description:
              </label>
              <Textarea
                id={`desc-${index}`}
                placeholder="Description"
                value={item.description}
                onChange={(e) =>
                  handleItemChange(index, "description", e.target.value)
                }
                className="w-3xs text-secondary font-medium"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className="flex justify-end">
        <button
          type="button"
          className="relative group mt-7 w-[120px] h-[36px]"
          onClick={goToNextStep}
        >
          <span className="absolute inset-0 bg-[#ffffff] rounded-lg transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
