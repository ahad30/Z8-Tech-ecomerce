import img1 from "../../assets/google play/f-app 1.png";
import img from "../../assets/google play/f-google 1.png";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#600451] h-[351px] flex mt-10 ">
        <div className="px-14">
          <p className="text-2xl font-semibold text-white pt-8">Z8 eComerce</p>
          <p className="w-[320px] pt-4 text-white text-[16px]">
            Elegant pink origami design three dimensional view and decoration
            co-exist. Great for adding a decorative touch to any room’s decor.
          </p>
          <p className="pt-5 text-white">Enter email address</p>
          <p className="border w-[270px] h-[40px] p-2 text-white mt-3">Email</p>
        </div>
        <div className="pl-36 text-white">
          <p className="pt-8 underline">Information</p>
          <ul className="gap-2 font-semibold">
            <li className="mb-3 mt-4">Custom service</li>
            <li className="mb-3 mt-4">FAQs</li>
            <li className="mb-3 mt-4">Ordering Tracking</li>
            <li className="mb-3 mt-4">Contact</li>
            <li className="mb-3 mt-4">Events</li>
          </ul>
        </div>
        <div className="pl-36 text-white">
          <p className="pt-8 underline">Information</p>
          <ul className="gap-2">
            <li className="mt-2">Custom service</li>
            <li className="mb-3 mt-4">FAQs</li>
            <li className="mb-3 mt-4">Ordering Tracking</li>
            <li className="mb-3 mt-4">Contact</li>
            <li className="mb-3 mt-4">Events</li>
          </ul>
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
