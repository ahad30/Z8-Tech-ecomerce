import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../../src/assets/Bannar/Rectangle 01.png";
import img2 from "../../../../src/assets/Bannar/Rectangle 02.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <div className="grid grid-cols-7   gap-x-2">
      {/* banner image */}
      <div className="col-span-6">
        <Swiper
          style={{}}
          pagination={true}
          className=""
          modules={[Pagination]}
        >
          <SwiperSlide className="">
            <div className=" flex pl-6 items-center  h-full    bg-banner-img bg-cover ">
              <div className="space-y-4 w-1/2">
                <p className="text-[24px] text-primary font-normal">Accessories</p>
                <h2 className="font-semibold leading-[64px] text-5xl">
                  Up To <span className="text-[#B70223]">20% Off</span> Latest Creations
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className=" flex pl-6 items-center  h-full    bg-banner-img bg-cover ">
              <div className="space-y-4 w-1/2">
                <p className="text-[24px] text-primary font-normal">Accessories</p>
                <h2 className="font-semibold leading-[64px] text-5xl">
                  Up To <span className="text-[#B70223]">20% Off</span> Latest Creations
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className=" flex pl-6 items-center  h-full    bg-banner-img bg-cover ">
              <div className="space-y-4 w-1/2">
                <p className="text-[24px] text-primary font-normal">Accessories</p>
                <h2 className="font-semibold leading-[64px] text-5xl">
                  Up To <span className="text-[#B70223]">20% Off</span> Latest Creations
                </h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <div className="col-span-6 border border-red-500   bg-banner-img bg-red-400"></div> */}
      <div className="col-span-1 space-y-3 ">
        <img src={img1} className="rounded-[4px]" alt="" />
        <img src={img2} className="rounded-[4px]" alt="" />
      </div>
    </div>
  );
};

export default Banner;
