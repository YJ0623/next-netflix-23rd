import type { Metadata } from 'next';
import { movieApi, type MediaType } from '@/feature/movies/services/movieApi';

type Props = {
  params: Promise<{
    mediaType: MediaType;
    id: string;
  }>;
};

const tmdbImg = (size: string, path: string | null) =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : '';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { mediaType, id } = await params;
  const detail = await movieApi.getDetail(mediaType, Number(id));

  const title = detail.title;
  const description = detail.overview?.slice(0, 160) || '';

  return {
    title: `${title} | Next Netflix`,
    description,
    openGraph: {
      title,
      description,
      images: detail.backdrop_path
        ? [{ url: tmdbImg('w1280', detail.backdrop_path) }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function DetailPage({ params }: Props) {
  const { mediaType, id } = await params;
  const detail = await movieApi.getDetail(mediaType, Number(id));

  return (
    <main className="min-h-dvh bg-black text-white">
      <h1>{detail.title}</h1>
    </main>
  );
}
