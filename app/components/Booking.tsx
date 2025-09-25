"use client";
import React, { useState } from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import RoomCard from "./RoomCard";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Booking = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const { ref, inView } = useInView({
      triggerOnce: true, 
      threshold: 0.2,
    });
  return (
    <div ref={ref} className="p-4 md:p-10 flex flex-col md:flex-row w-full gap-10">
      <div className="flex-1 flex flex-col-reverse md:flex-col gap-2">
        <div className="flex flex-col md:flex-row gap-2">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <RoomCard link="#" heading="Deluxe Room" imageSrc="/deluxeRoom.jpg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <RoomCard link="#" heading="Superior Room" imageSrc="/superiorRoom.jpg"/>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <RoomCard link="#" heading="Executive Room" imageSrc="/executiveRoom.jpg"/>
          </motion.div>
        </div>
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -200 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="text-5xl md:text-6xl pt-4"
        >
          Choose the Best Room <span className="hidden md:inline"><br /></span> for Your Perfect Stay!
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, x: 200 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="text-lg md:text-xl"
        >
          Experience the ultimate in comfort and style by choosing <span className="hidden md:inline"><br /></span>
 the
          perfect room tailored to your needs.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="my-4 group relative w-30 pr-10 px-1 h-12 border border-black rounded-full flex items-center">
          <div className="pl-2 z-10 group-hover:text-white">Booking</div>
          <div className="absolute right-[0.2rem] text-white bg-black rounded-full h-10 w-10 group-hover:w-28 transform duration-200 flex items-center justify-end pr-3 pt-1 font-extrabold">
            <TfiArrowTopRight />
          </div>
        </motion.button>
        </div>
      </div>

      {/* Right section */}
      <div className="flex-1">
        <motion.h1 
          initial={{ opacity: 0, x: 300, rotate: 30 }}
          animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="text-[1.7rem] text-center md:text-right mb-4"
        >
          Check Your Availability Room On This Calendar
        </motion.h1>
        {/* ✅ MUI Calendar */}
        <motion.div 
          initial={{ opacity: 0, x: 300, rotate: -30 }}
          animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="w-full border border-gray-300 rounded-xl p-4">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateCalendar value={date} onChange={(newDate) => setDate(newDate)} />
          </LocalizationProvider>
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;
