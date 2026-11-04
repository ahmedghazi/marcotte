"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  data: {
    src: string;
    width: number;
    height: number;
  }[];
};

const Dock = ({ data }: Props) => {
  const [factor, setFactor] = useState(1);
  const [active, setActive] = useState(1);
  const ref = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    const totalHeight = data.reduce((acc, item) => acc + item.height, 0);
    // const wHeight = window.innerHeight;
    const docHeight = ref.current?.offsetHeight || 0;
    const reducer = docHeight / totalHeight;
    setFactor(reducer);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    // root null = viewport (html is the scroller, not body)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx);
            setActive(idx);
          }
        });
      },
      { root: null, threshold: 0.5 },
    );
    document
      .querySelectorAll(".images figure")
      .forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const _goTo = (idx: number) => {
    const element = document.getElementById(`image-${idx}`);
    if (element) {
      element.scrollIntoView();
    }
  };
  return (
    <div
      className={clsx("dock", factor !== 1 ? "opacity-100" : "opacity-0")}
      ref={ref}>
      <ul>
        {data?.map((item, i) => (
          <li
            className={clsx("dock-item", active === i + 1 && "is-active")}
            key={i}
            onClick={() => _goTo(i + 1)}
            onMouseEnter={() => _goTo(i + 1)}>
            <Image
              src={item.src}
              alt=''
              width={item.width * factor}
              height={item.height * factor}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dock;
