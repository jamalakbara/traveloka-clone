import Image from "next/image";

const GuestOption = () => {
  return (
    <div
      className="flex items-center gap-4 bg-[#ECF8FF] p-4 rounded-lg shadow-md"
      data-testid="banner-item"
    >
      <Image
        src="https://ik.imagekit.io/tvlk/image/imageResource/2024/11/04/1730691581500-828ed20e6fb20a0099f04089fd66bc23.png"
        alt="Login/Register"
        width={24}
        height={24}
        priority
        className="object-fill"
      />

      <div className="flex-1 text-gray-900 text-sm font-semibold leading-5">
        Log in/register to start earning rewards and manage your booking more
        easily.
      </div>

      <button
        className="text-blue-500 text-sm font-semibold hover:underline"
        data-testid="action-link"
      >
        Log In/Register
      </button>
    </div>
  );
};

export default GuestOption;
