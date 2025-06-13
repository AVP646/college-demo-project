import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import review1 from '../assets/img/review-1.jpg';
import review2 from '../assets/img/review-2.jpg';
import review3 from '../assets/img/review-3.jpg';
import review4 from '../assets/img/review-4.jpg';
import leaf4 from '../assets/img/leaf-4.png';


const Review = () => {
  useEffect(() => {
    new Swiper('.swiper', {
      direction: 'horizontal',
      speed: 400,
      spaceBetween: 30,
      grabCursor: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    <section id='review' className='relative mb-20 md:mb-28 overflow-hidden'>

    <div className='absolute -top-8 -left-12 opacity-60'>
        <img src={leaf4} alt="leaf4" className='w-40 md:w-52 xl:w-64'/>
    </div>

      <div className='flex flex-col items-center gap-3 text-center mb-10 md:mb-20'>
        <h2 className='text-yellow-500 text-2xl md:text-3xl xl:text-4xl'>
          Customer Review
        </h2>
        <p className='max-w-2xl'>
          Follow instruction for more
        </p>
      </div>

      <div className='container'>
        <div className='swiper py-12'>
          <ul className='swiper-wrapper'>
            {[review1, review2, review3, review4].map((img, index) => (
              <li className='swiper-slide' key={index}>
                <div className='flex flex-col gap-5 bg-green-900 rounded-md p-6'>
                  <p className='font-sans'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                    culpa ut amet voluptas asperiores alias sed consequatur.
                  </p>
                  <div className='flex items-center'>
                    <img src={img} alt={`review${index + 1}`} className='w-12 h-12 rounded-full' />
                    <div className='ml-2'>
                      <p className='text-yellow-500 uppercase'>John Doe</p>
                      <h3>Designer</h3>
                    </div>
                    <i className="ri-double-quotes-r text-4xl ml-auto"></i>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className='swiper-pagination mt-6'></div>
        </div>
      </div>

      {/* Swiper pagination bullet custom styles */}
     <style jsx="true">{`
  .swiper-pagination-bullet {
    background-color: #14532d;   /* Tailwind: bg-green-900 */
    width: 0.75rem;              /* Tailwind: w-3 */
    height: 0.75rem;             /* Tailwind: h-3 */
    opacity: 1;                  /* Tailwind: opacity-100 */
    margin: 0 6px;
    border-radius: 9999px;       /* Fully rounded */
    transition: all 0.3s ease;
  }

  .swiper-pagination {
    position: relative;
    top: 40px;                   /* Move the entire pagination block down */
    z-index: 50;
    display: flex;
    justify-content: center;
  }

  .swiper-pagination-bullet-active {
    background-color: white;     /* Tailwind: bg-white */
  }
`}</style>

    </section>
  );
};

export default Review;
