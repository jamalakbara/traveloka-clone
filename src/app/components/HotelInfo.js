import Image from "next/image";
import StarIcon from "./StarIcon";

const HotelInfo = ({
  banner,
  hotelName,
  type,
  ratings,
  features,
  discountedPrice,
  originalPrice,
}) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col gap-4 py-4">
      <div className="flex px-4 flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            {hotelName || "Hotel Name"}
          </h3>
          <div className="flex items-center gap-1">
            {[...Array(parseFloat(ratings))].map((_, index) => (
              <StarIcon key={index} fill="#FFD700" />
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-sm">
              <div className="text-blue-500 font-semibold">9.0</div>
              <div className="text-gray-500">(6.320)</div>
            </div>
            <div className="bg-green-300 text-green-600 text-xs font-medium p-1 rounded-md">
              Highly rated for its Cleanliness
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full flex-none h-40">
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

      <div className="flex items-center gap-4 px-4 justify-center">
        <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
          <div className="text-xs flex flex-col items-center">
            <div className="text-gray-500">Check-in</div>
            <div className="text-gray-900 font-semibold">Tue, 11 Feb 2025</div>
            <div className="text-gray-900">From 15:00</div>
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-xs">1 night</div>
          <div className="relative flex items-center justify-center">
            <div className="w-1 h-1 bg-transparent border border-gray-500 rounded-full"></div>
            <div className="h-[1px] w-full bg-gray-500"></div>
            <div className="w-1 h-1 bg-gray-500 border border-gray-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center gap-4 px-4 border border-gray-200 rounded-lg">
          <div className="text-xs flex flex-col items-center">
            <div className="text-gray-500">Check-out</div>
            <div className="text-gray-900 font-semibold">Wed, 12 Feb 2025</div>
            <div className="text-gray-900">Before 12:00</div>
          </div>
        </div>
      </div>

      <div className="px-4 flex flex-col gap-1">
        <div className="text-black font-semibold">(1x) Premier Smoking</div>
        <div className="text-sm text-red-500">In high demand!</div>
      </div>

      <div className="flex gap-2 px-4 flex-col text-semibold text-sm">
        <div className="flex items-center gap-1">
          <Image
            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/377ee1b8105881b249bd015d717ccf4f.svg"
            alt="Guests"
            width={16}
            height={16}
            className="mr-2"
          />
          <p className="text-gray-600">2 Guests</p>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/bf6a43a380752458f8ff4bcf166ccd42.svg"
            alt="Beds"
            width={16}
            height={16}
            className="mr-2"
          />
          <p className="text-gray-600">1 Double Bed or 2 Single Beds</p>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/1/135b00382831d44977ac23c92deaa778.svg"
            alt="Foods"
            width={16}
            height={16}
            className="mr-2"
          />
          <p className="text-gray-600">Without Breakfast</p>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 pt-2 flex justify-between">
        <div>
          <h4 className="text-md font-semibold text-gray-900">
            Total Room Price
          </h4>
          <p className="text-gray-500 text-sm">1 room(s), 1 night(s)</p>
        </div>
        <div className="mt-2">
          <p className="text-gray-400 line-through text-right">
            {formatCurrency(
              parseFloat(originalPrice) + parseFloat(originalPrice) * 0.1
            )}
          </p>
          <p className="text-orange-500 font-semibold text-right">
            {formatCurrency(
              parseFloat(discountedPrice) + parseFloat(discountedPrice) * 0.1
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
