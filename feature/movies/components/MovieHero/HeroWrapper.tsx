
import HeroCarousel from './MovieHero';
import { movieApi } from '@/feature/movies/services/movieApi';

export default async function HeroWrapper() {
  const top10KoreaData = await movieApi.getTop10KoreaToday(); 
  return <HeroCarousel movies={top10KoreaData.results} />;
}