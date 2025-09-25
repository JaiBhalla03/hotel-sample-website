import Image from 'next/image';
import React from 'react';

interface RoomCardProps {
  link: string;
  heading: string;
  imageSrc: string;
}

const RoomCard = ({ link, heading, imageSrc }: RoomCardProps) => {
  return (
    <div className="relative w-full md:w-64 h-42 rounded-xl overflow-hidden group cursor-pointer">
      <Image
        src={imageSrc}
        alt={heading}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="p-4 absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500 flex flex-col items-start justify-between">
        <div className='border border-white py-2 px-4 font-md text-white rounded-full'>Detail</div>
        <h2 className="text-white text-xl font-light">{heading}</h2>
      </div>
    </div>
  );
};

export default RoomCard;
