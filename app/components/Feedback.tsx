"use client";
import React, { useState, useEffect } from "react";
import FeedbackCard from "./FeedbackCard";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const feedbacks = [
  {
    location: "India",
    comment:
      "From luxurious rooms and top-notch amenities to friendly staff and delicious dining, our guests share their honest feedback",
    name: "Jai Bhalla",
    picture: "/boy1.jpg",
  },
  {
    location: "Dubai",
    comment: "The hospitality here was amazing, I felt right at home.",
    name: "Aarav Singh",
    picture: "/boy2.jpg",
  },
  {
    location: "Spain",
    comment: "Beautiful views and excellent service, highly recommended!",
    name: "Maria Lopez",
    picture: "/boy3.jpg",
  },
  {
    location: "Netherlands",
    comment: "A perfect blend of comfort and luxury.",
    name: "Emma Janssen",
    picture: "/boy1.jpg",
  },
  {
    location: "Poland",
    comment: "Super cozy stay, will come back again!",
    name: "Anna Kowalski",
    picture: "/boy2.jpg",
  },
];

const Feedback = () => {
  const { ref, inView } = useInView({
              triggerOnce: true, 
              threshold: 0.2,
  });
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
  };

  // Reset index seamlessly for infinite effect
  useEffect(() => {
    if (current >= feedbacks.length) {
      setCurrent(0);
    }
    if (current < 0) {
      setCurrent(feedbacks.length - 1);
    }
  }, [current]);

  return (
    <div ref={ref} className="relative w-full mx-auto py-10">
      <motion.h1 
        initial={{ opacity: 0, x: -200 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-6xl text-center pb-5">The Words of Our Guest!</motion.h1>
      <motion.h3 
        initial={{ opacity: 0, x: 200 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mx-auto mb-10">
        From luxurious rooms and top-notch amenities to friendly staff and <br />
        delicious dining, our guests share their honest feedback
      </motion.h3>

      {/* Carousel container */}
      <motion.div 
        initial={{ opacity: 0, y: 200 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="overflow-hidden py-5">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${current * 16.5}rem)`, // match card width + margin
          }}
        >
          {[...feedbacks, ...feedbacks].map((feedback, index) => (
            <div key={index} className="mr-6">
              <FeedbackCard
                location={feedback.location}
                comment={feedback.comment}
                name={feedback.name}
                picture={feedback.picture}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Controls */}
      <div className="flex justify-center mt-6 gap-4 px-10">
        <button
          onClick={prevSlide}
          className="bg-white border border-black rounded-full p-3 hover:bg-gray-100 duration-300 transition"
        >
          <GoArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white border border-black rounded-full p-3 hover:bg-gray-100 duration-300 transition"
        >
          <GoArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Feedback;
