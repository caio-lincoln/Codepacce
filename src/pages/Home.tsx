import React from 'react';
import { HomeHero } from '../components/home/HomeHero';
import { HomeStats } from '../components/home/HomeStats';
import { HomeServices } from '../components/home/HomeServices';
import { HomeProcess } from '../components/home/HomeProcess';
import { HomeWhyUs } from '../components/home/HomeWhyUs';
import { HomeTechStack } from '../components/home/HomeTechStack';
import { HomeCTA } from '../components/home/HomeCTA';

export function Home() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeProcess />
      <HomeServices />
      <HomeWhyUs />
      <HomeTechStack />
      <HomeCTA />
    </>
  );
}
