export type ImageProps = {
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
    blend?: "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten";
  };
};
