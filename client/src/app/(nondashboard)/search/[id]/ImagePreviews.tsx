'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

interface ImagePreviewsProps {
  images: string[];
}

export default function ImagePreviews({ images }: ImagePreviewsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imgSrcs, setImgSrcs] = useState(images);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImageError = (index: number) => {
    setImgSrcs((prev) =>
      prev.map((src, i) => (i === index ? '/landing-call-to-action.jpg' : src)),
    );
  };

  return (
    <div className="relative h-[450px] w-full">
      {imgSrcs.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Property Image ${index + 1}`}
            fill
            priority={index === 0}
            onError={() => handleImageError(index)}
            className="object-cover cursor-pointer transition-transform duration-500 ease-in-out"
          />
        </div>
      ))}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary-700 bg-opacity-50 p-2 rounded-full focus:outline-none focus:ring focus:ring-secondary-300"
        aria-label="Previous image"
      >
        <ChevronLeft className="text-white" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary-700 bg-opacity-50 p-2 rounded-full focus:outline-none focus:ring focus:ring-secondary-300"
        aria-label="Next image"
      >
        <ChevronRight className="text-white" />
      </button>
    </div>
  );
}
