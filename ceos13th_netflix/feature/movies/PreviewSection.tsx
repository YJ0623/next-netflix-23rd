'use client';

import { useRef } from 'react';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export default function PreviewSection({ movies }: { movies: Movie[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

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
          <img
            key={movie.id}
            src={`${imageBaseUrl}${movie.poster_path}`}
            alt={movie.title}
            draggable={false}
            className="h-[102px] w-[102px] shrink-0 rounded-full object-cover"
          />
        ))}
      </div>
    </section>
  );
}