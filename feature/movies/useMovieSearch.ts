import { useInfiniteQuery } from '@tanstack/react-query';
import type { MovieResponse } from '@/feature/movies/services/movieApi';

async function fetchSearch(
  query: string,
  page: number
): Promise<MovieResponse> {
  const res = await fetch(
    `/api/search?query=${encodeURIComponent(query)}&page=${page}`
  );

  if (!res.ok) {
    throw new Error('검색 결과를 불러오지 못했습니다.');
  }

  return res.json();
}

export function useMovieSearch(query: string) {
  return useInfiniteQuery({
    queryKey: ['search', query],
    queryFn: ({ pageParam }) => fetchSearch(query, pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    initialPageParam: 1,
    enabled: !!query,
  });
}
