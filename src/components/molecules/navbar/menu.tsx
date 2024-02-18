'use client';
import { StyledLink } from '@/components/atoms/animations/styled-link';
import clsx from "clsx";
import React from 'react';

import "./menu.scss";

const navigation = [
  { id: 1, name: "work", ally: "menu item - work" },
  { id: 2, name: "lab", ally: "menu item - lab" },
  { id: 3, name: "about", ally: "menu item - about" },
  { id: 4, name: "blog", ally: "menu item - blog" },
  { id: 5, name: "contact", ally: "menu item - contact" },
];

export default function Menu({ show, setShow }: { show: boolean, setShow: any }) {
  React.useEffect(() => {
    /* document.body.style.overflowY = show ? "hidden" : "scroll"; */
  }, [show])

  React.useEffect(() => {
    const keyDownHandler = (event: any) => {

      if (event.key === 'Escape' && show) {
        event.preventDefault();

        setShow(!show);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [show, setShow]);

  return (
    <>
      <div className={clsx(show ? "menu" : "menu menu__hidden")}>
        {show &&
          <div className='menu__container'>
            <div className='menu__container-title'>Menu</div>
            <ul>
              {navigation.map((i) => (
                <li onClick={() => setShow(!show)} key={i.id}>
                  <StyledLink href={i.name}>{i.name}</StyledLink>
                </li>
              ))}
            </ul>
          </div>}
      </div>
      {show && <div onClick={() => setShow(!show)} className='menu__overlay' />}
    </>
  )
}
