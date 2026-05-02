'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';

import HomeIconOff from '@/public/icon_home1.svg';
import HomeIconOn from '@/public/icon_home.svg';
import SearchIcon from '@/public/icon_search1.svg';
import ComingSoonIcon from '@/public/icon_comingSoon.svg';
import DownloadIconOff from '@/public/icon_download1.svg';
import DownloadIconOn from '@/public/icon_download.svg';
import HamburgerIcon from '@/public/icon_hamburger1.svg';

const navItems = [
  {
    label: 'Home',
    path: '/home',
    iconOff: HomeIconOff,
    iconOn: HomeIconOn,
  },
  {
    label: 'Search',
    path: '/search',
    iconOff: SearchIcon,
    iconOn: SearchIcon,
  },
  {
    label: 'Coming Soon',
    path: '/coming-soon',
    iconOff: ComingSoonIcon,
    iconOn: ComingSoonIcon,
  },
  {
    label: 'Downloads',
    path: '/downloads',
    iconOff: DownloadIconOff,
    iconOn: DownloadIconOn,
  },
  {
    label: 'More',
    path: '/more',
    iconOff: HamburgerIcon,
    iconOn: HamburgerIcon,
  },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-14 bg-gray-900">
      <ul className="flex h-full items-center justify-around">
        {navItems.map((item) => {
          const active = pathname === item.path;
          const currentIcon = active ? item.iconOn : item.iconOff;

          return (
            <li key={item.label}>
              <button className="flex flex-col items-center gap-1">
                <Image
                  src={currentIcon}
                  alt={`${item.label} icon`}
                  width={18}
                  height={18}
                />

                <span
                  className={`text-[10px] ${
                    active ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}