"use client";
import { useState } from "react";
import Image from "next/image";
import SearchIcon from "./components/SearchIcon";
import HotelIcon from "./components/HotelIcon";
import FlightIcon from "./components/FlightIcon";
import TrainIcon from "./components/TrainIcon";
import BusIcon from "./components/BusIcon";
import AirportTransportIcon from "./components/AirportTransportIcon";
import CarRentalIcon from "./components/CarRentalIcon";
import XperienceIcon from "./components/XperienceIcon";
import Link from "next/link";

const Home = () => {
  const [activeButton, setActiveButton] = useState("Hotels");
  const [activeTab, setActiveTab] = useState("Hotels");
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("10 Feb 2025 - 11 Feb 2025");
  const [guests, setGuests] = useState("1 Adult(s), 0 Child, 1 Room");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const buttons = [
    { name: "Hotels", icon: HotelIcon },
    { name: "Flights", icon: FlightIcon },
    { name: "Trains", icon: TrainIcon },
    { name: "Bus & Travel", icon: BusIcon },
    { name: "Airport Transfer", icon: AirportTransportIcon },
    { name: "Car Rental", icon: CarRentalIcon },
    { name: "Things to Do", icon: XperienceIcon },
  ];

  const tabs = [
    { name: "Hotels", icon: HotelIcon },
    { name: "Villa", icon: HotelIcon },
    { name: "Apartment", icon: HotelIcon },
  ];

  return (
    <div>
      <div className="">
        <Image
          src="https://ik.imagekit.io/tvlk/image/imageResource/2025/01/05/1736039053734-c2b57da96ac28a1df692de44bc14660b.png?tr=q-75"
          alt="Traveloka Banner"
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="aspect-9/16 max-h-[70vh] relative object-cover"
        />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center flex flex-col gap-8 top-52">
        <div className="text-white flex flex-col gap-8">
          <h1 className="text-4xl">
            From Southeast Asia to the World, All Yours.
          </h1>
          <div className="flex justify-center gap-2 mt-4 text-lg border-b-2 border-white pb-4 text-gray-300">
            {buttons.map((button) => (
              <button
                key={button.name}
                className={`btn rounded-full border border-transparent flex items-center justify-center gap-2 p-2 w-40 transition-all duration-300 ${
                  activeButton === button.name
                    ? "bg-white text-black"
                    : "hover:border-white"
                }`}
                onClick={() => handleButtonClick(button.name)}
              >
                <button.icon
                  width={24}
                  height={24}
                  fill={activeButton === button.name ? "#00000" : "#CDD0D1"}
                />
                <span>{button.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-4 font-semibold text-white">
            {tabs.map((tab) => (
              <div
                key={tab.name}
                className={`py-2 px-4 rounded-full flex items-center gap-2 cursor-pointer transition-all duration-300 ${
                  activeTab === tab.name ? "bg-[#0194f3]" : "bg-[#03121a]"
                }`}
                onClick={() => handleTabClick(tab.name)}
              >
                <tab.icon width={15} height={15} stroke="#FFFFFF" />
                <h4>{tab.name}</h4>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex flex-col gap-4 w-full">
              <label className="text-left" htmlFor="destination">
                City, destination, or hotel name
              </label>
              <input
                id="destination"
                className="p-4 outline-none border-4 border-r-0 border-[#cdd0d1] rounded-l-xl h-[50px] text-black placeholder-gray-500 transition-all duration-300"
                type="text"
                placeholder="City, hotel, place to go"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <label className="text-left" htmlFor="dates">
                Check-in & Check-out Dates
              </label>
              <input
                id="dates"
                className="p-4 outline-none border-4 border-r-0 border-[#cdd0d1] h-[50px] text-black placeholder-gray-500 transition-all duration-300"
                type="date"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <label className="text-left" htmlFor="guests">
                Guests and Rooms
              </label>
              <input
                id="guests"
                className="p-4 outline-none border-4 border-r-0 border-[#cdd0d1] h-[50px] text-black placeholder-gray-500 transition-all duration-300"
                type="text"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="opacity-0">adaw</label>
              <Link
                href="/search"
                className="px-4 outline-none border-4 border-l-0 border-[#cdd0d1] rounded-r-xl bg-[#ff5e1f] hover:bg-[#e54d1a] active:bg-[#cc4416] h-[50px] transition-all duration-300 flex items-center justify-center"
              >
                <SearchIcon width={24} height={24} stroke="#FFFFFF" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
