"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const facilities = [
  { heading: "Mini Bar", src: "/bar.jpg", alt: "Bar", rotateY: 30, initialY: -100, delay: 0.3, scale: 0.8 },
  { heading: "Workspace", src: "/workspace.jpg", alt: "Workspace", rotateY: 30, initialY: -100, delay: 0.6, scale: 0.9 },
  { heading: "Jacuzzi Bathroom", src: "/jacuzzi.jpg", alt: "Jacuzzi", rotateY: 0, initialY: 0, delay: 0.9, scale: 1 },
  { heading: "Library Room", src: "/library.jpg", alt: "Library", rotateY: -30, initialY: 100, delay: 0.6, scale: 0.9 },
  { heading: "Restaurant", src: "/restaurant.jpg", alt: "Restaurant", rotateY: -30, initialY: 100, delay: 0.3, scale: 0.8 },
];

const facilities1 = [
  { heading: "Mini Bar", src: "/bar.jpg", alt: "Bar" },
  { heading: "Workspace", src: "/workspace.jpg", alt: "Workspace" },
  { heading: "Jacuzzi Bathroom", src: "/jacuzzi.jpg", alt: "Jacuzzi" },
  { heading: "Library Room", src: "/library.jpg", alt: "Library" },
  { heading: "Restaurant", src: "/restaurant.jpg", alt: "Restaurant" },
];


// Hook to detect screen size
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const Facilities = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const isMobile = useIsMobile();

  return (
    <div ref={ref} className="p-4 md:p-10">
      {/* Heading */}
      <div className="flex flex-col-reverse md:flex-row w-full justify-between items-center mb-10">
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
          className="text-5xl md:text-6xl text-left md:text-right leading-tight"
        >
          Premier Facilities and Guest Services
        </motion.h1>
      </div>
      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col gap-6">
        {facilities1.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.2 }}
            className="relative rounded-2xl w-full h-64 overflow-hidden shadow-md"
          >
            <Image src={item.src} alt={item.alt} fill className="object-cover" />
            <div className="absolute p-4 flex items-end justify-center text-white h-full inset-0 bg-black/30 rounded-2xl">
              {item.heading}
            </div>
          </motion.div>
        ))}
      </div>
      {/* Facilities Row */}
      <div className="hidden md:flex flex-col md:flex-row gap-2 md:gap-6 justify-center [perspective:1000px]">
        {facilities.map((item, i) => {
          // Use flat animation for mobile
          const initialAnim = isMobile
            ? { opacity: 0, y: 50, scale: 1, rotateY: 0 }
            : { opacity: 0, y: item.initialY, scale: item.scale, rotateY: item.rotateY };
          console.log(initialAnim)
          const hoverAnim = isMobile ? {} : { rotateY: 0, scale: 1 };

          return (
            <motion.div
              key={i}
              initial={initialAnim}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, ease: "easeOut", delay: item.delay }}
              whileHover={hoverAnim}
              className="cursor-pointer relative rounded-[3rem] w-72 h-96 overflow-hidden"
            >
              <Image src={item.src} alt={item.alt} fill className="object-cover" />
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
