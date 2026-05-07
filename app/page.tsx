'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Lottie from 'react-lottie-player';
import netflixAnimation from '@/public/lottie_netflix_logo.json';
import NetflexLogoIcon from '@/public/icon_netflix_logo.svg';

export default function LandingPage() {
  const router = useRouter();

  const [play, setPlay] = useState(false);

  return (
    <main className="flex h-screen w-full items-center justify-center bg-black">
      <button type="button" onClick={() => setPlay(true)}>
        {!play ? (
          <NetflexLogoIcon className="w-[300px] h-auto transform cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" />
        ) : (
          <Lottie
            loop={false}
            animationData={netflixAnimation}
            play={play}
            style={{ width: 300, height: 300 }}
            onComplete={() => router.push('/home')}
          />
        )}
      </button>
    </main>
  );
}
