const BASE_URL = 'https://api.themoviedb.org/3';
const ACCESS_TOKEN = process.env.MOVIE_ACCESS_TOKEN;

export interface FetchOptions extends RequestInit {
  params?: Record<string, string>;
}

export async function tmdbFetch<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  if (!ACCESS_TOKEN) {
    throw new Error('MOVIE_ACCESS_TOKEN이 설정되지 않았습니다.');
  }

  const { params, ...fetchOptions } = options;
  
  const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
  const url = `${BASE_URL}${endpoint}${queryString}`;

  const response = await fetch(url, {
    ...fetchOptions,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      ...fetchOptions.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`TMDB API 에러: ${response.status} ${response.statusText}`);
  }

  return response.json();
}