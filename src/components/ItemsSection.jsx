/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import startbtn from "../assets/StartBtn.svg";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea";

const ItemsSection = ({ goToNextStep, invoiceData, setInvoiceData }) => {
  const [quantity, setquantity] = useState(0);
  const [rate, setRate] = useState(0);
  const [total, setTotal] = useState(0);

  const itemTotal = (qty, rate) => {
    const computedTotal = qty * rate;
    setTotal(computedTotal);
  };
  useEffect(() => {
    itemTotal(quantity, rate);
  }, [quantity, rate]);

  return (
    <>
      <h1 className="text-3xl font-semibold  mb-6">Items: </h1>
      <div className="space-y-6">
        <h2 className="font-semibold text-optional">#Item Number: 1</h2>
        <div className="grid grid-cols-6  border text-primary rounded-md">
          {/* for item 1 */}
          <div className="col-span-2 mb-2 p-10">
            <label htmlFor="Name " className="font font-semibold">
              Name:
            </label>
            <Input
              id="ItemName"
              placeholder="Item Name"
              // value={invoiceData.invoiceNumber}
              className="w-3xs text-secondary font-medium"
            />
          </div>
          <div className="col-span-2 mb-2 p-10">
            <label htmlFor="Quantity " className="font font-semibold">
              Quantity:
            </label>
            <Input
              id="Quantity"
              type="Number"
              placeholder="0"
              value={quantity}
              onChange={(e) => setquantity(Number(e.target.value))}
              className="w-3xs text-secondary font-medium "
            />
          </div>
          {/* Rate Section */}
          <div className="col-span-2 mb-2 p-10">
            <label htmlFor="Rate " className="font font-semibold">
              Rate:
            </label>
            <Input
              id="Rate"
              type="Number"
              placeholder="0"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-3xs text-secondary font-medium "
            />
          </div>
          {/* Total section */}
          <div className="col-span-2 mb-2 p-10">
            <label htmlFor="Total " className="font font-semibold text-2xl">
              Total:
              <p className="font font-medium text-3xl text-secondary">
                ${total?.toFixed(2)}
              </p>
            </label>
          </div>
          {/* Description Section */}
          <div className="col-span-1 mb-2 p-10">
            <label htmlFor="Description " className="font font-semibold">
              Description:
            </label>
            <Textarea
              id="Description"
              placeholder="Description"
              
              className="w-3xs text-secondary font-medium "
            />
          </div>
        </div>
      </div>

      {/* next step button */}
      <div className="flex justify-end ">
        <button
          type="button"
          className="relative group mt-7 w-[120px] h-[36px]"
          onClick={goToNextStep}
        >
          <span className="absolute inset-0 bg-[#ffffff] rounded-lg transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></span>

          <div className="relative bg-[#e27b7c] border-2 border-[#e27b7c] text-white rounded-lg w-full h-full flex items-center justify-center gap-1 px-2">
            <img src={startbtn} alt="Next button" className="w-3 h-3" />
            <span className="text-sm  ">Next</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default ItemsSection;
