import { ImageResponse } from 'next/og';
import { movieApi, type MediaType } from '@/feature/movies/services/movieApi';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

type Props = {
  params: Promise<{
    mediaType: MediaType;
    id: string;
  }>;
};

export default async function OpenGraphImage({ params }: Props) {
  const { mediaType, id } = await params;

  const detail = await movieApi.getDetail(mediaType, Number(id));

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        background: 'black',
        color: 'white',
      }}
    >
      {/* backdrop image */}
      {detail.backdrop_path && (
        <img
          src={`https://image.tmdb.org/t/p/w1280${detail.backdrop_path}`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}

      {/* overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2)',
        }}
      />

      {/* title */}
      <div
        style={{
          position: 'relative',
          padding: '64px',
          fontSize: 64,
          fontWeight: 700,
          lineHeight: 1.1,
        }}
      >
        {detail.title}
      </div>
    </div>,
    size
  );
}
