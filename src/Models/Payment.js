import React, { useState, useEffect } from "react";
import axios from "axios";

const Payment = ({ visible, onClose, amount }) => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [areaName, setAreaName] = useState("");
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [locationLoader, setLocationLoader] = useState(false);

  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [visible]);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setError(null);
          setLocationLoader(true);

          try {
            const response = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const address = response.data.display_name;
            setAreaName(address || "Area name not found");
          } catch (err) {
            setError("Failed to fetch area name");
          } finally {
            setLocationLoader(false);
          }
        },
        (err) => setError(err.message)
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm z-50 p-4">
      <div
        className="
          bg-white rounded-xl shadow-2xl flex flex-col justify-evenly items-center
          w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%]
          h-[90%] max-h-[750px] overflow-y-auto
          py-6
        "
      >
        {/* Header */}
        <div className="w-[90%] flex justify-between items-center mb-2">
          <p className="text-2xl font-semibold">Payment Method</p>
          <button
            onClick={onClose}
            className="text-2xl font-semibold text-gray-700 hover:text-gray-900 transition"
          >
            ✕
          </button>
        </div>

        {/* Card Info */}
        <div className="w-[90%] border-2 border-blue-600 rounded-2xl flex flex-col justify-evenly items-center gap-4 p-4 relative">
          <h3 className="absolute -top-4 left-5 bg-white px-2 text-xl text-blue-600 font-medium">
            Card Info
          </h3>

          {/* Input: Owner Name */}
          <div className="w-full relative">
            <input
              id="owner"
              name="owner"
              type="text"
              className="w-full h-10 border-2 border-gray-400 rounded-md p-2 focus:border-blue-600 outline-none peer bg-transparent"
            />
            <label
              htmlFor="owner"
              className="text-lg absolute left-2 top-1 cursor-text peer-focus:text-sm peer-focus:-top-5 transition-all bg-white px-1"
            >
              Owner Name
            </label>
          </div>

          {/* Input: Card Number */}
          <div className="w-full relative">
            <input
              id="card_number"
              name="card_number"
              type="text"
              className="w-full h-10 border-2 border-gray-400 rounded-md p-2 focus:border-blue-600 outline-none peer bg-transparent"
            />
            <label
              htmlFor="card_number"
              className="text-lg absolute left-2 top-1 cursor-text peer-focus:text-sm peer-focus:-top-5 transition-all bg-white px-1"
            >
              Card Number
            </label>
          </div>

          {/* Expiry + CVV */}
          <div className="flex flex-col sm:flex-row w-full justify-between gap-3">
            <div className="w-full sm:w-1/2 relative">
              <input
                id="expiry_date"
                name="expiry_date"
                type="text"
                className="w-full h-10 border-2 border-gray-400 rounded-md p-2 focus:border-blue-600 outline-none peer bg-transparent"
              />
              <label
                htmlFor="expiry_date"
                className="text-lg absolute left-2 top-1 cursor-text peer-focus:text-sm peer-focus:-top-5 transition-all bg-white px-1"
              >
                Expiry Date
              </label>
            </div>
            <div className="w-full sm:w-1/2 relative">
              <input
                id="cvv"
                name="cvv"
                type="text"
                className="w-full h-10 border-2 border-gray-400 rounded-md p-2 focus:border-blue-600 outline-none peer bg-transparent"
              />
              <label
                htmlFor="cvv"
                className="text-lg absolute left-2 top-1 cursor-text peer-focus:text-sm peer-focus:-top-5 transition-all bg-white px-1"
              >
                CVV
              </label>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="w-[90%] flex flex-col border-b border-blue-600 pb-4">
          <div className="w-full border-b border-blue-600 mb-2">
            <p className="text-lg flex justify-between">
              Price: <span className="font-semibold">{amount}</span>
            </p>
            <p className="text-lg flex justify-between">
              Tax: <span className="font-semibold">{amount}</span>
            </p>
            <p className="text-lg flex justify-between">
              Delivery: <span className="font-semibold">{amount}</span>
            </p>
          </div>
          <p className="text-lg font-bold flex justify-between">
            Total Price: <span>{amount}</span>
          </p>
        </div>

        {/* Location */}
        <div className="w-[90%] flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="w-full sm:w-[75%] relative">
            <input
              id="location"
              name="location"
              type="text"
              value={areaName}
              disabled
              className="w-full h-10 border-2 border-gray-400 rounded-md p-2 outline-none bg-gray-50"
            />
            <label
              htmlFor="location"
              className="absolute left-2 -top-5 text-base text-gray-700"
            >
              Your Location
            </label>
          </div>

          <button
            onClick={getLocation}
            className="w-full sm:w-[25%] h-10 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all"
          >
            {locationLoader ? (
              <div className="flex justify-center items-center gap-1">
                <div className="w-3 h-3 bg-blue-200 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-200 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-200 rounded-full animate-pulse"></div>
              </div>
            ) : (
              "Get Location"
            )}
          </button>
        </div>

        {/* Confirm Button */}
        <div className="w-[90%]">
          <button className="w-full h-12 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all text-lg mt-4">
            {loader ? (
              <div className="flex justify-center items-center gap-2">
                <div className="w-3 h-3 bg-blue-200 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-200 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-200 rounded-full animate-pulse"></div>
              </div>
            ) : (
              "Confirm Payment"
            )}
          </button>
        </div>

        {/* Optional Error Message */}
        {error && (
          <p className="text-red-600 text-sm mt-2 text-center px-4">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Payment;
