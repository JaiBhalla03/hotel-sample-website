import Image from 'next/image';
import React from 'react';

interface FeedbackCardProps {
  location: string;
  comment: string;
  name: string;
  picture: string;
}

const FeedbackCard = ({ location, comment, name, picture }: FeedbackCardProps) => {
  return (
    <div className="bg-[#f6f6f6] rounded-2xl p-4 w-64 h-72 flex flex-col justify-between">
      {/* Location */}
      <div className="text-sm font-semibold text-gray-600">{location}</div>

      {/* Comment */}
      <div className="text-gray-800 italic">{comment}</div>

      {/* Footer */}
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={picture}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <span className="font-medium text-gray-900">{name}</span>
      </div>
    </div>
  );
};

export default FeedbackCard;
