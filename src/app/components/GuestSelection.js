"use client";
import { useState } from "react";

const GuestSelection = () => {
  const [selected, setSelected] = useState("guest");

  return (
    <div
      role="radiogroup"
      aria-labelledby="guest_contact_option"
      className="flex gap-2"
    >
      {/* Primary Guest Option */}
      <label
        className={`flex items-center gap-3 rounded-md cursor-pointer transition duration-300`}
      >
        <input
          type="radio"
          name="guestSelection"
          value="guest"
          checked={selected === "guest"}
          onChange={() => setSelected("guest")}
          className="hidden"
        />
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selected === "guest"
              ? "border-blue-500 bg-blue-500"
              : "border-gray-400"
          }`}
        >
          {selected === "guest" && (
            <div className="w-2.5 h-2.5 bg-white rounded-full" />
          )}
        </div>
        <span className="text-gray-900">I am the guest</span>
      </label>

      {/* Secondary Guest Option */}
      <label
        className={`flex items-center gap-3 p-3 rounded-md cursor-pointer transition duration-300`}
      >
        <input
          type="radio"
          name="guestSelection"
          value="other"
          checked={selected === "other"}
          onChange={() => setSelected("other")}
          className="hidden"
        />
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selected === "other"
              ? "border-blue-500 bg-blue-500"
              : "border-gray-400"
          }`}
        >
          {selected === "other" && (
            <div className="w-2.5 h-2.5 bg-white rounded-full" />
          )}
        </div>
        <span className="text-gray-900">I'm booking for another person</span>
      </label>
    </div>
  );
};

export default GuestSelection;
