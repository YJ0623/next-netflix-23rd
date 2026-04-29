'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Movie } from '@/feature/movies/services/movieApi';

interface HeroCarouselProps {
  movies: Movie[];
}

export default function HeroCarousel({ movies }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [movies.length]);

  if (!movies || movies.length === 0) return null;

  return (
    <div className="relative w-full h-100 md:h-[80vh] overflow-hidden bg-black">
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {movies.map((movie, index) => (
          <div key={movie.id} className="relative w-full h-full shrink-0">
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
              loading='eager'
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />
            <div className='absolute bottom-0.5 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-label2 font-bold z-10'>
              #{index + 1} in Korea today
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}