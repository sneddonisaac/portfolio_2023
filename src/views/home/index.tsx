'use client';
import { Canvas } from '@react-three/fiber';
import Box from '@/components/gl/Box';
import SphereComponent from '@/components/gl/Sphere2';

export default function HomeView() {
  return (
    <main className='flex h-screen w-screen flex-col items-center justify-between overflow-hidden p-24'>
      <div
        className={
          'fixed w-full h-full text-center text-5xl font-semibold'
        }
	style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <SphereComponent radius={10} />
      </div>
      <div
        className={
          'fixed left-[50%] top-[50%] w-2/3 -translate-x-1/2 -translate-y-1/2 text-center text-5xl font-semibold'
        }
      >
        <span className={'relative z-10'}>
          Creative Web Developer
          <span
            className={
              'absolute bottom-0 whitespace-nowrap text-lg font-normal'
            }
          >
            UK Based
          </span>
        </span>
      </div>
    </main>
  );
}
