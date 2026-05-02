import { movieApi } from "@/feature/movies/services/movieApi";

export const CATEGORIES = [
  { id: 'continue', title: 'Continue Watching for Emenalo', fetcher: movieApi.getContinueWatching },
  { id: 'popular', title: 'Popular on Netflix', fetcher: movieApi.getPopular },
  { id: 'trending', title: 'Trending Now', fetcher: movieApi.getTrending },
  { id: 'top10_nigeria', title: 'Top 10 in Nigeria Today', fetcher: movieApi.getTop10NigeriaToday },
  { id: 'my_list', title: 'My List', fetcher: movieApi.getMyList },
  { id: 'african', title: 'African Movies', fetcher: movieApi.getAfricanMovies },
  { id: 'nollywood', title: 'Nollywood Movies & TV', fetcher: movieApi.getNollywood },
  { id: 'originals', title: 'Netflix Originals', fetcher: movieApi.getNetflixOriginals },
  { id: 'watch_again', title: 'Watch It Again', fetcher: movieApi.getWatchItAgain },
  { id: 'new_releases', title: 'New Releases', fetcher: movieApi.getNewReleases },
  { id: 'tv_thrillers', title: 'TV Thrillers & Mysteries', fetcher: movieApi.getTvThrillersMysteries },
  { id: 'us_tv', title: 'US TV Shows', fetcher: movieApi.getUsTvShows },
];