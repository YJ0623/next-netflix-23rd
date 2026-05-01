import Header from "@/components/Header";
import HeroCarousel from "@/feature/movies/MovieHero";
import PlayBar from "@/components/PlayBar";
import { movieApi } from "@/feature/movies/services/movieApi";
import MovieCard from "@/feature/movies/MovieCard";
import MovieRow from "@/feature/movies/MovieCard";

export default async function Home() {
    const top10KoreaData = await movieApi.getTop10KoreaToday();
    const [popular] = await Promise.all([
    movieApi.getPopular(),
    // movieApi.getTrending(),
    // movieApi.getNollywoodMovies(), // 이전에 만든 국가 필터 API
    // movieApi.getNollywoodMovies(), // 아프리카 영화도 비슷하게 구성
  ]);

    return (
        <div className="flex flex-col items-center w-full h-dvh bg-black">
            <div className="w-full h-auto px-4 pt-6 z-10 absolute">
                <Header />
            </div>

            <div className="w-full h-100">
                <HeroCarousel movies={top10KoreaData.results} />
            </div>

            <div className="w-full items-center justify-center flex mt-3">
                <PlayBar />
            </div>

            {/* 여기에 프리뷰 섹션 */}

            {/* 여기에 추천 섹션 */}
            <div className="w-full">
                <MovieRow title="Popular on Netflix" movies={popular.results} />
            </div>
        </div>
    )
}