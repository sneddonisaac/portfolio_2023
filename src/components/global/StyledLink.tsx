import clsx from 'clsx';
import { UrlObject } from 'url';
import React from 'react';
import { default as A } from 'next/link';

export enum Type {
  Underline = 'underline',
}

interface Props {
  name: string;
  href?: string | UrlObject;
  type?: Type;
  styles?: React.ComponentProps<'div'>['className'];
  children?: React.ReactNode;
  ally: string;
}

export default function Link({
  name,
  href,
  type = Type.Underline,
  styles,
  children,
  ally,
}: Props) {
  return (
    <div className={'group inline-block'}>
      <A
        className={clsx(styles)}
        href={href ? href : `/${name.toLowerCase()}`}
        aria-label={ally}
      >
        {children ? children : name}
      </A>
      {type === Type.Underline && (
        <div
          className={
            'mt-0.5 h-0.5 w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full'
          }
        />
      )}
    </div>
  );
}
