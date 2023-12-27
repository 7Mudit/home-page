import Link from "next/link";

const navbarLinks = [
  { href: "/about", title: "About", id: "1" },
  { href: "/technologies", title: "Technologies", id: "2" },
  { href: "/impact", title: "Impact", id: "3" },
  { href: "/discover", title: "Discover", id: "4" },
];

const Navbar1 = () => {
  return (
    <header className="min-h-[64px] border-b-[1px] border-opacity-30 border-white sm:border-none p-5 flex flex-row items-center  gap-10">
      <Link href="/">
        <h1 className="text-xl text-white  ">
          <span className="font-bold tracking-wide">Learn</span> To Code
        </h1>
      </Link>
      <div className="hidden sm:flex flex-row text-white items-center justify-center gap-5">
        {navbarLinks.map((link) => (
          <div className="text-white" key={link.id}>
            <Link
              href={`/${link.href}`}
              className="hover:underline hover:underline-offset-[20px] hover:cursor-pointer decoration-emerald-300"
            >
              {link.title}
            </Link>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Navbar1;
