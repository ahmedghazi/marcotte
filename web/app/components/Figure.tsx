import clsx from "clsx";
import Image from "next/image";

type Props = {
  index: number;
  src: string;
  width: number;
  height: number;
  align?: "left" | "center" | "right" | undefined;

  overlay?: {
    src: string;
    width: number;
    height: number;
    w: number;
    x: number;
    y: number;
    blend?: string;
  };
};

const Figure = ({ index, src, width, height, align, overlay }: Props) => {
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
      />
      {overlay && (
        <Image
          // width > height ? "is-landscape" : "is-portrait",
          className={clsx("img-overlay")}
          src={overlay.src}
          alt=''
          width={overlay.width}
          height={overlay.height}
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
