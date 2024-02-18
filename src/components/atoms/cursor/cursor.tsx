"use client";
import React from 'react';
import "./cursor.scss";

function Cursor() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (ref.current == null) return;

        let trailer: any = ref.current;

        const animateTrailer = (e: any, interacting: boolean) => {
            let x = e.clientX - trailer.offsetWidth / 2
            let y = e.clientY - trailer.offsetHeight / 2

            const keyframes = {
                transform: `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1
                    })`,
                backgroundColor: interacting ? "transparent" : "#212529",
            }

            trailer.animate(keyframes, {
                duration: 800,
                fill: 'forwards',
            })
        };
        
        window.onmousemove = (e: any) => {
            const interactable = e.target.closest('.interactable'),
                interacting = interactable !== null

            animateTrailer(e, interacting)
        }
    }, [])

    return (
        <div
            className="cursor"
            ref={ref}
        />
    );
}

export { Cursor };