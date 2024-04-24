// import ReviewsSlider from "./SaleSlider";
import SaleSlider from "./SaleSlider";


const data = [     
{
  id : 1,
  image : 'https://i.ibb.co/Syq3CcP/bg-white.png',
  discountPrice: 450,
  price : 650,
},
{
  id : 2,
  image : 'https://i.ibb.co/Syq3CcP/bg-white.png',
  discountPrice: 450,
  price : 650,
},
{
  id : 3,
  image : 'https://i.ibb.co/Syq3CcP/bg-white.png',
  discountPrice: 450,
  price : 650,
},
{
  id : 4,
  image : 'https://i.ibb.co/Syq3CcP/bg-white.png',
  discountPrice: 450,
  price : 650,
},
{
  id : 5,
  image : 'https://i.ibb.co/Syq3CcP/bg-white.png',
  discountPrice: 450,
  price : 650,
},
{
  id : 6,
  image : 'https://i.ibb.co/Syq3CcP/bg-white.png',
  discountPrice: 450,
  price : 650,
},

]


const Flashsale = () => {
  return (
<>
<section
  className="relative bg-[url(https://i.ibb.co/FVDc1XS/vecteezy-flash-and-big-sale-on-phone-banner-web-shopping-online-6828786-Converted-01-1.png)]  bg-center bg-no-repeat mt-16 mb-10 py-5"
>
 
  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex h-[450px] lg:items-center lg:px-8"
  >
    
  <div className="grid grid-cols-2 mt-[300px] lg:grid-cols-6 gap-x-24  mx-auto text-center
  text-white">
{
  data?.map(item => 
    <div key={item.id}  className="">
         <img src={item.image} alt="" className="size-24"/>
         <p className="text-xl mt-1 mb-2">${item?.discountPrice}</p>
         <p><del>${item?.price}</del> </p>
    </div>
  )
}
  </div>
  </div>
</section>

<SaleSlider></SaleSlider>

</>


  )
}

export default Flashsale;