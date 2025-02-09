import Image from "next/image";
import FilterCard from "../components/FilterCard";
import PriceRangeCard from "../components/PricingRangeCard";
import HotelCard from "../components/HotelCard";

const Page = () => {
  const popular_filters = [
    { id: "promo_domestik", label: "Promo Domestik", count: 18 },
    {
      id: "guest_rating",
      label: "8+ Impressive",
      count: 976,
      isImage: true,
      imageUrl:
        "https://ik.imagekit.io/tvlk/image/imageResource/2024/05/13/1715575537757-bd1da2ee301db8484323683cd53fb78b.png",
    },
    {
      id: "star_5",
      label: "5 Stars",
      count: 39,
      isImage: true,
      imageUrl:
        "https://ik.imagekit.io/tvlk/image/imageResource/2024/05/13/1715575526353-f84706e8ff60eebdb59c3e338fe33e4b.png",
    },
    {
      id: "star_4",
      label: "4 Stars",
      count: 181,
      isImage: true,
      imageUrl:
        "https://ik.imagekit.io/tvlk/image/imageResource/2024/05/13/1715575526353-f84706e8ff60eebdb59c3e338fe33e4b.png",
    },
    {
      id: "star_3",
      label: "3 Stars",
      count: 971,
      isImage: true,
      imageUrl:
        "https://ik.imagekit.io/tvlk/image/imageResource/2024/05/13/1715575526353-f84706e8ff60eebdb59c3e338fe33e4b.png",
    },
  ];

  const promo_filters = [
    { id: "promo_for_you", label: "Promo for You", count: 163 },
    { id: "extra_benefit", label: "Extra Benefit", count: 57 },
    { id: "promo_domestik", label: "Promo Domestik", count: 18 },
    { id: "best_price", label: "Best Price", count: 16 },
  ];

  const hotels = [
    {
      banner:
        "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10002404-1280x718-FIT_AND_TRIM-1b3c8363682b1c1f75dcfdfad3a29964.jpeg?_src=imagekit&tr=f-jpg,fo-auto,h-161,pr-true,q-80,w-300",
      hotelName: "The Trans Luxury Hotel",
      type: "Hotels",
      ratings: 5,
      features: [
        "Kids Club",
        "Massage",
        "Fitness Center",
        "Business Facilities",
        "Sauna",
        "Bar",
      ],
      discountedPrice: 1000000,
      originalPrice: 1500000,
    },
    {
      banner:
        "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10002404-1280x718-FIT_AND_TRIM-1b3c8363682b1c1f75dcfdfad3a29964.jpeg?_src=imagekit&tr=f-jpg,fo-auto,h-161,pr-true,q-80,w-300",
      hotelName: "Hotel Indonesia Kempinski",
      type: "Hotels",
      ratings: 5,
      features: [
        "Spa",
        "Swimming Pool",
        "Fitness Center",
        "Business Facilities",
        "Sauna",
        "Bar",
      ],
      discountedPrice: 1200000,
      originalPrice: 1800000,
    },
    {
      banner:
        "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10002404-1280x718-FIT_AND_TRIM-1b3c8363682b1c1f75dcfdfad3a29964.jpeg?_src=imagekit&tr=f-jpg,fo-auto,h-161,pr-true,q-80,w-300",
      hotelName: "Raffles Jakarta",
      type: "Hotels",
      ratings: 5,
      features: [
        "Spa",
        "Swimming Pool",
        "Fitness Center",
        "Business Facilities",
        "Sauna",
        "Bar",
      ],
      discountedPrice: 1400000,
      originalPrice: 2000000,
    },
    {
      banner:
        "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10002404-1280x718-FIT_AND_TRIM-1b3c8363682b1c1f75dcfdfad3a29964.jpeg?_src=imagekit&tr=f-jpg,fo-auto,h-161,pr-true,q-80,w-300",
      hotelName: "Fairmont Jakarta",
      type: "Hotels",
      ratings: 5,
      features: [
        "Spa",
        "Swimming Pool",
        "Fitness Center",
        "Business Facilities",
        "Sauna",
        "Bar",
      ],
      discountedPrice: 1300000,
      originalPrice: 1900000,
    },
    {
      banner:
        "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10002404-1280x718-FIT_AND_TRIM-1b3c8363682b1c1f75dcfdfad3a29964.jpeg?_src=imagekit&tr=f-jpg,fo-auto,h-161,pr-true,q-80,w-300",
      hotelName: "Mandarin Oriental Jakarta",
      type: "Hotels",
      ratings: 5,
      features: [
        "Spa",
        "Swimming Pool",
        "Fitness Center",
        "Business Facilities",
        "Sauna",
        "Bar",
      ],
      discountedPrice: 1500000,
      originalPrice: 2100000,
    },
  ];

  return (
    <div className="flex gap-4 px-52 py-8 bg-gray-100">
      <div className="w-1/6 flex flex-col gap-4">
        <div
          tabIndex={0}
          className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1uzo8ef r-1i6wzkk r-lrvibr r-184en5c"
          style={{ transitionDuration: "0s" }}
        >
          <div className="" id="explore-map">
            <div className="relative">
              <Image
                src="https://ik.imagekit.io/tvlk/image/imageResource/2024/09/05/1725509884357-7c1a5596fb0e685b4d41bee6ba3b3edd.svg?tr=q-75"
                alt="Explore Map"
                layout="responsive"
                width={462.5}
                height={187.5}
                style={{
                  position: "relative",
                  objectFit: "cover",
                }}
                priority
              />
              <div className="flex flex-col items-center gap-4 absolute top-0 left-0 w-full h-full p-4">
                <div className="css-1dbjc4n r-1awozwy r-bnwqim">
                  <Image
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2023/11/16/1700131234701-4b2708ab9c8da08fbcd18fc444610aa6.png?tr=q-75"
                    alt="Logo"
                    width={36}
                    height={36}
                  />
                </div>
                <button className="rounded-full bg-gradient-to-br from-[#024590] via-[#0071CE] to-[#0A9AF2] py-2 px-4 text-white font-semibold">
                  Explore on Map
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <PriceRangeCard />
        </div>
        <div>
          <FilterCard filterName={"Popular Filter"} filters={popular_filters} />
        </div>
        <div>
          <FilterCard filterName={"Promo & Discount"} filters={promo_filters} />
        </div>
      </div>
      <div className="w-5/6 flex flex-col gap-4">
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
            Log in/register to start earning rewards and manage your booking
            more easily.
          </div>

          <button
            className="text-blue-500 text-sm font-semibold hover:underline"
            data-testid="action-link"
          >
            Log In/Register
          </button>
        </div>
        <div className="flex flex-col gap-4 shadow-md">
          {hotels.map((hotel, index) => (
            <HotelCard key={index} {...hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
