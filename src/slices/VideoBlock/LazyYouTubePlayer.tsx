"use client";

import { KeyTextField } from "@prismicio/client";
import { useRef, useState } from "react";

type VideoProps = {
  youTubeID: KeyTextField;
};

export function LazyYouTubePlayer({ youTubeID }: VideoProps) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-full w-full">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youTubeID}?autoplay=1&mute=1&loop=1&playlist=${youTubeID}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="pointer-events-none h-full w-full border-0"
      />
    </div>
  );
}
