'use client';

import Image from 'next/image';
import { useMovieSearch } from './useMovieSearch';

export default function MovieSearchList({ query }: { query: string }) {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useMovieSearch(query);

  if (!query) return null;

  const results = data?.pages.flatMap((page) => page.results) ?? [];

  if (error) {
    return (
      <div className="text-red-500 text-center mt-10">
        검색 결과를 불러오지 못했습니다.
      </div>
    );
  }

  if (isLoading) {
    // 스켈레톤 ui 대신 우선 테스트용!
    return <div className="text-gray-500 text-center mt-10">검색 중...</div>;
  }

  return (
    <>
      <div className="text-heading1 text-white ml-4 my-3.5">Top Searches</div>
      
      {results.length === 0 && (
        <div className="text-gray-500 text-center mt-10">
          검색 결과가 없습니다.
        </div>
      )}

      {results.map((item) => (
        <div
          key={item.id}
          className="flex flex-row w-full h-[76px] bg-gray-800 text-white my-0.5"
        >
          {/* 포스터 이미지 */}
          <div className="relative w-[146px] h-[76px] shrink-0 bg-gray-900">
            {(item.backdrop_path || item.poster_path) && (
              <Image
                src={`${imageBaseUrl}${item.backdrop_path || item.poster_path}`}
                alt={item.title || 'Movie Poster'}
                fill
                className="object-cover"
              />
            )}
          </div>

          <div className="flex w-full h-full items-center ml-4.5 pr-4">
            {item.title}
          </div>
        </div>
      ))}

      {hasNextPage && (
        <button
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="w-full py-4 text-gray-500"
        >
          {isFetchingNextPage ? '더 불러오는 중...' : '더 보기'}
        </button>
      )}
    </>
  );
}
