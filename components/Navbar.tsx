'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import HomeIcon from '@/public/icon_nav_home.svg';
import SearchIcon from '@/public/icon_nav_search.svg';
import ComingSoonIcon from '@/public/icon_nav_comingSoon.svg';
import DownloadIcon from '@/public/icon_nav_download.svg';
import HamburgerIcon from '@/public/icon_nav_hamburger.svg';

const navItems = [
  {
    label: 'Home',
    path: '/home',
    icon: HomeIcon,
  },
  {
    label: 'Search',
    path: '/search',
    icon: SearchIcon,
  },
  {
    label: 'Coming Soon',
    path: '/coming-soon',
    icon: ComingSoonIcon,
  },
  {
    label: 'Downloads',
    path: '/downloads',
    icon: DownloadIcon,
  },
  {
    label: 'More',
    path: '/more',
    icon: HamburgerIcon,
  },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-14 bg-gray-900">
      <ul className="flex h-full items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.path;

          return (
            <li key={item.label}>
              <Link
                href={item.path}
                className="flex flex-col items-center gap-1"
              >
                <Icon
                  className={`w-[18px] h-[18px] ${active ? 'text-white' : 'text-gray-700'}`}
                />

                <span
                  className={`text-[10px] ${
                    active ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
