"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const facilities = [
  { heading: "Mini Bar", src: "/bar.jpg", alt: "Bar", rotateY: 30, initialY: -100, delay: 0.3, scale: 0.8},
  { heading: "Workspace", src: "/workspace.jpg", alt: "Workspace", rotateY: 30, initialY: -100, delay: 0.6, scale: 0.9},
  { heading: "Jacuzzi Bathroom", src: "/jacuzzi.jpg", alt: "Jacuzzi", rotateY: 0, initialY: 0, delay: 0.9, scale: 1},
  { heading: "Library Room", src: "/library.jpg", alt: "Library", rotateY: -30, initialY: 100, delay: 0.6, scale: 0.9},
  { heading: "Restaurant", src: "/restaurant.jpg", alt: "Restaurant", rotateY: -30, initialY: 100, delay: 0.3, scale: 0.8},
];

const Facilities = () => {
  const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.2,
      });
  return (
    <div ref={ref} className="p-10">
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row w-full justify-between items-center mb-10 gap-6">
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Experience the ultimate in comfort and style by choosing the perfect
          room tailored to your needs.
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, x: 200 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl text-right leading-tight">
          Premier Facilities and Guest Services
        </motion.h1>
      </div>

      {/* Facilities Row with perspective */}
      <div className="flex gap-6 justify-center [perspective:1000px]">
        {facilities.map((item, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: item.initialY, rotateY: item.rotateY, scale: item.scale}}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: "easeOut", delay: item.delay}}
              whileHover={{ rotateY: 0, scale: 1 }}
              className={"cursor-pointer relative rounded-[3rem] w-72 h-96 overflow-hidden"}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
              />
              {/* Overlay on hover */}
              <div className="absolute p-4 flex items-end justify-center text-white h-full inset-0 bg-black/30 opacity-100 transition duration-500 rounded-[3rem]">
                {item.heading}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Facilities;
