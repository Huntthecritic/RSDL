'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { AboutHero } from '@/components/about/about-hero';
import { MissionVision } from '@/components/about/mission-vision';
import { WhatWeDo } from '@/components/about/what-we-do';
import { WhoWePartner } from '@/components/about/who-we-partner';
import { AboutCTA } from '@/components/about/about-cta';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <MissionVision />
        <WhatWeDo />
        <WhoWePartner />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
