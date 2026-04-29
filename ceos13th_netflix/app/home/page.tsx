import Header from "@/components/Header";
import HeroCarousel from "@/feature/movies/MovieHero";
import { movieApi } from "@/feature/movies/services/movieApi";

export default async function Home() {
    const top10KoreaData = await movieApi.getTop10KoreaToday();

    return (
        <div className="flex w-full h-dvh justify-center bg-black">
            <div className="w-full h-auto px-4 pt-6 z-10 absolute">
                <Header />
            </div>

            <div className="w-full h-100">
                <HeroCarousel movies={top10KoreaData.results} />
            </div>
            
            
        </div>
    )
}