'use client';
import StyledLink from '@/components/global/StyledLink';
import clsx from "clsx";
import React from 'react';

import "./menu.scss";

const navigation = [
    { id: 1, name: "work", ally: "menu item - work" },
    { id: 2, name: "lab", ally: "menu item - lab" },
    { id: 3, name: "about", ally: "menu item - about" },
    { id: 3, name: "blog", ally: "menu item - blog" },
    { id: 4, name: "contact", ally: "menu item - contact" },
];

export default function Menu({ show, setShow }: { show: boolean, setShow: any }) {
    React.useEffect(() => {
        /* document.body.style.overflowY = show ? "hidden" : "scroll"; */
    }, [show])
    return (
        <>
            <div className={clsx(show ? "menu" : "menu menu_hidden")}>
                {show &&
                    <div className='h-full flex col-span-3 flex-col uppercase p-8'>
                        <div className='text-9xl'>Menu</div>
                        <ul className='list-none'>
                            {navigation.map((i) => (
                                <li onClick={() => setShow(!show)} className={clsx(show ? 'uppercase text-4xl transition-all translate-x-[0] overflow-hidden duration-300 delay-200 ease-in' : "-translate-x-[100%]")} key={i.id}>
                                    <StyledLink ally={i.ally} name={i.name} href={i.name}>{i.name}</StyledLink>
                                </li>
                            ))}
                        </ul>
                    </div>}
            </div>
            {show && <div className='menu__overlay' />}
        </>
    )
}