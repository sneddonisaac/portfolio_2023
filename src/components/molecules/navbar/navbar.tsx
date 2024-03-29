"use client"
import React from "react";
import "./navbar.scss";
import clsx from "clsx";
import Link from "next/link";
import { config } from "@/utils/config";
import Menu from "./menu";
import { TransitionLink } from "@/components/atoms/animations/styled-link";

export function Navbar() {
  const [show, setShow] = React.useState(true)
  const controlNavbar = () => {
    if (window.scrollY < 50) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  const [menu, setMenu] = React.useState(false);

  return (
    <>
      <nav className="navbar">
        <div>
          <TransitionLink href={'/'} classes='navbar__home interactable'>
            <span className={clsx(show ? "navbar__home--show" : "navbar__home--remove")}>{config.name}</span>
            <span className={clsx(show ? "navbar__home--remove" : "navbar__home--show")}>{config.initials}</span>
          </TransitionLink>
        </div>
        <button aria-label='menu-button' onClick={() => setMenu(!menu)} className={clsx('space-y-1 navbar__menu interactable')}>
          <div className={clsx('navbar__menu--line', menu ? "open" : "closed")} />
          <div className={clsx('navbar__menu--line', menu && "hidden")} />
          <div className={clsx('navbar__menu--line', menu ? "open" : "closed")} />
        </button>
        <Menu show={menu} setShow={setMenu} />
      </nav>
    </>
  );
}
