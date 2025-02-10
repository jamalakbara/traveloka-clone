// app/search/page.js
"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import HotelIcon from "../components/HotelIcon";
import ContactForm from "../components/ContactForm";
import GuestOption from "../components/GuestOption";
import PriceBreakdown from "../components/PriceBreakdown";
import CancellationPolicy from "../components/CancellationPolicy";
import HotelInfo from "../components/HotelInfo";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [hotel, setHotel] = useState({
    banner: searchParams.get("banner"),
    hotelName: searchParams.get("hotelName"),
    type: searchParams.get("type"),
    ratings: searchParams.get("ratings"),
    features: JSON.parse(searchParams.get("features") || "[]"),
    discountedPrice: searchParams.get("discountedPrice"),
    originalPrice: searchParams.get("originalPrice"),
  });

  return (
    <div className="flex gap-4 px-52 py-8 bg-gray-100">
      <div className="flex flex-col gap-4 w-3/4 flex-initial">
        <GuestOption />
        <ContactForm />
        <PriceBreakdown price={hotel.discountedPrice} />
      </div>
      <div className="flex flex-col gap-4 w-1/4 flex-initial">
        <HotelInfo {...hotel} />
        <CancellationPolicy />
      </div>
    </div>
  );
}
