"use client";
import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
    const { ref, inView } = useInView({
                triggerOnce: true, 
                threshold: 0.2,
        });
    return (
        <motion.div ref={ref} 
        initial={{ opacity: 0, y: 200 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
        className='px-4 md:px-10 pt-4 md:pt-10 pb-5 flex flex-col gap-10'>
            <div className="flex flex-col md:flex-row">
                <div className='w-full md:w-1/2 flex flex-col gap-5'>
                    <div>Glamour Hotel and Resort is a five-star hotel located in Canggu, Bali. <span className="hidden md:inline"><br /></span>
 Known for its stunning views and elegant atmosphere, this hotel offers<br/> a luxurious and unforgettable vacation experience</div>
                    <div className='text-xl py-4 md:py-0 font-semibold'>Go to details</div>
                </div>
                <div className="flex w-full md:w-1/2 justify-between">
                    <div>
                        <h1 className='text-black font-semibold mb-4'>About</h1>
                        <ul>
                            <li className='text-gray-400 text-md'>Career</li>
                            <li className='text-gray-400 text-md'>Experience</li>
                            <li className='text-gray-400 text-md'>Direction</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-black font-semibold mb-4'>Package</h1>
                        <ul>
                            <li className='text-gray-400 text-md'>Wedding</li>
                            <li className='text-gray-400 text-md'>Meeting</li>
                            <li className='text-gray-400 text-md'>Birthday</li>
                            <li className='text-gray-400 text-md'>Workspace</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-black font-semibold mb-4'>Keep in Touch</h1>
                        <ul>
                            <li className='text-gray-400 text-md'>Instagram</li>
                            <li className='text-gray-400 text-md'>Twitter</li>
                            <li className='text-gray-400 text-md'>Tiktok</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-full'>
                <div className='text-center md:text-left w-full md:w-1/2'>
                    Copyright © Glomour Hotel & Resort 2025 
                </div>
                <div className='text-center md:text-right w-full md:w-1/2'>The Best Companion for Your Rest</div>
            </div>
        </motion.div>
        
    );
};

export default Footer;