import img1 from "../../../assets/Auction/image-01.png";
import img2 from "../../../assets/Auction/images-02.png";
import img3 from "../../../assets/Auction/images-03.png";
import img4 from "../../../assets/Auction/images-04.png";
import img5 from "../../../assets/Auction/images-05.png";
import img6 from "../../../assets/Auction/images-06.png";
import img7 from "../../../assets/Auction/images-07.png";
import img8 from "../../../assets/Auction/images-08.png";
import image1 from "../../../assets/Auction/BigSale.png";
import image2 from "../../../assets/Auction/Auction.png";
import image3 from "../../../assets/Auction/Product.png";
const product = [
  { img: img1, price: "100" },
  { img: img2, price: "120" },
  { img: img3, price: "80" },
  { img: img4, price: "90" },
  { img: img5, price: "110" },
  { img: img6, price: "95" },
  { img: img7, price: "150" },
  { img: img8, price: "70" },
];

const AuctionProduct = () => {
  return (
    <div className="mt-16">
      <div>
        <h2 className="font-bold text-4xl">
          Auction <span className="text-primary">Products</span>
        </h2>
        <div className="text-end">
          <button className="border px-3 py-1 rounded">
            View all products
          </button>
        </div>
      </div>
      <div className="flex gap-5 mt-5">
        <div className="border w-[364px] h-[373px] border-[#600451] px-28    rounded-md">
          <div className=" mt-10 ">
            <img src={image2} className=" " />
          </div>

          <img src={image1} className="w-[225px] h-[220px]" />
          <img src={image3} className=" " />
        </div>
        <div className="border w-[770px] h-[375px] border-[#600451]  rounded-md">
          <div className="grid lg:grid-cols-4  ">
            {product.map((item, index) => (
              <div className="text-center px-4 py-2">
                <img src={item.img} alt={item.img} className={`size-32`} />
                <div className="">
                  <p className="text-[#222222] font-bold text-lg    mt-3 mb-1">
                    ${item?.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionProduct;
