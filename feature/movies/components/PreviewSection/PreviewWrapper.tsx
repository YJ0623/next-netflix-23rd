import PreviewSection from "@/feature/movies/components/PreviewSection/PreviewSection";
import { movieApi } from "@/feature/movies/services/movieApi";

export default async function PreviewWrapper() {
    const nowPlayingData = await movieApi.getNowPlaying();

    return (
        <PreviewSection movies={nowPlayingData.results}/>
    )
}