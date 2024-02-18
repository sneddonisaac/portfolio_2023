'use client';

import { Button } from "@/components/atoms/button";
import { AlternatingFeatures, AlternatingFeaturesType } from "@/components/organisms/alternating-features";
import { BasicParagraph } from "@/components/organisms/basic-paragraph";
import { HomeHero } from "@/components/organisms/home-hero";

export default function HomeView() {
  return (
    <main className='flex h-full w-screen flex-col items-center justify-between'>
      <HomeHero />
      {/* <section className="h-fit w-screen flex justify-center items-center p-8">
        <div className="h-full flex flex-col justify-center space-y-6 items-center">
          <h2 className="uppercase text-2xl font-bold">
            Leading from the front
          </h2>
          <p>
            Technical teams are seldom self sufficient and rarely run to optimal efficiencies without constant management.
          </p>
          <button className="px-4 py-2 border-black border-2 hover:bg-black hover:text-white transition-colors duration-300 ease-in-out">Learn More</button>
        </div>
      </section> */}
      <BasicParagraph />
      <AlternatingFeatures {...AlternatingFeaturesData} />
    </main>
  );
}

const AlternatingFeaturesData: AlternatingFeaturesType = {
  title: "Selected Works",
  features: [
    {
      id: "1",
      title: "Work One",
      description: "Duis non deserunt commodo minim.",
      link: "/work/test-1",
      image: {
        alt: "alt",
        height: 400,
        id: "1",
        url: "https://images.unsplash.com/photo-1703532931878-ff141fabd25e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 2680
      }
    },
    {
      id: "2",
      title: "Work Two",
      description: "Id minim eiusmod ea non fugiat veniam laborum consectetur velit.",
      link: "/work/test-2",

      image: {
        alt: "alt",
        height: 400,
        id: "1",
        url: "https://images.unsplash.com/photo-1689267305146-155a1459752c?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 2728
      }
    },
    {
      id: "3",
      title: "Work Three",
      description: "Culpa nulla magna consectetur esse incididunt occaecat ex magna.",
      link: "/work/test-3",
      image: {
        alt: "alt",
        height: 400,
        id: "1",
        url: "https://images.unsplash.com/photo-1706274072971-0d4bfb4c62c7?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 2832
      }
    },
    {
      id: "4",
      title: "Work Four",
      link: "/work/test-4",
      description: "Culpa nulla magna consectetur esse incididunt occaecat ex magna. Id minim eiusmod ea non fugiat veniam laborum consectetur velit.",
      image: {
        alt: "alt",
        height: 400,
        id: "1",
        url: "https://images.unsplash.com/photo-1698429894935-707de47ab2c7?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 2800
      }
    }
  ]
}
