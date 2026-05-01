// src/features/movies/services/movieApi.ts
import { tmdbFetch } from '@/shared/lib/tmdbClient';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
}

export interface MovieResponse {
  results: Movie[];
}

export const movieApi = {
  // 인기 영화 목록
  getPopular: () =>
    tmdbFetch<MovieResponse>('/movie/popular', {
      params: { language: 'en-US', page: '1' },
      next: { revalidate: 3600 },
    }),

  // 현재 상영 중인 영화 목록
  getNowPlaying: () =>
    tmdbFetch<MovieResponse>('/movie/now_playing', {
      params: { language: 'en-US', page: '1' },
      cache: 'no-store',
    }),

  getTop10KoreaToday: async () => {
    const data = await tmdbFetch<MovieResponse>('/trending/movie/day', {
      params: { language: 'ko-KR' },
      next: { revalidate: 3600 },
    });
    return { ...data, results: data.results.slice(0, 10) };
  },
};