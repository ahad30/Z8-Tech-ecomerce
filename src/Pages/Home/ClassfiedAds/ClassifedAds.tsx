import imgBanner from "../../../assets/Top-seller/Rectangle 4289.png";
import cameraImg from "../../../assets/Top-seller/Rectangle 4330.png";
const ClassfiedProduct = [
  {
    img: cameraImg,
    description:
      "Lorem ipsum dolor sit amet  vitae leo adipiscing venenatis ornare viverra vitae egestas.",
    price: 130,
    status: "Used",
  },
  {
    img: cameraImg,
    description:
      "Lorem ipsum dolor sit amet  vitae leo adipiscing venenatis ornare viverra vitae egestas.",
    price: 60,
    status: "New",
  },
  {
    img: cameraImg,
    description:
      "Lorem ipsum dolor sit amet  vitae leo adipiscing venenatis ornare viverra vitae egestas.",
    price: 130,
    status: "Used",
  },
];
const ClassifedAds = () => {
  return (
    <div className="mt-20">
      {/* banner */}
      <div>
        <img className="object-cover" src={imgBanner} alt="" />
      </div>
      {/* title */}
      <div className="mt-24 mb-12 flex justify-between items-center">
        <h2 className="font-bold text-4xl">
          Classified <span className="text-primary">Ads</span>
        </h2>
        <p className="text-primary text-sm font-normal">View All Products </p>
      </div>

      {/* card */}
      <div className="grid grid-cols-3  gap-x-3 ">

        {ClassfiedProduct?.map((item, index) => {
          return (
            <div className="flex items-center gap-x-3 border p-3">
              <div className="w-[60%]">
                <img className="w-full" src={item.img} alt="" />
              </div>
              <div className="w-full">
                <p>{item.description}</p>
                <p className="my-3 text-[#B70223] font-normal text-sm">${item?.price}</p>
                <div className="flex gap-x-3 text-center mt-2 items-center">
                  <button
                    className={`${
                      index === 0 && item.status === "Used"
                        ? "bg-[#f8df9e]"
                        : item?.status === "New"
                        ? "border border-[#04C85E]"
                        : item?.status === "Used"
                        ? " border border-[#EDAB00]"
                        : ""
                    } w-[83px] h-[28px] rounded-[6px]`}
                  >
                    {item?.status}
                  </button>
                  <button className="border border-primary w-[83px] h-[28px] rounded-[6px]">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassifedAds;
