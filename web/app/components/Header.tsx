import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header>
      <div className='inner'>
        <Image
          className='logo-marcotte'
          src='/marcotte-logo.svg'
          alt='Marcotte logo'
          width={313}
          height={28}
        />
        <Image
          className='logo-flower'
          src='/marcotte-flower.svg'
          alt='Marcotte flower'
          width={41}
          height={37}
        />
      </div>
    </header>
  );
}
