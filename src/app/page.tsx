'use client';

import { FullScreenHero } from '@/components/ui/FullScreenHero';
import { SplitScreenAbout } from '@/components/ui/SplitScreenAbout';
import { HorizontalProducts } from '@/components/ui/HorizontalProducts';
import { InteractiveIndustries } from '@/components/ui/InteractiveIndustries';
import { FullScreenFooter } from '@/components/ui/FullScreenFooter';

export default function Home() {
  return (
    <main className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black relative">
      <FullScreenHero />
      <SplitScreenAbout />
      <HorizontalProducts />
      <InteractiveIndustries />
      <FullScreenFooter />
    </main>
  );
}
