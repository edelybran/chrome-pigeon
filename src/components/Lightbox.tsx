"use client";

import Image from "next/image";

type LightboxProps = {
  src: string;
  alt: string;
  onClose: () => void;
};

export function Lightbox({ src, alt, onClose }: LightboxProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative max-h-[90vh] max-w-[90vw]">
        <Image
          src={src}
          alt={alt}
          width={2400}
          height={1600}
          className="h-auto w-full"
          priority
        />
      </div>
    </div>
  );
}