"use client";

import { useState } from "react";
import GuestSelection from "./GuestSelection";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-black font-bold text-xl">
          Contact Details (for E-voucher)
        </h2>
        <p className="text-gray-500 text-md">
          Please fill in all fields correctly to ensure you receive the booking
          confirmation voucher in your email.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-gray-500 text-md">
            Full Name (as in Passport/Official ID Card)
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded-md"
          />
          <span className="text-gray-500 text-md">
            Please use only alphabet (A-Z), without title, special characters,
            and punctuation.
          </span>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 w-1/2 flex-initial">
            <label className="text-gray-500 text-md">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
            <span className="text-gray-500 text-md">
              We will send the e-voucher to this email.
            </span>
          </div>
          <div className="flex flex-col gap-2 w-1/2 flex-initial">
            <label className="text-gray-500 text-md">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
            <span className="text-gray-500 text-md">
              e.g. +6212345678, for Country Code (+62) and Mobile No. 12345678.
            </span>
          </div>
        </div>
        <GuestSelection />
      </div>
    </div>
  );
}
