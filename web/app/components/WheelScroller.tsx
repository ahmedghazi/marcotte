"use client";

import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** quiet time (ms) after the last wheel event before a new step is allowed */
  delay?: number;
  /** min swipe distance (px) to trigger a step on touch */
  threshold?: number;
};

const WheelScroller = ({
  children,
  className,
  delay = 200,
  threshold = 40,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let locked = false;
    let timer: ReturnType<typeof setTimeout>;
    let touchY = 0;

    const go = (dir: number) => {
      const items = el.children as HTMLCollectionOf<HTMLElement>;
      if (!items.length) return;
      // current = child closest to the top of the container
      let current = 0;
      let min = Infinity;
      for (let i = 0; i < items.length; i++) {
        const d = Math.abs(items[i].offsetTop - el.scrollTop);
        if (d < min) {
          min = d;
          current = i;
        }
      }
      const next = items[current + dir];
      if (next) {
        // el.scrollTo({ top: next.offsetTop, behavior: "smooth" });
        el.scrollTo({ top: next.offsetTop, behavior: "auto" });
        // next.scrollIntoView();
      }
    };

    // leading edge: step on first event, then stay locked until events stop
    // for `delay` ms (absorbs trackpad / magic mouse inertia)
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      clearTimeout(timer);
      timer = setTimeout(() => (locked = false), delay);
      if (locked || Math.abs(e.deltaY) < 2) return;
      locked = true;
      go(Math.sign(e.deltaY));
    };

    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => e.preventDefault();
    const onTouchEnd = (e: TouchEvent) => {
      const delta = touchY - e.changedTouches[0].clientY;
      if (Math.abs(delta) > threshold) go(Math.sign(delta));
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);
    return () => {
      clearTimeout(timer);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`wheel-scroller ${className || ""}`}>
      {children}
    </div>
  );
};

export default WheelScroller;
