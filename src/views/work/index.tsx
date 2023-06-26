'use client';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '@/utils/helpers/isomorphicEffect';

export default function WorkScroller() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: '-100%',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '2000 top',
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      ctx.kill();
    };
  }, []);

  return (
    <section className={'scroll-section-outer'}>
      <div ref={triggerRef}>
        <div ref={sectionRef} className={'scroll-section-inner'}>
          <section className={'scroll-section'}>
            <h2>Section 1</h2>
          </section>
          <section className={'scroll-section'}>
            <h2>Section 2</h2>
          </section>
          <section className={'scroll-section'}>
            <h2>Section 3</h2>
          </section>
        </div>
      </div>
    </section>
  );
}
