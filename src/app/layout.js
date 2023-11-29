import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UserWay Accessibility Training",
  description: "Accessibility Training Code Examples",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="h-24 bg-slate-200 fixed top-0 left-0 right-0">
        <span className="text-xs bg-stone-950 text-white py-1 px-2 m-1 rounded-sm font-bold inline-block" aria-hidden="true">Header</span>
        </header>
        <nav className="fixed left-0 top-24 bottom-24 bg-neutral-300 w-60">
          <span className="text-xs bg-stone-950 text-white py-1 px-2 m-1 rounded-sm font-bold inline-block" aria-hidden="true">Navigation</span>
          <ul className="pl-5 font-bold">
            <li className="py-1">
              <Link href="/" className="hover:underline focus:ring ring-blue-500 ring-offset-3 outline-none">Landmarks</Link>
            </li>
            <li className="py-1">
              <Link href="/button" className="hover:underline focus:ring ring-blue-500 ring-offset-3 outline-none">Button</Link>
            </li>
            <li className="py-1">
              <Link href="/custom-button" className="hover:underline focus:ring ring-blue-500 ring-offset-3 outline-none">Custom Button</Link>
            </li>
            <li className="py-1">
              <Link href="/toggle-button" className="hover:underline focus:ring ring-blue-500 ring-offset-3 outline-none">Toggle Button</Link>
            </li>
            <li className="py-1">
              <Link href="/alert" className="hover:underline focus:ring ring-blue-500 ring-offset-3 outline-none">Alert</Link>
            </li>
            <li className="py-1">
              <Link href="/live-regions" className="hover:underline focus:ring ring-blue-500 ring-offset-3 outline-none">Live Regions</Link>
            </li>
            <li className="py-1">
              <Link href="/disclosure-pattern" className="hover:underline focus:ring ring-blue-500 ring-offset-3 outline-none">Disclosure Pattern</Link>
            </li>
            <li className="py-1">
              <Link href="/accordion" className="hover:underline focus:ring ring-blue-500 ring-offset-3 outline-none">Accordion</Link>
            </li>
            <li className="py-1">
              <Link href="/summary-element" className="hover:underline focus:ring ring-blue-500 ring-offset-3 outline-none">Summary Element</Link>
            </li>
          </ul>
        </nav>
        <main className="flex min-h-screen pt-24 pb-24 pl-60 pr-60 bg-zinc-100">
          {children}
          <span className="text-xs bg-stone-950 text-white py-1 px-2 m-1 rounded-sm font-bold inline- absolute right-60" aria-hidden="true">Main</span>
        </main>
        <aside className="fixed right-0 top-24 bottom-24 bg-neutral-300 w-60">
          <span className="text-xs bg-stone-950 text-white py-1 px-2 m-1 rounded-sm font-bold inline- absolute right-0" aria-hidden="true">Complementary</span>
        </aside>
        <footer className="bg-stone-500	h-24 fixed bottom-0 left-0 right-0">
          <span className="text-xs bg-stone-950 text-white py-1 px-2 m-1 rounded-sm font-bold inline-block" aria-hidden="true">Footer</span>
        </footer>
      </body>
    </html>
  );
}
