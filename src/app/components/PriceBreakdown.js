"use client";
import Image from "next/image";

const PriceBreakdown = ({ price }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  return (
    <div
      className="bg-white p-4 rounded-lg shadow-sm"
      data-testid="price-breakdown-seamless"
    >
      <h2 className="text-lg font-semibold text-gray-900">Price details</h2>
      <div className="border-b border-gray-200 py-2 flex items-center relative">
        <Image
          src="https://ik.imagekit.io/tvlk/image/imageResource/2024/03/26/1711424208702-51d47a52ffd6c851ab96e4add347ea25.png"
          alt="Discount Icon"
          width={16}
          height={16}
          priority
          className="object-fill"
        />
        <p className="text-blue-500 text-sm ml-2">
          Don’t miss the chance! Log in now to enjoy our exclusive new user
          coupon and save up to Rp1.000.000 on your first booking!
        </p>
        <div className="w-3 h-3 absolute bg-gray-100 -left-4 rounded-r-full"></div>
        <div className="w-3 h-3 absolute bg-gray-100 -right-4 rounded-l-full"></div>
      </div>

      <div className="py-2 flex justify-between">
        <span className="text-gray-700">Room Price</span>
        <span className="text-gray-900 font-semibold">
          {formatCurrency(parseFloat(price))}
        </span>
      </div>

      <div className="py-2 flex justify-between">
        <span className="text-gray-700">Taxes and Fees</span>
        <span className="text-gray-900 font-semibold">
          {formatCurrency(parseFloat(price) * 0.1)}
        </span>
      </div>

      <div className="py-2 flex justify-between border-t border-gray-200 mt-2 pt-2">
        <span className="text-lg font-semibold text-gray-900">Total Price</span>
        <span className="text-lg font-semibold text-orange-500">
          {formatCurrency(parseFloat(price) + parseFloat(price) * 0.1)}
        </span>
      </div>

      <div className="text-blue-500 text-sm mt-2">
        You won’t be charged yet!
      </div>

      <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-orange-600">
        Continue to Payment
      </button>

      <p className="text-sm text-gray-600 mt-2">
        By continuing to payment, you agree to Traveloka's{" "}
        <a href="/en-id/termsandconditions" className="text-blue-500">
          Terms & Conditions
        </a>
        ,{" "}
        <a href="/en-id/privacypolicy" className="text-blue-500">
          Privacy Policy
        </a>
        , and{" "}
        <a href="/en-id/refund/hotel" className="text-blue-500">
          Accommodation Refund Procedure
        </a>
        .
      </p>
    </div>
  );
};

export default PriceBreakdown;
