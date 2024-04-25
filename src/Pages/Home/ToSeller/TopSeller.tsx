import img1 from "../../../assets/Top-seller/Ellipse 217.png";
import img2 from "../../../assets/Top-seller/Ellipse 221.png";
import img3 from "../../../assets/Top-seller/Ellipse 222.png";
import img4 from "../../../assets/Top-seller/Ellipse 223.png";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

const topSellerProduct = [
  {
    title: "Ajker Deal 1",
    img: img1,
    rating: [1, 1, 1, 1, 0],
  },
  {
    title: "Ajker Deal 2",
    img: img2,
    rating: [1, 1, 1, 0, 0],
  },
  {
    title: "Ajker Deal 3",
    img: img3,
    rating: [1, 1, 1, 0, 0],
  },
  {
    title: "Ajker Deal 4",
    img: img4,
    rating: [1, 1, 0, 0, 0],
  },
];

const handleRatingCount = (i: number): number => {
  const findTheArray = topSellerProduct.find((_item, index) => index === i);
  const sumWithInitial = findTheArray?.rating?.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    },
    0
  );
  return sumWithInitial as number;
};

const TopSeller = () => {
  return (
    <div>
      <div className="mt-24 mb-12 flex justify-between items-center">
        <h2 className="font-bold text-4xl">
          Top <span className="text-primary">Seller</span>
        </h2>
        <p className="text-primary text-sm font-normal">View All seller </p>
      </div>

      <div className="grid grid-cols-4">
        {topSellerProduct?.map((item, index) => {
          return (
            <div key={index} className="flex items-center  flex-col">
              <div className="flex justify-center">
                <img src={item.img} alt="" />
              </div>
              <p className="font-semibold text-xl my-3">{item.title}</p>

              {/* rating count */}
              <div className="flex justify-between gap-x-5 items-center">
                {/* rating */}
                <div className="grid grid-cols-5 text-[#FFB905]">
                  {item?.rating?.map((item) => {
                    return item === 0 ? (
                      <IoMdStarOutline className="size-[14px]"></IoMdStarOutline>
                    ) : item === 1 ? (
                      <IoMdStar className="size-[14px]"></IoMdStar>
                    ) : (
                      ""
                    );
                  })}
                </div>
                {/* rating count */}

                <p className=" text-[#928D8D] text-xs font-semibold">{`(${handleRatingCount(
                  index
                )})`}</p>
              </div>
              <div className="text-center mt-4 text-sm">
                <button className="bg-[#decdde] w-[184px] h-[30px]">
                  Visit Store
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopSeller;
