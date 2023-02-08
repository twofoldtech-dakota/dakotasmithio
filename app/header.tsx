"use client";
import { Container } from "@/components/container";
import { GitHubIcon } from "@/components/icons";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export const Header = () => {
  let pathname = usePathname();

  return (
    <header className="bg-beige relative z-10 w-full py-6">
      <Container className="flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold">
          Dakota Smith
        </Link>
        <nav>
          <div className="rounded-full border border-white p-1 text-lg">
            <ul className="flex">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    className={clsx(
                      "relative block py-2 px-7 font-bold uppercase hover:underline",
                      {
                        "rounded-full bg-white text-black hover:no-underline":
                          link.href === pathname,
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
          className="p2 rounded-full border border-white px-4 py-2 text-lg font-semibold uppercase hover:rounded-xl"
          href="https://github.com/twofoldtech-dakota"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      </Container>
    </header>
  );
};
