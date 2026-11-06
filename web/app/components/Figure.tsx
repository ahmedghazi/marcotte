import clsx from "clsx";
import Image from "next/image";
import { ImageProps } from "../types/type";
import { useInView } from "../hooks/useInView";
import { useEffect, useState } from "react";
import { subscribe, unsubscribe } from "pubsub-js";

type Props = {
  data: ImageProps;
  onLoad?: () => void;
};
const Figure = ({ data, onLoad }: Props) => {
  const { index, src, width, height, align, overlay } = data;
  const { ref, isInView } = useInView();
  const [displayOverlay, setDisplayOverlay] = useState<boolean>(false);

  useEffect(() => {
    const token = subscribe("flower:active", (e, active) => {
      setDisplayOverlay(active && isInView);
    });
    return () => {
      unsubscribe(token);
    };
  }, [isInView]);
  // first image is the LCP: load it right away, let the browser lazy-load the rest
  const loading = index === 0 ? "eager" : "lazy";
  return (
    <figure
      ref={ref}
      className='image snap'
      data-idx={index + 1}
      id={`image-${index + 1}`}>
      <Image
        className={clsx(
          "visual",
          width > height ? "is-landscape" : "is-portrait",
          align && `align-${align}`,
        )}
        src={src}
        alt=''
        width={width}
        height={height}
        loading={loading}
        fetchPriority={index === 0 ? "high" : "auto"}
        onLoad={onLoad}
      />
      {/* {overlay && <div>{overlay.x}</div>} */}
      {overlay && (
        <Image
          className={clsx("img-overlay")}
          src={overlay.src}
          alt=''
          width={overlay.width}
          height={overlay.height}
          loading={loading}
          style={{
            width: `${overlay.w}%`,
            height: "auto",
            left: `${overlay.x}%`,
            top: `${overlay.y}%`,
            mixBlendMode: overlay.blend || "normal",
            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
            // transitionDelay: "0.5s",
            opacity: displayOverlay ? 1 : 0,
            transform: displayOverlay ? "translateY(0)" : `translateY(2rem)`,
            // transform: displayOverlay
            //   ? "translateX(0)"
            //   : `translateX(${overlay.x > 50 ? "2rem" : "-2rem"})`,
          }}
        />
      )}
    </figure>
  );
};

export default Figure;
