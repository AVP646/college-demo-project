import React from 'react';
import plant1 from '../assets/img/plant-1.png';
import plant2 from '../assets/img/plant-2.png';
import leaf3 from '../assets/img/leaf-3.png'

const About = () => {
    return (
        <section id='about' className='relative overflow-hidden' name="about">

            <div className='absolute -top-8 -right-12 opacity-60'>
                <img src={leaf3} alt="leaf3" className='w-40 md:w-52 xl:w-64' />
            </div>

            {/* Section Title */}
            <div className='flex flex-col items-center gap-3 text-center mb-10 md:mb-20'>
                <h2 className='text-yellow-500 text-2xl md:text-3xl xl:text-4xl'>
                    About Us
                </h2>
                <p>
                    Follow instruction for more
                </p>
            </div>

            {/* Content */}
            <div className='container'>
                <div className='flex flex-col items-center gap-10 lg:flex-row xl:gap-20'>
                    {/* Image1 */}
                    <div className='w-full lg:w-1/2 flex justify-center'>
                        <img src={plant1} alt="plant-1" className='max-w-sm w-full' />
                    </div>

                    {/* Text Content */}
                    <div className='w-full lg:w-1/2 space-y-4 text-center lg:text-left'>
                        <h3 className='text-2xl font-semibold'>
                            Make your <span className="text-yellow-500">organic</span><br />
                            garden
                        </h3>
                        <p className='text-slate-300'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ratione rem maxime veniam cum
                            libero voluptas tempora aut saepe similique, eos corporis. Expedita culpa consequatur animi
                            deleniti ullam adipisci iure sequi dolores modi aliquam laudantium, explicabo nobis quia id
                            reprehenderit?
                        </p>
                    </div>
                </div>


                <div className='flex flex-col items-center gap-10 lg:flex-row-reverse xl:gap-20'>
                    {/* Image2 */}
                    <div className='w-full lg:w-1/2 flex justify-center'>
                        <img src={plant2} alt="plant-1" className='max-w-sm w-full' />
                    </div>

                    {/* Text Content */}
                    <div className='w-full lg:w-1/2 space-y-4 text-center lg:text-left'>
                        <h3 className='text-2xl font-semibold'>
                            Come with us <br />
                            <span class="text-yellow-500">grow up</span>
                            your plant
                        </h3>
                        <p className='text-slate-300'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ratione rem maxime veniam cum
                            libero voluptas tempora aut saepe similique, eos corporis. Expedita culpa consequatur animi
                            deleniti ullam adipisci iure sequi dolores modi aliquam laudantium, explicabo nobis quia id
                            reprehenderit?
                        </p>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default About;
