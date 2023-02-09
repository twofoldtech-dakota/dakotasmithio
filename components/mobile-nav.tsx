import clsx from "clsx";
import Link from "next/link";

interface MobileNavProps {
  open: boolean;
}

const links = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export const MobileNav = ({ open }: MobileNavProps) => {
  console.log(open);
  return (
    <div
      className={clsx(
        "absolute z-0 block h-full w-full overscroll-contain border-t bg-light_black md:hidden",
        {
          hidden: !open,
        }
      )}
    >
      <ul className="flex flex-col overflow-hidden">
        {links.map((link) => (
          <li key={link.href} className="flex border-b-2 border-dashed">
            <Link
              className="w-full p-6 text-lg font-semibold uppercase text-white"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}{" "}
      </ul>
    </div>
  );
};
