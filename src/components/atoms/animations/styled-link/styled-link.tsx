"use client"
import clsx from 'clsx';
import { UrlObject } from 'url';
import React from 'react';
import Link from 'next/link';
import "./styled-link.scss";
import { usePathname, useRouter } from 'next/navigation';
import { animatePageOut } from '@/utils/helpers/pageTransitionAnimations';

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
      className={clsx("link interactable", classes)}
      href={href}
      aria-label={`${name} page`}
    >
      {children ? children : <span>{name}</span>}
    </Link>
  );
}

function TransitionLink({
  href,
  label,
  children,
  classes
}: {
  href: string;
  label?: string;
  children?: React.ReactNode;
  classes?: string;
}) {
  const router = useRouter();
  const pathname = usePathname()
  console.log("🚀 ~ pathname:", pathname);

  const handleClick = () => {
    animatePageOut(href, router, pathname);
  };

  return (
    <button
      className={clsx("link interactable cursor-pointer", classes)}
      onClick={handleClick}
    >
      {label ? label : children}
    </button>
  );
}

export { StyledLink, TransitionLink };
