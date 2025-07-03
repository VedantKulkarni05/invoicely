import React, { Component } from "react";
import startbtn from "../assets/StartBtn.svg";

const FromtoSection = ({ goToNextStep }) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        <div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white mb-2">Bill From</h2>

            {/* Name */}
            <div className="space-y-1">
              <label htmlFor="from-name" className="text-sm text-white">
                Name
              </label>
              <input
                id="from-name"
                type="text"
                placeholder="Your name"
                className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Address */}
            <div className="space-y-1">
              <label htmlFor="from-address" className="text-sm text-white">
                Address
              </label>
              <input
                id="from-address"
                type="text"
                placeholder="Your address"
                className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Zip */}
            <div className="space-y-1">
              <label htmlFor="from-Zip" className="text-sm text-white">
                zip
              </label>
              <input
                id="from-zip"
                type="number"
                placeholder="zip code"
                className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* city */}
            <div className="space-y-1">
              <label htmlFor="city" className="text-sm text-white">
                city
              </label>
              <input
                id="from-city"
                type="text"
                placeholder="Your city"
                className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Country */}

            <div className="space-y-1">
              <label htmlFor="from-country" className="text-sm text-white">
                Country
              </label>
              <input
                id="from-country"
                type="text"
                placeholder="Your Country"
                className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Email */}
            <div className="space-y-1">
              <label htmlFor="from-email" className="text-sm text-white">
                Email
              </label>
              <input
                id="from-email"
                type="email"
                placeholder="Your Email address"
                className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Phone */}
            <div className="space-y-1">
              <label htmlFor="from-phone" className="text-sm text-white">
                Phone Number
              </label>
              <input
                id="from-phone"
                type="tel"
                placeholder="Your phone number"
                className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl font-semibold text-white mb-2">Bill To</h1>
          {/* Name */}
          <div className="space-y-1">
            <label htmlFor="To-name" className="text-sm text-white">
              Name
            </label>
            <input
              id="To-name"
              type="text"
              placeholder="Receiver name"
              className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Address */}
          <div className="space-y-1">
            <label htmlFor="To-address" className="text-sm text-white">
              Address
            </label>
            <input
              id="To-address"
              type="text"
              placeholder="Receiver address"
              className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Zip */}
          <div className="space-y-1">
            <label htmlFor="To-Zip" className="text-sm text-white">
              zip
            </label>
            <input
              id="To-zip"
              type="number"
              placeholder="Receiver zip code"
              className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* city */}
          <div className="space-y-1">
            <label htmlFor="To-city" className="text-sm text-white">
              city
            </label>
            <input
              id="To-city"
              type="text"
              placeholder="Receiver city"
              className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Country */}

          <div className="space-y-1">
            <label htmlFor="To-country" className="text-sm text-white">
              Country
            </label>
            <input
              id="To-country"
              type="text"
              placeholder="Receiver Country"
              className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {/* Email */}
          <div className="space-y-1">
            <label htmlFor="To-email" className="text-sm text-white">
              Email
            </label>
            <input
              id="To-email"
              type="email"
              placeholder="Receiver Email address"
              className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {/* Phone */}
          <div className="space-y-1">
            <label htmlFor="To-phone" className="text-sm text-white">
              Phone Number
            </label>
            <input
              id="To-phone"
              type="tel"
              placeholder="Receiver phone number"
              className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>
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

export default FromtoSection;
