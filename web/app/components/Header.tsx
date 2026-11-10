"use client";
import Image from "next/image";
import { publish } from "pubsub-js";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    publish("flower:active", active);
  }, [active]);

  const _scrollTop = () => {
    const element = document.querySelector(".start");
    if (element) {
      element.scrollIntoView();
    }
    // window.scrollTo({
    //   top: 0,
    //   // behavior: "smooth",
    // });
  };
  return (
    <header>
      <div className='inner'>
        <button
          type='button'
          className='btn-logo'
          aria-pressed={active}
          onClick={() => _scrollTop()}>
          <Image
            className='logo-marcotte'
            src='/marcotte-logo.svg'
            alt='Marcotte logo'
            loading='eager'
            width={313}
            height={28}
            aria-label='Marcote logo'
          />
        </button>

        <button
          type='button'
          className='btn-jardin'
          aria-pressed={active}
          // onClick={() => setActive(!active)}
          onMouseEnter={() => setActive(!active)}
          // onMouseLeave={() => setActive(false)}
        >
          <Image
            className='logo-Jardin'
            src='/marcotte-Un-Vrai-Jardin.jpg'
            alt='Marcotte un vrai jardin'
            width={97}
            height={53}
          />
        </button>
      </div>
    </header>
  );
}
