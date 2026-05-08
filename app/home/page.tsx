import Header from '@/components/Header';
import PreviewSection from '@/feature/movies/components/PreviewSection/PreviewSection';
import MovieRowWrapper from '@/feature/movies/components/MovieRow/MovieRowWrapper';
import NavBar from '@/components/Navbar';
import HeroSkeleton from '@/feature/movies/components/MovieHero/Skeleton';
import { Suspense } from 'react';
import PreviewSkeleton from '@/feature/movies/components/PreviewSection/Skeleton';
import MovieRowSkeleton from '@/feature/movies/components/MovieRow/Skeleton';
import HeroWrapper from '@/feature/movies/components/MovieHero/HeroWrapper';
import PreviewWrapper from '@/feature/movies/components/PreviewSection/PreviewWrapper';
import PlayBar from '@/components/PlayBar';

export default async function Home() {
  return (
    <div className="flex w-full min-h-dvh justify-center bg-black pb-20">
      <div className="w-full px-4 pt-6 z-10 absolute">
        <Header />
      </div>

      <div className="w-full bg-black">
        <Suspense fallback={<HeroSkeleton />}>
          <HeroWrapper />
        </Suspense>

        <div className="flex w-full justify-center">
          <PlayBar />
        </div>

        <Suspense fallback={<PreviewSkeleton />}>
          <PreviewWrapper />
        </Suspense>

        <Suspense fallback={<MovieRowSkeleton />}>
          <MovieRowWrapper />
        </Suspense>
      </div>

      <NavBar />
    </div>
  );
}
