import { Link } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter , FaLinkedin , FaBehance , FaYoutube} from "react-icons/fa";





const Navbar = () => {
  return (
    <div className="bg-primary py-4 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* text part */}
        <div className=" flex gap-x-5 items-center">
          <p className="text-white font-semibold text-[18px] ">
            Welcome to our international shop! Enjoy free shipping on orders
            $100 & up
          </p>
          <p className="text-[#FF0935] flex items-center gap-x-1 border-b border-[#FF0935] text-xs font-bold">
            <Link to={"#"}>Shop now</Link>{" "}
            <MdOutlineArrowRightAlt size={17}></MdOutlineArrowRightAlt>
          </p>
        </div>
        {/* icon part */}
        <div className="flex items-center gap-x-12 justify-between">
          {/* language */}
          <div className="font-bold text-base flex items-center gap-x-12 text-white">
            <div className="flex gap-x-1 items-center">
              <p>USD</p>
              <IoIosArrowDown size={20}></IoIosArrowDown>
            </div>
            <div className="flex gap-x-1 items-center">
              <p>English</p>
              <IoIosArrowDown size={20}></IoIosArrowDown>
            </div>
          </div>
          {/* icon */}
          <div className="text-white flex items-center gap-x-3">
            <IoLogoFacebook size={20} className=""></IoLogoFacebook>
            <FaTwitter size={18}></FaTwitter>
            <FaBehance size={18}></FaBehance>
            <FaYoutube size={18}></FaYoutube>
            <FaLinkedin size={18}></FaLinkedin>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
