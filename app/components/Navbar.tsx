"use client";
import React, { useState } from "react";
import { TfiArrowTopRight } from "react-icons/tfi";

const Navbar = () => {
  const navItems = ["Home", "Rooms", "Facilities", "Wedding", "Around Us"];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0); // default active

  // pill follows hovered item, otherwise the active one
  const currentIndex = hoveredIndex ?? activeIndex;

  const textColorClass = (index: number) => {
    // when there's a hover, only the hovered item should be black
    if (hoveredIndex !== null) return hoveredIndex === index ? "text-black" : "text-white";
    // otherwise fall back to the active item
    return activeIndex === index ? "text-black" : "text-white";
  };

  const zFor = (index: number) =>
    hoveredIndex === index || (hoveredIndex === null && activeIndex === index) ? "z-20" : "z-10";

  return (
    <nav className="absolute top-0 left-0 flex items-center w-full justify-between px-10 py-4 z-30 text-white">
      <div className="flex flex-col items-center">
        <div className="text-xl">GLAMOUR</div>
        <div className="text-xs">Hotel & Resort</div>
      </div>

      <ul className="flex border border-white rounded-full relative p-1 h-12 overflow-hidden">
        {/* moving pill */}
        <span
          className="absolute top-1/2 -translate-y-1/2 h-10 ml-1 left-0 w-28 bg-white rounded-full transition-transform duration-300"
          style={{ transform: `translateX(${currentIndex * 7}rem)` }}
        />

        {navItems.map((item, index) => (
          <li
            key={item}
            className={`${textColorClass(index)} py-2 px-4 w-28 flex items-center justify-center relative cursor-pointer ${zFor(
              index
            )} transition-colors duration-200`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={(e) => {
              setActiveIndex(index);
              // remove native focus so it doesn't interfere with visual state
              (e.currentTarget as HTMLElement).blur();
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      <button className="group relative w-30 pr-10 ml-6 px-1 h-12 border border-white rounded-full flex items-center">
        <div className="pl-2 z-10 group-hover:text-black">Booking</div>
        <div className="absolute right-[0.2rem] text-black bg-white rounded-full h-10 w-10 group-hover:w-28 transform duration-75 flex items-center justify-end pr-3 pt-1 font-extrabold">
            <TfiArrowTopRight/>
        </div>
    </button>
    </nav>
  );
};

export default Navbar;
