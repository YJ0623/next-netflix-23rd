import { NextRequest, NextResponse } from 'next/server';
import { movieApi } from '@/feature/movies/services/movieApi';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get('query') || '';
  const page = Number(searchParams.get('page') || '1');

  if (!query) {
    return NextResponse.json({
      page: 1,
      result: [],
      total_pages: 0,
    });
  }

  const data = await movieApi.searchMovies(query, page);

  return NextResponse.json(data);
}
