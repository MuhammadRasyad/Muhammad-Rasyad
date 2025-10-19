"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef, useState } from "react";

type SafePlayerProps = {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  controls?: boolean;
};

export default function SafePlayer({
  src,
  className = "",
  loop = true,
  autoplay = true,
  controls = false,
}: SafePlayerProps) {
  const ref = useRef<Player>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current?.container;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "0px 0px 200px 0px", threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const inst = ref.current;
    if (!inst) return;
    if (inView) inst.play();
    else inst.pause();
  }, [inView]);

  return (
    <Player
      ref={ref}
      src={src}
      autoplay={autoplay}
      loop={loop}
      controls={controls}
      style={{ width: "100%", height: "100%" }}
      className={`pointer-events-none ${className}`}
    />
  );
}
