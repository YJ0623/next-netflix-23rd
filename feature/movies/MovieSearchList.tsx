'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useMovieSearch } from './useMovieSearch';

export default function MovieSearchList({ query }: { query: string }) {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const { ref, inView } = useInView({
    rootMargin: '200px',
  });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useMovieSearch(query);

  const results = data?.pages.flatMap((page) => page.results) ?? [];

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (!query) return null;

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

      <div ref={ref} className="h-10" />

      {isFetchingNextPage && (
        <div className="text-gray-500 text-center mt-10">더 불러오는 중...</div>
      )}

      {/* 마지막 페이지 도달 시 안내 문구 */}
      {!hasNextPage && results.length > 0 && (
        <div className="text-gray-500 text-center mt-10">
          모든 검색 결과를 불러왔습니다.
        </div>
      )}
    </>
  );
}
