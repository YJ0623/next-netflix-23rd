import Image from 'next/image';
import { movieApi } from '@/feature/movies/services/movieApi';

export default async function MovieSearchRow({ query }: { query: string }) {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const data = await movieApi.searchMovies(query);
  const results = data.results || [];

  return (
    <>
      <div className='text-heading1 text-white ml-4 my-3.5'>Top Searches</div>
      
      {results.map((item) => (
        <div key={item.id} className='flex flex-row w-full h-19 bg-gray-800 text-white my-0.5'>
          {/* 포스터 이미지 */}
          <div className="relative w-[146px] h-full shrink-0 bg-gray-900">
            {(item.backdrop_path || item.poster_path) && (
              <Image 
                src={`${imageBaseUrl}${item.backdrop_path || item.poster_path}`} 
                alt={item.title || 'Movie Poster'} 
                fill
                className='object-cover' 
              />
            )}
          </div>
          
          <div className='flex w-full h-full items-center ml-4.5 pr-4'>
            {item.title}
          </div>
        </div>
      ))}

      {results.length === 0 && (
        <div className="text-gray-500 text-center mt-10">
          검색 결과가 없습니다.
        </div>
      )}
    </>
  );
}