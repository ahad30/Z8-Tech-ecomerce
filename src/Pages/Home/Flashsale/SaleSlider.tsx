import  { useEffect } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import ImgTime from '../../../assets/Sale/time.png'
import Image1 from '../../../assets/Sale/car.png'
import Image2 from '../../../assets/Sale/dress.png'
import Image3 from '../../../assets/Sale/shoe-2.png'
import Image4 from '../../../assets/Sale/watch.png'
import Image5 from '../../../assets/Sale/shoe.png'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const SaleSlider = () => {
  useEffect(() => {
    const keenSlider = new KeenSlider('#keen-slider', {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 5,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById('keen-slider-previous');
    const keenSliderNext = document.getElementById('keen-slider-next');

    keenSliderPrevious?.addEventListener('click', () => keenSlider.prev());
    keenSliderNext?.addEventListener('click', () => keenSlider.next());

    return () => {
      keenSlider.destroy();
    };
  }, []);

  return (
    <section className="">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0">
        <div className="max-w-7xl items-center justify-between sm:flex">
          
          <div className='flex items-center'>
            <h2 className=" font-bold tracking-tight text-gray-900 sm:text-4xl">
            Flash <span className='text-[#600451]'>Sale</span>
            </h2>
            <p className='font-bold text-xl ms-5 text-[#FF0202] me-3'>Ending in</p>  
            <div>
            <img src={ImgTime} alt="" />
            </div>       
          </div>

          <div className='border border-[#FF0202] rounded-lg p-2'>
            <button className='text-[#59035A] font-bold'>Shop now</button>
          </div>
           </div>

           <p className='text-[#FF0202] text-xl font-semibold'>Today</p>

          <div className="mt-8 flex gap-4 lg:mt-5 justify-end">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="rounded-full border border-black p-3 text-black transition hover:bg-rose-600 hover:text-white"
            >
            <FaAngleLeft></FaAngleLeft>
            </button>

            <button
              aria-label="Next slide"
              id="keen-slider-next"
              className="rounded-full border border-black p-3 text-black transition hover:bg-rose-600 hover:text-white"
            >
             <FaAngleRight></FaAngleRight>
            </button>
          </div>
        

        <div className="">
          <div id="keen-slider" className="keen-slider mt-5">
            <div className="keen-slider__slide">
                    <img src={Image1} alt="" />                          
            </div>
            <div className="keen-slider__slide">
                    <img src={Image2} alt="" />                          
            </div>
            <div className="keen-slider__slide">
                    <img src={Image3} alt="" />                          
            </div>
            <div className="keen-slider__slide">
                    <img src={Image4} alt="" />                          
            </div>
            <div className="keen-slider__slide">
                    <img src={Image5} alt="" />                          
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleSlider;
