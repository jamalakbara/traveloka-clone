"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import UserIcon from "./UserIcon";
import FlagIcon from "./FlagIcon";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const mainLinks = [
    { href: "/en-id/hotel", label: "Hotels" },
    { href: "/en-id/flight", label: "Flights" },
    { href: "/en-id/kereta-api", label: "Trains" },
    { href: "/en-id/bus-and-shuttle", label: "Bus & Travel" },
    { href: "/en-id/airport-transfer", label: "Airport Transfer" },
    { href: "/en-id/car-rental", label: "Car Rental" },
    { href: "/en-id/activities", label: "Things to Do" },
  ];

  const dropdownLinks = [
    {
      href: "/en-id/packages",
      label: "Flight + Hotel",
      icon: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/06ea0fb516489c4d9c353ec2979e6e8c.svg",
    },
    {
      href: "/en-id/insurance",
      label: "Travel Insurance",
      icon: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b5ba7b36551c2499565d55c265f5f9e7.svg",
    },
    {
      href: "/en-id/international-data",
      label: "International Data Plans",
      icon: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/43217640a8928e7daebe11d305c2494a.svg",
    },
    {
      href: "/en-id/travelokapay/paylater/account",
      label: "TPayLater",
      icon: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/350daed5305a7d6c7ffa9c66f20ea2b5.svg",
    },
    {
      href: "/en-id/destination",
      label: "Travel Guides",
      icon: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/e807cdb83ebd6fe9329c0e3ad4764265.svg",
    },
    {
      href: "/en-id/giftvoucher",
      label: "Gift Voucher",
      icon: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/e676ec2c54d3d081691ff29b7fb9a97e.svg",
    },
    {
      href: "/en-id/p/cruise",
      label: "Cruises",
      icon: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/d/d72faf61f6e354339d9f497d0bdd59fb.svg",
    },
    {
      href: "/en-id/traveloka-mandiri-card",
      label: "Traveloka Mandiri Card",
      icon: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6011bd830e65c8afc843fb4d4883b8e8.svg",
    },
  ];

  const otherLinks = [
    { href: "https://www.traveloka.com/en-id/promotion", label: "Deals" },
    { href: "/en-id/partnership", label: "Partnership" },
    {
      href: "https://corporates.ctv.traveloka.com/en-id/",
      label: "For Corporates",
    },
    { href: "/en-id/retrieve", label: "Bookings" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-transparent">
      <div className="flex items-center justify-between py-4 px-52">
        <div className="logo">
          <Link href="/en-id">
            <Image
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/fbab4f587da2242fbe9858fe3e5ba717.svg"
              width={135}
              height={43}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer text-white font-semibold py-2 px-4 rounded-lg hover:bg-[rgba(0,0,0,0.25)]">
            <FlagIcon />
            <span>EN | IDR</span>
            <Image
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/4dc239187a96e2c5b5bf278af10fe414.svg"
              width={12}
              height={12}
              alt="Dropdown"
            />
          </div>
          <div className="flex items-center gap-2 text-white font-semibold">
            {otherLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="cursor-pointer py-2 px-4 rounded-lg hover:bg-[rgba(0,0,0,0.25)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="cursor-pointer py-2 px-4 rounded-lg hover:bg-[rgba(0,0,0,0.25)]">
              Support
            </div>
          </div>
          <div className="flex items-center gap-2 text-white font-semibold">
            <div className="flex items-center gap-2 cursor-pointer py-2 px-4 rounded-lg border border-white hover:bg-[rgba(0,0,0,0.25)]">
              <UserIcon fill="white" />
              <span>Log In</span>
            </div>
            <div className="cursor-pointer py-2 px-4 rounded-lg border border-[#0194f3] bg-[#0194f3] hover:bg-[rgb(0,124,232)] hover:border-[rgb(0,124,232)]">
              <span className="text-white font-semibold">Register</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center py-2 px-52 gap-2 font-semibold text-white border-t border-b border-[rgba(255,255,255,0.1)]">
        {mainLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="cursor-pointer py-2 px-4 rounded-lg hover:bg-[rgba(0,0,0,0.25)]"
          >
            {link.label}
          </Link>
        ))}
        <div
          className={`relative cursor-pointer py-2 px-4 rounded-lg ${
            isDropdownVisible ? "bg-[rgba(0,0,0,0.25)]" : ""
          } hover:bg-[rgba(0,0,0,0.25)]`}
          onClick={toggleDropdown}
        >
          <div className="flex items-center gap-2">
            <span>More</span>
            <Image
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/4dc239187a96e2c5b5bf278af10fe414.svg"
              width={12}
              height={12}
              alt="Dropdown"
            />
          </div>
          <div
            className={`${
              isDropdownVisible ? "flex" : "hidden"
            } min-w-[256px] absolute bg-white shadow-lg z-10 rounded-xl top-8 left-0`}
          >
            <div className="flex flex-col w-full gap-1 text-gray-500">
              {dropdownLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center p-4 rounded-xl hover:bg-gray-100 gap-2"
                >
                  <Image
                    src={link.icon}
                    width={20}
                    height={20}
                    alt={link.label}
                  />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
