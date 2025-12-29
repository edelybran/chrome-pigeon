import "./globals.css";
import Image from "next/image";
import { NavTabs } from "./NavTabs";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
        <header className="flex flex-col items-center">
          <Image
            src="/chromePigeon.svg"
            alt="Chrome Pigeon header"
            width={2400}
            height={720}
            priority
            className="h-auto w-full max-w-[1200px] px-6"
          />

          <NavTabs />
        </header>

        <main className="mx-auto max-w-6xl px-6 pb-20">
          {children}
        </main>
      </body>
    </html>
  );
}