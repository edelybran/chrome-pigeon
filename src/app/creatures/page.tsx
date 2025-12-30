import PhotoGrid from "../../components/PhotoGrid";

const photos = [
    { src: "/photos/creatures/01.jpeg", alt: "alt" },
    { src: "/photos/creatures/02.jpeg", alt: "alt" },
    { src: "/photos/creatures/03.jpeg", alt: "alt" },
    { src: "/photos/creatures/04.jpeg", alt: "alt" },
    { src: "/photos/creatures/05.jpeg", alt: "alt" },
    { src: "/photos/creatures/06.jpeg", alt: "alt" },
    { src: "/photos/creatures/07.jpeg", alt: "alt" },
    { src: "/photos/creatures/08.jpeg", alt: "alt" },
    { src: "/photos/creatures/09.jpeg", alt: "alt" },
    { src: "/photos/creatures/10.jpeg", alt: "alt" },
    { src: "/photos/creatures/11.jpeg", alt: "alt" },
    { src: "/photos/creatures/12.jpeg", alt: "alt" },
    { src: "/photos/creatures/13.jpeg", alt: "alt" },
    { src: "/photos/creatures/14.jpeg", alt: "alt" },
    { src: "/photos/creatures/15.jpeg", alt: "alt" },
    { src: "/photos/creatures/16.jpeg", alt: "alt" },
    { src: "/photos/creatures/17.jpeg", alt: "alt" },
    { src: "/photos/creatures/18.jpeg", alt: "alt" },
    { src: "/photos/creatures/19.jpeg", alt: "alt" },
    { src: "/photos/creatures/20.jpeg", alt: "alt" },
  ];

export default function CreaturesPage() {
  return (
    <section className="pt-10">
      <h1 className="text-2xl md:text-3xl tracking-[0.25em]">
        CHROME CREATURES
      </h1>
      <p className="mt-2 mb-10 opacity-80">Living things, observed in passing.</p>
      <PhotoGrid photos={photos} />
    </section>
  );
}
