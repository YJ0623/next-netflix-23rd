'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Movie } from '@/feature/movies/services/movieApi';

interface PreviewSectionProps {
  movies: Movie[];
}

export default function PreviewSection({ movies }: PreviewSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  if (!movies || movies.length === 0) return null;

  return (
    <section className="mt-8">
      <h2 className="mb-4 px-4 text-2xl font-semibold text-white">Previews</h2>

      <div
        ref={scrollRef}
        className="flex cursor-grab gap-[7px] overflow-x-auto scrollbar-hide active:cursor-grabbing"
        onMouseDown={(e) => {
          isDownRef.current = true;
          startXRef.current = e.pageX;
          scrollLeftRef.current = scrollRef.current?.scrollLeft ?? 0;
        }}
        onMouseLeave={() => {
          isDownRef.current = false;
        }}
        onMouseUp={() => {
          isDownRef.current = false;
        }}
        onMouseMove={(e) => {
          if (!isDownRef.current || !scrollRef.current) return;

          e.preventDefault();

          const walk = e.pageX - startXRef.current;
          scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
        }}
      >
        {movies.map((movie) => (
          <Image
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            draggable={false}
            width={102}
            height={102}
            className="h-[102px] w-[102px] shrink-0 rounded-full object-cover"
          />
        ))}
      </div>
    </section>
  );
}
