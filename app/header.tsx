"use client";
import { Container } from "@/components/container";
import { GitHubIcon, MenuIcon } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export const Header = () => {
  let pathname = usePathname();
  let [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-10 w-full bg-black py-6">
        <Container className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold">
            Dakota<span className="text-green">.</span>
          </Link>
          <nav className="hidden md:block">
            <div className="rounded-full border border-white p-1 text-lg">
              <ul className="flex">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      className={clsx(
                        "relative block py-2 px-7 font-bold uppercase",
                        {
                          "rounded-full bg-white text-black hover:text-black":
                            link.href === pathname,
                          "hover:text-gray-400": link.href !== pathname,
                        }
                      )}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <a
            className="p2 hidden rounded-full border border-white px-4 py-2 text-lg font-semibold uppercase hover:rounded-xl md:block"
            href="https://github.com/twofoldtech-dakota"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <button
            className="block text-4xl md:hidden"
            onClick={() => setOpen(open)}
          >
            <MenuIcon />
          </button>
        </Container>
      </header>
      <MobileNav open={open} />
    </>
  );
};
