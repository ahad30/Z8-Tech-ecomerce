import image1 from "../../../assets/Selling/Chair.png";
import image2 from "../../../assets/Selling/watch.png";
import { MdOutlineFavorite } from "react-icons/md";
import { PiArrowsLeftRightLight } from "react-icons/pi";
import { MdOutlineShoppingCart } from "react-icons/md";
const selling = [
  {
    img: image1,
    title: "Large Green Bell Pepper",
    price: "363.00",
    discount: "4",
  },
  { img: image2, title: "Large Green Bell Pepper", price: "363.00" },
  { img: image1, title: "Large Green Bell Pepper", price: "363.00" },
  { img: image2, title: "Large Green Bell Pepper", price: "363.00" },
];
const Selling = () => {
  return (
    <>
      <div className="mt-16">
        <div>
          <h1 className="font-bold text-4xl text-primary">Best Selling</h1>
          <div className="text-end">
            <button className="border px-3 py-1 rounded">
              View all products
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mt-6">
          {selling.map((item) => (
            <div className={`min-h-[100px] w-full relative`}>
              <img src={item.img} alt={item.img} className={`size-72`} />
              <p className="mt-2 text-[14px] font-normal text-[#000000]">
                {item?.title}
              </p>
              <p className="text-[#000000] font-bold text-lg">${item?.price}</p>
              {item?.discount && (
                <span className="absolute top-2 left-2 bg-[#FF0202] text-white  w-[29px] h-[17px] text-[12px]">
                  -{item?.discount}%
                </span>
              )}
              {item?.discount && (
                <span className="absolute top-4 right-2 bg-white text-[#FF0202]  w-[24px] h-[24px] text-[12px]">
                  <MdOutlineFavorite className="absolute top-1 left-0.5 w-5 h-4" />
                </span>
              )}
              {item?.discount && (
                <span className="absolute top-12 right-2 bg-white text-[#928D8D]  w-[24px] h-[24px] text-[12px]">
                  <PiArrowsLeftRightLight className="absolute top-1 left-0.5 w-5 h-4" />
                </span>
              )}
              {item?.discount && (
                <span className="absolute top-20 right-2 bg-white text-[#928D8D]  w-[24px] h-[24px] text-[12px]">
                  <MdOutlineShoppingCart className="absolute top-1 left-0.5 w-5 h-4" />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Selling;
