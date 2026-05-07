// src/features/movies/services/movieApi.ts
import { tmdbFetch } from '@/shared/lib/tmdbClient';

export interface Movie {
  id: number;
  name?: string;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
}

export interface MovieDetail extends Movie {
  release_date: string;
  vote_average: number;
  runtime: number;
  genres: {
    id: number;
    name: string;
  }[];
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
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

  getTrending: () => tmdbFetch<MovieResponse>('/trending/all/week'),

  getNewReleases: () => tmdbFetch<MovieResponse>('/movie/now_playing'),

  getTop10NigeriaToday: async () => {
    const data = await tmdbFetch<MovieResponse>('/discover/movie', {
      params: { with_origin_country: 'NG', sort_by: 'popularity.desc' },
    });
    return { ...data, results: data.results.slice(0, 10) };
  },

  getAfricanMovies: () =>
    tmdbFetch<MovieResponse>('/discover/movie', {
      params: {
        with_origin_country: 'NG|ZA|KE|EG',
        sort_by: 'popularity.desc',
      },
    }),

  getNollywood: () =>
    tmdbFetch<MovieResponse>('/discover/movie', {
      params: { with_origin_country: 'NG', sort_by: 'popularity.desc' },
    }),

  // 넷플릭스 오리지널 (TMDB에서 넷플릭스의 고유 Network ID는 213)
  getNetflixOriginals: () =>
    tmdbFetch<MovieResponse>('/discover/tv', {
      params: { with_networks: '213', sort_by: 'popularity.desc' },
    }),

  getTvThrillersMysteries: () =>
    tmdbFetch<MovieResponse>('/discover/tv', {
      params: { with_genres: '10768,9648', sort_by: 'popularity.desc' },
    }),
  getUsTvShows: () =>
    tmdbFetch<MovieResponse>('/discover/tv', {
      params: { with_origin_country: 'US', sort_by: 'popularity.desc' },
    }),

  getContinueWatching: () =>
    tmdbFetch<MovieResponse>('/movie/popular', { params: { page: '2' } }),
  getMyList: () =>
    tmdbFetch<MovieResponse>('/movie/top_rated', { params: { page: '1' } }),
  getWatchItAgain: () =>
    tmdbFetch<MovieResponse>('/movie/popular', { params: { page: '3' } }),

  searchMovies: (query: string, page = 1) =>
    tmdbFetch<MovieResponse>('/search/movie', {
      params: {
        query,
        language: 'ko-KR',
        include_adult: 'false', // 이거 true로 하면 큰일남
        page: String(page),
      },
    }),

  //영화 상세내용
  getMovieDetail: (movieId: number) =>
    tmdbFetch<MovieDetail>(`/movie/${movieId}`, {
      params: {
        language: 'ko-KR',
      },
    }),
};
