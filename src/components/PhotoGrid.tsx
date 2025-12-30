"use client";
import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "./Lightbox";

type Photo = {
  src: string;
  alt: string;
};

export default function MasonryGrid({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<Photo | null>(null);

  return (
    <>
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
        {photos.map((p) => (
          <button
            key={p.src}
            className="mb-4 break-inside-avoid overflow-hidden bg-black/5"
            onClick={() => setActive(p)}
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={1600}
              height={1200}
              className="h-auto w-full"
            />
          </button>
        ))}
      </div>
      {active && (
        <Lightbox
          src={active.src}
          alt={active.alt}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}
