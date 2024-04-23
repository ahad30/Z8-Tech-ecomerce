import img1 from "../../assets/google play/f-app 1.png";
import img from "../../assets/google play/f-google 1.png";
import { IoLogoFacebook } from "react-icons/io5";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiBehance } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#600451] h-[351px] flex mt-10 ">
        <div className="px-20">
          <p className="text-2xl font-semibold text-white pt-12">Z8 eComerce</p>
          <p className="w-[320px] pt-4 text-white text-[16px]">
            Elegant pink origami design three dimensional view and decoration
            co-exist. Great for adding a decorative touch to any room’s decor.
          </p>
          <p className="pt-5 text-white">Enter email address</p>
          <p className="border w-[270px] h-[40px] p-2 text-white mt-3">Email</p>
        </div>
        <div></div>
        <div className="pl-32 text-white text-sm">
          <p className="pt-14 underline text-[16px] font-semibold">
            Information
          </p>
          <ul className="text-[12px]">
            <li className="mb-3 mt-4">Custom service</li>
            <li className="mb-3 mt-4">FAQs</li>
            <li className="mb-3 mt-4">Ordering Tracking</li>
            <li className="mb-3 mt-4">Contact</li>
            <li className="mb-3 mt-4">Events</li>
          </ul>
        </div>
        <div className="pl-12 text-white text-sm">
          <p className="pt-14 underline text-[16px]">My Account</p>
          <ul className="text-[12px]">
            <li className=" mb-3 mt-4">Delivery Information</li>
            <li className="mb-3 mt-4">Privacy Policy</li>
            <li className="mb-3 mt-4">Discount</li>
            <li className="mb-3 mt-4">Custom service</li>
            <li className="mb-3 mt-4">Terms & Condition</li>
          </ul>
        </div>
        <div className="pl-12 text-white text-sm">
          <p className="pt-14 underline text-[16px]">Social Network</p>
          <ul className="text-[12px]">
            <li className="mb-3 mt-4 flex gap-2">
              <IoLogoFacebook className="w-[18px] h-[18px]" />
              Facebook
            </li>
            <li className="mb-3 mt-4 flex  gap-2">
              <FaDribbble className="w-[18px] h-[18px]" />
              Dribble
            </li>
            <li className="mb-3 mt-4 flex  gap-2">
              <FaTwitter className="w-[18px] h-[18px]" />
              Twitter
            </li>
            <li className="mb-3 mt-4 flex gap-2">
              <SiBehance className="w-[18px] h-[18px]" />
              Behance
            </li>
            <li className="mb-3 mt-4 flex  gap-2">
              <FaYoutube className="w-[18px] h-[18px]" />
              Youtube
            </li>
          </ul>
        </div>
        <div className="pl-12 text-white">
          <p className="pt-14 underline mb-3">Get Newsletter</p>
          <p className="w-[226px] h-[46px] mt-3 text-[16px]">
            Get on the list and get 10% off your first order!
          </p>
          <p className="mt-24 border w-[216px] h-[60px] text-center m-auto pt-4 rounded-lg text-xl">
            Subscribe now
          </p>
        </div>
      </div>
      <div className="mt-10 border border-[#600451]"></div>
      <div className="lg:px-10 px-2 lg:py-5 py-2 justify-between flex">
        <div>
          <p className="lg:w-[167px]">
            000. 000. 000. 00 Working 00:00 - 00:00
          </p>
        </div>
        <div>
          <p className="lg:w-[220px] w-[200px] font-semibold">
            Download App on Mobile{" "}
          </p>
          <p className="text-gray-500 text-[15px]">
            15% discount on your first purchase
          </p>
          <p className="flex gap-2 mt-3">
            <img src={img} className="w-[90px]" />
            <img src={img1} className="w-[90px]" />
          </p>
        </div>
      </div>
      <div className="border bg-[#2B2828] h-[60px]">
        <p className="lg:px-10 px-5 lg:py-4 py-2 text-white text-[15px] text-center lg:text-left ">
          Your experience on this site will be improved by allowing cookies
        </p>
      </div>
    </div>
  );
};

export default Footer;
