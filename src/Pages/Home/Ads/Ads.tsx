import img from "../../../assets/section/product.png"


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
        <div>
           <p className="#B70223 text">$299.60</p>
        </div>
      </div>
    </div>
  );
};

export default Ads;
