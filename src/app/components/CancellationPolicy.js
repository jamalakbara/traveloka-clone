import Image from "next/image";

const CancellationPolicy = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-gray-900 flex items-center">
        <Image
          src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/377593f86d55e9458089c177e9b5723a.svg"
          alt="Policy Icon"
          width={16}
          height={16}
          priority
          className="mr-2"
        />
        Cancellation and Reschedule Policy
      </h2>

      <p className="text-sm p-4 text-gray-700 bg-[#f7f9fa] rounded-lg">
        You got it all covered! You get the most flexibility for your booking
        with this room option.
      </p>

      <div className="flex items-center gap-2 text-green-600">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8ZM12.2071 6.70711C12.5976 6.31658 12.5976 5.68342 12.2071 5.29289C11.8166 4.90237 11.1834 4.90237 10.7929 5.29289L7 9.08579L5.20711 7.29289C4.81658 6.90237 4.18342 6.90237 3.79289 7.29289C3.40237 7.68342 3.40237 8.31658 3.79289 8.70711L6.29289 11.2071C6.68342 11.5976 7.31658 11.5976 7.70711 11.2071L12.2071 6.70711Z"
            fill="#0BC175"
          />
        </svg>
        <span className="font-semibold">
          Free Cancellation before 10 Feb 2025
        </span>
      </div>

      <div className="flex items-center gap-2 text-green-600">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8ZM12.2071 6.70711C12.5976 6.31658 12.5976 5.68342 12.2071 5.29289C11.8166 4.90237 11.1834 4.90237 10.7929 5.29289L7 9.08579L5.20711 7.29289C4.81658 6.90237 4.18342 6.90237 3.79289 7.29289C3.40237 7.68342 3.40237 8.31658 3.79289 8.70711L6.29289 11.2071C6.68342 11.5976 7.31658 11.5976 7.70711 11.2071L12.2071 6.70711Z"
            fill="#0BC175"
          />
        </svg>
        <span className="font-semibold">Reschedulable</span>
      </div>

      <p className="text-blue-500 font-semibold hover:text-blue-600">
        View Details
      </p>
    </div>
  );
};

export default CancellationPolicy;
