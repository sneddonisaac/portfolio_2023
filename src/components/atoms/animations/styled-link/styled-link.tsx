import clsx from 'clsx';
import { UrlObject } from 'url';
import React from 'react';
import Link from 'next/link';
import "./styled-link.scss";

interface Props {
  name?: string;
  href: string | UrlObject;
  classes?: React.ComponentProps<'div'>['className'];
  children?: React.ReactNode;
}

function StyledLink({
  name,
  href,
  classes,
  children,
}: Props) {
  return (
    <Link
      className={clsx("link", classes)}
      href={href}
      aria-label={`${name} page`}
    >
      {children ? children : <span>{name}</span>}
    </Link>
  );
}

export { StyledLink };
