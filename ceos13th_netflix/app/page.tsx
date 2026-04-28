'use client';

import { useRouter } from 'next/navigation';
import Lottie from 'react-lottie-player'
import netflixAnimation from '@/public/lottie_netflix_logo.json';

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="flex h-screen w-full items-center justify-center bg-black">
      <Lottie
      loop={false}
      animationData={netflixAnimation}
      play
      style={{ width: 300, height: 300 }}
      onComplete={() => router.push('/home')}
    />
    </main>
  );
}
