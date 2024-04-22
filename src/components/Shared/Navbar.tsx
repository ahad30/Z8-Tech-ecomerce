import { Link } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-primary py-4 ">
      <div className="flex justify-between items-center max-w-[80%] mx-auto">
        {/* text part */}
        <div className=" flex gap-x-5 items-center">
          <p className="text-white font-semibold text-[18px] ">
            Welcome to our international shop! Enjoy free shipping on orders
            $100 & up
          </p>
          <p className="text-[#FF0935] flex items-center gap-x-1 border-b border-[#FF0935] text-xs font-bold"><Link to={"#"}>Shop now</Link> <MdOutlineArrowRightAlt size={17}></MdOutlineArrowRightAlt></p>
        </div>
        {/* icon part */}
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
