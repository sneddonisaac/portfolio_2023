'use client';

import HomeHero from "@/components/heros/HomeHero";

export default function HomeView() {
  return (
    <main className='flex h-full w-screen flex-col items-center justify-between'>
      <HomeHero />
      <section className="h-screen w-screen flex justify-center items-center p-8">
        <div className="h-full flex flex-col justify-center space-y-6 items-center">
          <h2 className="uppercase text-2xl font-bold">
            Leading from the front
          </h2>
          <p>
            Technical teams are seldom self sufficient and rarely run to optimal efficiencies without constant management.
          </p>
        </div>
      </section>
    </main>
  );
}
