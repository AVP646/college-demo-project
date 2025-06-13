import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import homeImage from '../assets/img/home.png';

const Home = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 300,
            reset: true,
        });

        sr.reveal('.home_data');
        sr.reveal('.image_data', { delay: 500, scale: 0.5 });
        sr.reveal('.service_data')
    }, []);

    return (
        <>
            <section id="Home" className="relative" name="home">
                <div className="container">
                    {/* green blur circles */}
                    <div className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    <div className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-60 absolute right-0 bottom-0" />

                    {/* flex layout */}
                    <div className="flex flex-col items-center gap-5 lg:flex-row">
                        {/* content */}
                        <div className="home_data w-full space-y-5">
                            <h1>
                                <span className="text-yellow-500">Plants</span> make a <br />
                                positive <span className="text-yellow-500">impact</span> on <br />
                                your environment
                            </h1>
                            <p className="text-slate-300 font-lobstar">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio fugiat eveniet,
                                reprehenderit veritatis aut explicabo voluptatum ullam itaque tenetur numquam!
                            </p>

                            {/* buttons */}
                            <div className="flex flex-col gap-2 sm:flex-row lg:pt-5 xl:pt-10">
                                <button className="btn">
                                    <span>Shop Now</span>
                                    <i className="ri-leaf-line"></i>
                                </button>
                                <button className="bg-transparent border border-yellow-300 hover:bg-yellow-500 rounded-md px-5 py-2 duration-300">
                                    <span>Know More</span>
                                    <i className="ri-leaf-line"></i>
                                </button>
                            </div>

                            {/* trial and social */}
                            <div className="flex flex-col gap-5">
                                <p className="text-xs font-Lobster text-slate-300">You will get 30-days free trial.</p>
                                <div className="flex items-center gap-5 text-lg lg:pt-5">
                                    <i className="ri-facebook-fill text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></i>
                                    <i className="ri-twitter-x-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
                                    <i className="ri-instagram-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></i>
                                    <i className="ri-linkedin-fill text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></i>
                                </div>
                            </div>
                        </div>

                        {/* image section */}
                        <div className="w-full relative top-10">
                            <img src={homeImage} alt="home_image" className="image_data" />

                            <div className="absolute -top-10 right-0 opacity-30 animate-moveingY xl:top-5">
                                <i className="ri-leaf-line text-6xl text-yellow-300"></i>
                            </div>
                            <div className="absolute bottom-0 left-0 opacity-30 xl:bottom-12 animate-rotating">
                                <i className="ri-flower-line text-6xl text-yellow-300"></i>
                            </div>
                            <div className="absolute hidden lg:block -top-10 -left-5 opacity-30 animate-scalingUp">
                                <i className="ri-plant-line text-6xl text-yellow-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* features section */}
            <div className="bg-white text-green-900 py-20">
                <div className="container w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {/* card-1 */}
                    <div className="service_data border border-green-900 p-3 rounded-md cursor-pointer hover:shadow-2xl hover:-translate-y-2 duration-300 space-y-5">
                        <div className="flex items-center gap-5">
                            <i className="ri-truck-line text-3xl md:text-4xl xl:text-5xl"></i>
                            <p className="md:text-lg font-bold">Fast <br /> Delivery</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis</p>
                    </div>

                    {/* card-2 */}
                    <div className="service_data border border-green-900 p-3 rounded-md cursor-pointer hover:shadow-2xl hover:-translate-y-2 duration-300 space-y-5">
                        <div className="flex items-center gap-5">
                            <i className="ri-customer-service-line text-3xl md:text-4xl xl:text-5xl"></i>
                            <p className="md:text-lg font-bold">Great Customer <br /> Service</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis</p>
                    </div>

                    {/* card-3 */}
                    <div className="service_data border border-green-900 p-3 rounded-md cursor-pointer hover:shadow-2xl hover:-translate-y-2 duration-300 space-y-5">
                        <div className="flex items-center gap-5">
                            <i className="ri-plant-line text-3xl md:text-4xl xl:text-5xl"></i>
                            <p className="md:text-lg font-bold">Original <br /> Plants</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis</p>
                    </div>

                    {/* card-4 */}
                    <div className="service_data border border-green-900 p-3 rounded-md cursor-pointer hover:shadow-2xl hover:-translate-y-2 duration-300 space-y-5">
                        <div className="flex items-center gap-5">
                            <i className="ri-money-dollar-circle-line text-3xl md:text-4xl xl:text-5xl"></i>
                            <p className="md:text-lg font-bold">Affordable <br /> Price</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
