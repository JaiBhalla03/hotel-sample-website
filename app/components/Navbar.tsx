"use client";
import React, { useState } from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // hamburger + close icons

const Navbar = () => {
  const navItems = ["Home", "Rooms", "Facilities", "Wedding", "Around Us"];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0); // default active
  const [mobileOpen, setMobileOpen] = useState(false);

  // pill follows hovered item, otherwise the active one
  const currentIndex = hoveredIndex ?? activeIndex;

  const textColorClass = (index: number) => {
    if (hoveredIndex !== null) return hoveredIndex === index ? "text-black" : "text-white";
    return activeIndex === index ? "text-black" : "text-white";
  };

  const zFor = (index: number) =>
    hoveredIndex === index || (hoveredIndex === null && activeIndex === index) ? "z-20" : "z-10";

  return (
    <nav className="absolute top-0 left-0 flex items-center w-full justify-between px-6 md:px-10 py-4 z-30 text-white">
      {/* Logo */}
      <div className="flex flex-col items-center">
        <div className="text-xl">GLAMOUR</div>
        <div className="text-xs">Hotel & Resort</div>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex border border-white rounded-full relative p-1 h-12 overflow-hidden">
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
              (e.currentTarget as HTMLElement).blur();
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Booking Button (always visible on md+, below nav in mobile) */}
      <div className="hidden md:block">
        <button className="group relative w-30 pr-10 ml-6 px-1 h-12 border border-white rounded-full flex items-center">
          <div className="pl-2 z-10 group-hover:text-black">Booking</div>
          <div className="absolute right-[0.2rem] text-black bg-white rounded-full h-10 w-10 group-hover:w-28 transform duration-75 flex items-center justify-end pr-3 pt-1 font-extrabold">
            <TfiArrowTopRight />
          </div>
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-3xl text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-black/50 backdrop-blur-md flex flex-col items-center gap-6 py-8 md:hidden">
          {navItems.map((item, index) => (
            <div
              key={item}
              className={`text-lg cursor-pointer ${
                activeIndex === index ? "text-yellow-300" : "text-white"
              }`}
              onClick={() => {
                setActiveIndex(index);
                setMobileOpen(false);
              }}
            >
              {item}
            </div>
          ))}

          <button className="group relative w-40 pr-10 px-1 h-12 border border-white rounded-full flex items-center">
            <div className="pl-2 z-10 group-hover:text-black">Booking</div>
            <div className="absolute right-[0.2rem] text-black bg-white rounded-full h-10 w-10 group-hover:w-36 transform duration-75 flex items-center justify-end pr-3 pt-1 font-extrabold">
              <TfiArrowTopRight />
            </div>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
