import Image from "next/image";

type Photo = {
  src: string;
  alt: string;
};

export default function MasonryGrid({ photos }: { photos: Photo[] }) {
  return (
    <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
      {photos.map((p) => (
        <div
          key={p.src}
          className="mb-4 break-inside-avoid overflow-hidden bg-black/5"
        >
          <Image
            src={p.src}
            alt={p.alt}
            width={1600}
            height={1200}
            className="h-auto w-full"
          />
        </div>
      ))}
    </div>
  );
}