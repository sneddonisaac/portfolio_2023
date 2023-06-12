'use client';
import Link from 'next/link';
import { config } from '@/utils/config';
import Menu from '@/components/global/navbar/Menu';
import TextScroller from '@/components/global/TextScroller';

export default function Navbar() {
  return (
    <nav className='grid grid-cols-3 border-b border-black'>
      <Link href='/'>{config.name}</Link>
      <div className='place-self-center'>
        <OpenForWorkButton />
      </div>
      <Menu />
    </nav>
  );
}

const OpenForWorkButton = () => {
  return (
    <Link
      href='/contact'
      className='block w-40 overflow-clip rounded-full border border-black'
    >
      <TextScroller text='Open For Work' styles='' />
    </Link>
  );
};
