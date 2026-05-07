'use client';

import Image from 'next/image';
import PlayIcon from '@/public/icon_play.svg';
import { useMovieDetail } from './useMovieDetail';

export default function MovieDetailModal({
  movieId,
  onClose,
}: {
  movieId: number;
  onClose: () => void;
}) {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  const { data, isLoading, error } = useMovieDetail(movieId);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 text-white">
        불러오는 중...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 text-white">
        상세 정보를 불러오지 못했습니다.
        <button
          type="button"
          onClick={onClose}
          className="rounded bg-gray-500 gap-5 text-white"
        >
          닫기
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black">
      {/* backdrop */}
      <div className="relative h-[415px] w-full">
        {data.backdrop_path && (
          <Image
            src={`${imageBaseUrl}${data.backdrop_path}`}
            alt={data.title}
            fill
            className="object-cover"
          />
        )}

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* content */}
      <div className="flex flex-col items-center pt-3 text-white">
        <button
          type="button"
          className="flex justify-center items-center gap-3 w-[302px] h-[44px] rounded-[4px] bg-gray-600 text-black"
        >
          <PlayIcon className="w-[14px] h-[16px]" />
          <div className="text-label1">Play</div>
        </button>

        <div className="w-full pl-[34px] pt-8 pb-3">
          <div className="text-heading1">Previews</div>
        </div>

        <div className="w-full px-[28px]">
          <p className="text-caption1">{data.overview}</p>
        </div>
      </div>
    </div>
  );
}
