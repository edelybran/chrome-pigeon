import "./globals.css";
import Image from "next/image";
import { NavTabs } from "./NavTabs";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
        <header className="flex flex-col items-center pt-16">
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
        <main className="mx-auto w-full max-w-6xl px-6 pb-24">
          {children}
        </main>
        <footer className="fixed bottom-0 left-0 z-50 w-full border-t border-zinc-200 bg-zinc-50/90 backdrop-blur">
          <div className="py-3 text-center text-xs tracking-[0.2em] text-zinc-500">
            <div>© Chrome Pigeon</div>
            <div className="mt-1">Built by Eden</div>
          </div>
        </footer>
      </body>
    </html>
  );
}