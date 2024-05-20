import Feature from '@/components/Feature';
import Hero from '@/components/Hero';

import LogoClouds from '@/components/LogoClouds';
import Workshops from '@/components/Workshops';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between pt-24'>
      <Hero />
      <Feature />
      <LogoClouds />
      <Workshops />
    </main>
  );
}
