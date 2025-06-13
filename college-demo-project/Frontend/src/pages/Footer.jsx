import React, { useEffect } from 'react';
import flower from '../assets/img/floral-1.png';

const Footer = () => {
    useEffect(() => {
        const scrollUp = () => {
            const scrollUpBtn = document.getElementById("scroll-up");

            if (window.scrollY >= 250) {
                scrollUpBtn?.classList.remove("-bottom-1/2");
                scrollUpBtn?.classList.add("bottom-4");
            } else {
                scrollUpBtn?.classList.add("-bottom-1/2");
                scrollUpBtn?.classList.remove("bottom-4");
            }
        };

        window.addEventListener("scroll", scrollUp);
        return () => window.removeEventListener("scroll", scrollUp);
    }, []);

    return (
        <>
            <footer className='bg-yellow-100 text-green-950 pt-20 pb-10 md:pt-28 relative'>
                {/* Subscription Section */}
                <div className='container text-white absolute top-0 right-0 left-0 -translate-y-1/2'>
                    <div className="bg-green-900 px-10 pt-5 pb-10 space-y-5 rounded-md">
                        <h3>
                            <span className="text-yellow-500">Subscribe</span> to our newsletter
                        </h3>
                        <div className="flex flex-col md:flex-row gap-1">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="w-full px-5 py-3 text-green-900 rounded-md outline-none"
                            />
                            <button className="flex items-center justify-center gap-1 bg-green-950 px-5 py-3 rounded-md hover:opacity-80 duration-300">
                                <span>Subscribe</span>
                                <i className="ri-send-plane-2-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="container mt-16 mb-10">
                    <div className="border-b border-green-500 relative">
                        <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 max-w-36 mx-auto">
                            <div className="bg-yellow-100 text-lg text-center space-x-2">
                                <i className="ri-facebook-fill hover:text-yellow-500 duration-300 cursor-pointer"></i>
                                <i className="ri-twitter-x-line hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
                                <i className="ri-instagram-line hover:text-yellow-500 duration-300 cursor-pointer"></i>
                                <i className="ri-linkedin-fill hover:text-yellow-500 duration-300 cursor-pointer"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start">
                    {/* IndorePlants Section */}
                    <div>
                        <div className="text-7xl text-green-700 text-center inline-block">
                            <i className="ri-leaf-fill"></i>
                            <p className="font-Lobster text-xl sm:text-2xl">IndorePlants.</p>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <p className='mb-5 font-bold text-xl'>Quick Link</p>
                        <div className='flex flex-col gap-1'>
                            <a href="#">Plants</a>
                            <a href="#">Flowers</a>
                            <a href="#">Gardening</a>
                            <a href="#">Seeds</a>
                            <a href="#">Shipping</a>
                        </div>
                    </div>

                    {/* Popular Services Section */}
                    <div>
                        <p className="mb-5 font-bold text-xl">Popular Services</p>
                        <div className="flex flex-col gap-1">
                            <a href="#">Tree Planting</a>
                            <a href="#">Grass Cutting</a>
                            <a href="#">Weeds Control</a>
                            <a href="#">Project</a>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <p className="mb-5 font-bold text-xl">Contact Us</p>
                        <div className="flex flex-col gap-1">
                            <a href="tel:+917490082668">+91 7490082668</a>
                            <a href="mailto:yadavayush3000@gmail.com">yadavayush3000@gmail.com</a>
                            <p>363020 Kherali Bypass, Surendranagar, Gujarat.</p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className='container'>
                    <p className='text-center mt-10 opacity-50'>
                        Copyright &copy; 2025 CodeWithAyush. All rights reserved.
                    </p>
                </div>

                {/* Background Image */}
                <div className='absolute bottom-0 left-0 opacity-20 pointer-events-none'>
                    <img src={flower} alt="floral" className='w-full lg:w-1/2' />
                </div>

                {/* Scroll Up Button */}
                <a
                    href="#"
                    className="fixed right-4 -bottom-1/2 bg-yellow-500 shadow-sm inline-block px-3 py-1 md:px-4 md:py-2 rounded-md text-lg z-50 hover:-translate-y-1 duration-300"
                    id="scroll-up"
                >
                    <i className="ri-arrow-up-line"></i>
                </a>
            </footer>
        </>
    );
};

export default Footer;
