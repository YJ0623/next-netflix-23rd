import NetflixIcon from '@/public/icon_netflix.svg';

export default function Header() {
  return (
    <header className="flex items-center justify-center w-full h-15 gap-6">
      <NetflixIcon className="w-14 h-auto" />
      <a className="text-white text-body1">TV Shows</a>
      <a className="text-white text-body1">Movies</a>
      <a className="text-white text-body1">My List</a>
    </header>
  );
}
