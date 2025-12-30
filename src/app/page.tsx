import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <main className="flex flex-col items-center">
      <div className="flex justify-center">
          <div className="relative w-full max-w-[480px]">
            <Image
              src="/photos/home/hero.jpeg"
              alt="Chicago street pigeon"
              width={1200}
              height={1600}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}