import React from 'react'
import card1 from '../assets/img/cart-1.png'
import card2 from '../assets/img/cart-2.png'
import card3 from '../assets/img/cart-3.png'
import card4 from '../assets/img/cart-4.png'



const Popular = () => {
  return (
    <>
      <section id='popular' className='bg-green-900'>
        <div className='flex flex-col items-center gap-3 text-center mb-40 md:mb-28'>
          <h2 className='text-yellow-500 text-2xl md:text-3xl xl:text-4xl'>
            Your Choice Plant
          </h2>
          <p className='max-w-2xl'>
            Follow instruction for more
          </p>
        </div>

        <div className='container w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

{/* CART-1  */}
          <div className='bg-green-950 p-10 pt-24 rounded-md relative'>
            <img src={card1} alt="card1" className='hover:-top-8 w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            duration-500'/>
            <p className='italic'>Nephrolepis exaltata</p>
            <h3>Boston Fern</h3>

            <div className='text-yellow-500 text-xs py-3'>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-half-fill"></i>
              <i class="ri-star-line text-gray-400"></i>
              <i class="ri-star-line text-gray-400"></i>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-xl'>$5</p>

              <button className='bg-yellow-500 px-2 py-1 rounded-sm text-xl shadow-md'>
                <i class="ri-shopping-cart-fill"></i>
              </button>
            </div>

          </div>


{/* CART-2  */}
          <div className='bg-green-950 p-10 pt-24 rounded-md relative'>
            <img src={card2} alt="card1" className='hover:-top-8 w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            duration-500'/>
            <p className='italic'>Ficus elastica</p>
            <h3>Rubber Plant</h3>

            <div className='text-yellow-500 text-xs py-3'>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-half-fill"></i>
              <i class="ri-star-line text-gray-400"></i>
              <i class="ri-star-line text-gray-400"></i>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-xl'>$5</p>

              <button className='bg-yellow-500 px-2 py-1 rounded-sm text-xl shadow-md'>
                <i class="ri-shopping-cart-fill"></i>
              </button>
            </div>

          </div>


{/* CART-3  */}
          <div className='bg-green-950 p-10 pt-24 rounded-md relative'>
            <img src={card3} alt="card1" className='hover:-top-8 w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            duration-500'/>
            <p className='italic'>Spathiphyllum wallisii</p>
            <h3>Peace Lily</h3>

            <div className='text-yellow-500 text-xs py-3'>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-half-fill"></i>
              <i class="ri-star-line text-gray-400"></i>
              <i class="ri-star-line text-gray-400"></i>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-xl'>$5</p>

              <button className='bg-yellow-500 px-2 py-1 rounded-sm text-xl shadow-md'>
                <i class="ri-shopping-cart-fill"></i>
              </button>
            </div>

          </div>

          
{/* CART-4  */}
          <div className='bg-green-950 p-10 pt-24 rounded-md relative'>
            <img src={card4} alt="card1" className='hover:-top-8 w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            duration-500'/>
            <p className='italic'>Adenium obesum</p>
            <h3>Desert Rose</h3>

            <div className='text-yellow-500 text-xs py-3'>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-half-fill"></i>
              <i class="ri-star-line text-gray-400"></i>
              <i class="ri-star-line text-gray-400"></i>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-xl'>$5</p>

              <button className='bg-yellow-500 px-2 py-1 rounded-sm text-xl shadow-md'>
                <i class="ri-shopping-cart-fill"></i>
              </button>
            </div>

          </div>
        </div>

      </section>
    </>
  )
}

export default Popular