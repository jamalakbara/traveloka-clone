"use client";

import Image from "next/image";
import HotelIcon from "./HotelIcon";
import StarIcon from "./StarIcon";
import MapLocationIcon from "./MapLocationIcon";
import Link from "next/link";

const HotelCard = ({
  banner,
  hotelName,
  type,
  ratings = 5,
  features,
  discountedPrice,
  originalPrice,
}) => {
  const handleSelectRoom = () => {
    const query = new URLSearchParams({
      banner,
      hotelName,
      type,
      ratings,
      features: JSON.stringify(features),
      discountedPrice,
      originalPrice,
    }).toString();

    window.location.href = `/book?${query}`;
  };

  return (
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden w-full border border-gray-200">
      <div className="relative w-1/4 flex-none h-40">
        {banner && (
          <Image
            src={banner}
            alt={hotelName || "Hotel Name"}
            layout="fill"
            objectFit="cover"
            priority
          />
        )}
      </div>

      <div className="p-4 flex w-1/2 flex-initial">
        <div className="flex flex-col flex-1">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {hotelName || "Hotel Name"}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-sm text-[#0264c8]">
              <HotelIcon fill="#0264c8" />
              <span>{type || "Hotel"}</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(ratings)].map((_, index) => (
                <StarIcon key={index} fill="#FFD700" />
              ))}
            </div>
          </div>
          <div className="flex items-center text-sm text-black font-medium gap-2">
            <MapLocationIcon size={16} className="text-black font-medium" />
            <p>Buahbatu, Bandung</p>
          </div>
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-black font-medium">
            {features.map((feature, index) => (
              <span
                key={index}
                className="bg-[#f2f3f3] px-2 py-1 text-xs font-medium rounded-md"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4 items-end justify-end w-1/4 flex-initial">
        <div className="flex flex-col items-end">
          {originalPrice && (
            <p className="text-xs line-through text-gray-500">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(originalPrice)}
            </p>
          )}
          {discountedPrice && (
            <p className="text-xl font-semibold text-red-500">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(discountedPrice)}
            </p>
          )}
          <p className="text-xs text-gray-500">Exclude taxes & fees</p>
        </div>
        {/* CTA Button */}
        <button
          className="bg-orange-500 text-white font-semibol py-2 px-4 rounded-md hover:bg-orange-600 transition"
          onClick={handleSelectRoom}
        >
          Select Room
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
