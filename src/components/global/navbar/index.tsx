'use client';
import StyledLink from '@/components/global/StyledLink';
import Link from 'next/link';
import { config } from '@/utils/config';
import TextScroller from '@/components/global/TextScroller';

export function TopBar() {
  return (
    <nav className={'fixed flex w-full justify-between p-8'}>
      <Link href={'/'}>{config.initials}</Link>
      <div className={'relative'}>
        <OpenForWorkButton />
      </div>
    </nav>
  );
}

export function Menu() {
  return (
    <nav className={'fixed bottom-0 flex w-full justify-between p-8'}>
      <ul className={'flex w-full items-center justify-between'}>
        <StyledLink ally={'work link'} name={'work'} />
        <StyledLink ally={'lab link'} name={'lab'} />
        <StyledLink ally={'about link'} name={'about'} />
      </ul>
    </nav>
  );
}

const OpenForWorkButton = () => {
  return (
    <Link href={'/contact'} className={'block h-[2rem] w-[20rem]'}>
      <TextScroller
        text={'Open For Work'}
        styles={'hover:text-white hover:bg-black'}
      />
    </Link>
  );
};
