'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { Movie } from '@/feature/movies/services/movieApi';

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export default function MovieRow({ title, movies }: MovieRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  if (!movies || movies.length === 0) return null;
  
  return (
    <section className="mt-8 px-4">
      <h2 className="mb-4 text-heading2 text-white">
        {title}
      </h2>

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
          <div key={movie.id} className="shrink-0">
            <Image
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={movie.title || '영화 포스터'}
              draggable={false}
              width={103}
              height={177}
              className="w-auto h-auto shrink-0 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
