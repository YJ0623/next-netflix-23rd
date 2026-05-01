import Image from 'next/image';
import { Movie } from '@/feature/movies/services/movieApi';

interface MovieRowProps {
  title: string;
  name?: string;
  movies: Movie[];
}

export default function MovieRow({ title, name, movies }: MovieRowProps) {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="mb-8 pl-4 md:pl-12">
      <h2 className="text-white text-lg md:text-2xl font-bold mb-4">
        {title}
      </h2>
      
      <div 
        className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {movies.map((movie) => (
          <div 
            key={movie.id} 
            className="relative flex-none w-[100px] h-[150px] md:w-[160px] md:h-[240px] transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || 'Movie Poster'}
              fill
              sizes="(max-width: 768px) 100px, 160px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}