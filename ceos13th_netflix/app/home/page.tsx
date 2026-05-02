import Header from '@/components/Header';
import HeroCarousel from '@/feature/movies/MovieHero';
import PreviewSection from '@/feature/movies/PreviewSection';
import { movieApi } from '@/feature/movies/services/movieApi';
import MovieRow from '@/feature/movies/MovieRow';
import { CATEGORIES } from '@/const/categories';

export default async function Home() {
  const top10KoreaData = await movieApi.getTop10KoreaToday();
  const nowPlayingData = await movieApi.getNowPlaying();

  const categoryResults = await Promise.all(
    CATEGORIES.map(async (category) => {
      const data = await category.fetcher();
      return {
        id: category.id,
        title: category.title,
        movies: data.results, // 알맹이 데이터만 추출
      };
    })
  );

  return (
    <div className="flex w-full min-h-dvh justify-center bg-black">
      <div className="w-full px-4 pt-6 z-10 absolute">
        <Header />
      </div>

      <div className="w-full bg-black">
        <HeroCarousel movies={top10KoreaData.results} />
        <PreviewSection movies={nowPlayingData.results} />
        {categoryResults.map((category) => (
          <MovieRow 
            key={category.id} 
            title={category.title} 
            movies={category.movies} 
          />
        ))}
      </div>
    </div>
  );
}
