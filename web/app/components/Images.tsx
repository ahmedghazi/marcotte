"use client";

import { useEffect, useState } from "react";
import { ImageProps } from "../types/type";
import Figure from "./Figure";
import clsx from "clsx";

type Props = {
  data: ImageProps[];
};
const Images = ({ data }: Props) => {
  const total = data?.length || 0;
  const [loaded, setLoaded] = useState<number>(0);

  const onLoad = () => {
    setLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (loaded === total) {
      // setLoaded(true);
    }
  }, [loaded, total]);

  return (
    <div className={clsx("images", loaded === total && "is-loaded")}>
      {data?.map((item: ImageProps, i: number) => (
        <Figure key={i} data={{ ...item, index: i }} onLoad={onLoad} />
      ))}
    </div>
  );
};

export default Images;
