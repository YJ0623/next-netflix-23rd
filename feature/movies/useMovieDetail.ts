import { useQuery } from '@tanstack/react-query';
import type { MovieDetail } from './services/movieApi';

async function fetchMovieDetail(movieId: number): Promise<MovieDetail> {
  const res = await fetch(`/api/movies/${movieId}`);

  if (!res.ok) {
    throw new Error('영화 상세 정보를 불러오지 못했습니다.');
  }

  return res.json();
}

export function useMovieDetail(movieId: number) {
  return useQuery({
    queryKey: ['movie-detail', movieId],
    queryFn: () => fetchMovieDetail(movieId),
    enabled: !!movieId,
  });
}
