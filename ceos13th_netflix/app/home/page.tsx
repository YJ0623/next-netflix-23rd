import Header from '@/components/Header';
import HeroCarousel from '@/feature/movies/MovieHero';
import PreviewSection from '@/feature/movies/PreviewSection';
import { movieApi } from '@/feature/movies/services/movieApi';

export default async function Home() {
  const top10KoreaData = await movieApi.getTop10KoreaToday();
  const nowPlayingData = await movieApi.getNowPlaying();

  return (
    <div className="flex w-full h-dvh justify-center bg-black">
      <div className="w-full px-4 pt-6 z-10 absolute">
        <Header />
      </div>

      <div className="w-full ">
        <HeroCarousel movies={top10KoreaData.results} />
        <PreviewSection movies={nowPlayingData.results} />
      </div>
    </div>
  );
}
