import Link from "next/link";
import React from "react";

import { Inter, Noto_Sans } from "next/font/google";

const noto_sans2 = Noto_Sans({ weight: "600", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] });

const navbarLinks = [
  { href: "/about", title: "The Gemini Era", id: "1" },
  { href: "/technologies", title: "Capabilities", id: "2" },
  { href: "/impact", title: "Hands-on", id: "3" },
  { href: "/discover", title: "Safety", id: "4" },
  { href: "/discover", title: "Bard", id: "5" },
  { href: "/discover", title: "Built With Gemini", id: "6" },
];

const MainNavbar = () => {
  return (
    <div
      className={`bg-[#454344]  w-[640px] px-[26px] h-[52px] border-none rounded-[50px] sm:flex hidden flex-row sticky self-center top-[20px] z-10  text-white items-center justify-between ${inter.className} `}
    >
      {navbarLinks.map((link) => (
        <div className="text-white" key={link.id}>
          <Link
            href={`/${link.href}`}
            className="hover:underline hover:underline-offset-[10px] hover:cursor-pointer decoration-caribbeangreen-200 text-sm"
          >
            {link.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MainNavbar;
