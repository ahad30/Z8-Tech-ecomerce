import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-primary py-4 ">
      <div className="flex justify-between max-w-[80%] mx-auto">
        {/* text part */}
        <div className=" flex gap-x-4">
          <p className="">
            Welcome to our international shop! Enjoy free shipping on orders
            $100 & up
          </p>
          <p><Link to={"#"}>Shop now</Link></p>
        </div>
        {/* icon part */}
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
