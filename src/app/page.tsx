import Image from "next/image";
import { NavTabs } from "./NavTabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <main className="flex flex-col items-center">
        <Image
          src="/chromePigeon.svg"
          alt="Chrome Pigeon header"
          width={2400}
          height={720}
          priority
          className="w-full max-w-[1200px] h-auto"
        />
        <NavTabs />
      </main>
    </div>
  );
}