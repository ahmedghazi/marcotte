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
          className='btn-flower'
          aria-pressed={active}
          onClick={() => setActive(!active)}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}>
          <Image
            className='logo-flower'
            src='/marcotte-flower.svg'
            alt='Marcotte flower'
            width={41}
            height={37}
          />
        </button>
      </div>
    </header>
  );
}
