"use client";

import { useState } from "react";
import { ImageProps } from "../types/type";
import Figure from "./Figure";
import clsx from "clsx";
import WheelScroller from "./WheelScroller";

type Props = {
  data: ImageProps[];
};
const Images = ({ data }: Props) => {
  // others are lazy, so only wait for the first (visible) image before revealing
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div className={clsx("images", loaded && "is-loaded")}>
      <WheelScroller>
        <div className='h-screen start'></div>

        {data?.map((item: ImageProps, i: number) => (
          <Figure
            key={i}
            data={{ ...item, index: i }}
            onLoad={i === 0 ? () => setLoaded(true) : undefined}
          />
        ))}
      </WheelScroller>
    </div>
  );
};

export default Images;
