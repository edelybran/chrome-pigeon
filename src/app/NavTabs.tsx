"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "CHROME CREATURES", href: "/creatures" },
  { label: "CHROME SCRAPBOOK", href: "/scrapbook" },
  { label: "CHROME CITY", href: "/city" },
  { label: "PIGEON LAB", href: "/lab" },
  { label: "ABOUT", href: "/about" },
];

export function NavTabs() {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-4 px-6 pb-12">
        {tabs.map((tab) => {
          const isActive =
            pathname === tab.href || pathname.startsWith(tab.href + "/");

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`text-sm md:text-base tracking-[0.22em] transition-opacity ${
                isActive
                  ? "opacity-100"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}