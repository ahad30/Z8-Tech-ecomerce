import img from "../../../assets/section/product.png";

const Ads = () => {
  return (
    <div className="mt-20">
      <div className="bg-online-shopping h-[400px] bg-cover"></div>
      <div className="grid grid-cols-2 mt-32">
        {/* img */}
        <div>
          <img src={img} className="" alt="" />
        </div>
        {/* content */}
        <div className="flex flex-col justify-end">
          <div>
            {" "}
            <p className="text-[#B70223] font-bold text-2xl">$299.60</p>
            <h1 className="font-bold text-3xl mt-2">
              Pinkol Enormous Granite Bottle
            </h1>
            <p className="my-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              textLorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text
            </p>
            <hr className="w-[190px] h-1 bg-primary"></hr>
          </div>
          <div className="mt-10">
            <p className="font-normal text-base">
              Remains until the end of the offer
            </p>
            <div className="flex mt-2 gap-x-12">
              <div className=" text-center">
                <h3 className="font-bold text-[40px] text-[#FF0000]">25</h3>
                <p className="font-normal mt-1 text-base">Days</p>
              </div>
              <div className=" text-center">
                <h3 className="font-bold text-[40px] text-[#FF0000]">01</h3>
                <p className="font-normal mt-1 text-base">Hour</p>
              </div>
              <div className=" text-center">
                <h3 className="font-bold text-[40px] text-[#FF0000]">35</h3>
                <p className="font-normal mt-1 text-base">Minutes</p>
              </div>
              <div className=" text-center">
                <h3 className="font-bold text-[40px] text-[#FF0000]">5</h3>
                <p className="font-normal mt-1 text-base">Second</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
