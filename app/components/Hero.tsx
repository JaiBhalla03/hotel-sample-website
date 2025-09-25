"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only first time
    threshold: 0.2, // % of element visible before triggering
  });
  return (
    <div ref={ref} className="relative w-full h-screen -z-10">
      <Image
        src="/hero.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="absolute inset-0 flex w-full items-end justify-center text-white px-10 pb-10 h-full">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl max-w-3xl"
        >
          Book Your Comfort Room Today!
        </motion.div>
        <div className="flex flex-col gap-10 justify-end h-full items-end">
            <motion.div 
              initial={{ opacity: 0, y: -100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="text-xl text-right"
            >
              Get Ready for an Adventure! Reserve Your Spot Now and Embark on Your Hobbit Journey!
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, rotate: 180 }}
              animate={inView ? { opacity: 1, rotate: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              className="relative w-[25rem] h-[20rem]"
            >
              <Image src="/hero11.png" alt="Hero 1 image" fill className="object-cover"/>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
