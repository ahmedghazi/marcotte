import clsx from "clsx";
import Image from "next/image";
import { ImageProps } from "../types/type";

type Props = {
  data: ImageProps;
  onLoad?: () => void;
};
const Figure = ({ data, onLoad }: Props) => {
  const { index, src, width, height, align, overlay } = data;
  return (
    <figure
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
        loading='eager'
        onLoad={onLoad}
      />
      {overlay && (
        <Image
          className={clsx("img-overlay")}
          src={overlay.src}
          alt=''
          width={overlay.width}
          height={overlay.height}
          loading='eager'
          style={{
            width: `${overlay.w}%`,
            height: "auto",
            left: `${overlay.x}%`,
            top: `${overlay.y}%`,
            mixBlendMode: (overlay.blend as any) || "normal",
          }}
        />
      )}
    </figure>
  );
};

export default Figure;
