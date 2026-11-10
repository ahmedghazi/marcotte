"use client";
import Image from "next/image";
import { publish } from "pubsub-js";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    console.log(active);
    publish("flower:active", active);
  }, [active]);
  return (
    <header>
      <div className='inner'>
        <Image
          className='logo-marcotte'
          src='/marcotte-logo.svg'
          alt='Marcotte logo'
          loading='eager'
          width={313}
          height={28}
          aria-label='Marcote logo'
        />
        <button
          type='button'
          className='btn-jardin bg-blend-multiply'
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
