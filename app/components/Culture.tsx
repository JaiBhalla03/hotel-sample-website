"use client";
import Image from 'next/image';
import React from 'react';
import { TfiArrowTopRight } from 'react-icons/tfi';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Culture = () => {
    const { ref, inView } = useInView({
            triggerOnce: true, 
            threshold: 0.2,
    });
    return (
        <div ref={ref} className="p-10">
            <div className='flex w-full justify-between items-center'>
                <motion.h1
                    initial={{ opacity: 0, x: -200 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className='text-6xl'>Experience the Local Culture and Sights</motion.h1>
                <motion.div 
                    initial={{ opacity: 0, x: 200 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className='flex flex-col items-end'>
                    <p>We offer a range of world-class facilities to ensure your stay is both comfortable and memorable</p>
                    <button className="group relative w-30 pr-10 ml-6 px-1 h-12 border border-black rounded-full flex items-center">
                        <div className="pl-2 z-10 group-hover:text-white">Booking</div>
                        <div className="absolute right-[0.2rem] text-white bg-black rounded-full h-10 w-10 group-hover:w-28 transform duration-75 flex items-center justify-end pr-3 pt-1 font-extrabold">
                            <TfiArrowTopRight/>
                        </div>
                    </button>
                </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-10 h-[500px]">
                {/* Left big image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ type: "spring", duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="relative w-full h-full">
                    <Image
                        src="/culture1.jpg"
                        alt="Local Culture 1"
                        fill
                        className="object-cover rounded-xl"
                    />
                </motion.div>

                {/* Middle stacked images */}
                <div className="flex flex-col gap-2">
                <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ type: "spring", duration: 1, ease: "easeOut", delay: 0.6 }}
                    className="relative w-full h-[40%]">
                    <Image
                    src="/culture2.jpg"
                    alt="Local Culture 2"
                    fill
                    className="object-cover rounded-xl"
                    />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ type: "spring", duration: 1, ease: "easeOut", delay: 0.6 }}
                    className="relative w-full h-[60%]">
                    <Image
                    src="/culture3.jpg"
                    alt="Local Culture 3"
                    fill
                    className="object-cover rounded-xl"
                    />
                </motion.div>
                </div>

                {/* Right big image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ type: "spring", duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="relative w-full h-full">
                    <Image
                        src="/culture4.jpg"
                        alt="Local Culture 4"
                        fill
                        className="object-cover rounded-xl"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Culture;