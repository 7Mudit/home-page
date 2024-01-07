"use client";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navbarLinks = [
  { href: "/about", title: "About", id: "1" },
  { href: "/technologies", title: "Technologies", id: "2" },
  { href: "/impact", title: "Impact", id: "3" },
  { href: "/discover", title: "Discover", id: "4" },
];

export const sidebarLinks: any = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-full  flex-col gap-6 pt-16">
      {sidebarLinks.map((item: any) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient text-light-900 rounded-lg"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } text-white`}
              >
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const Navbar1 = () => {
  return (
    <header className="min-h-[64px] border-b-[1px] border-opacity-30 border-white sm:border-none p-5 flex flex-row items-center   gap-10">
      {/* Mobile Nav */}
      <div className="block sm:hidden ">
        <Sheet>
          <SheetTrigger asChild>
            <Image
              src="/assets/icons/hamburger.svg"
              width={36}
              height={36}
              alt="Menu"
              className="invert-colors sm:hidden"
            />
          </SheetTrigger>
          <SheetContent side="left" className="bg-black border-none">
            <Link href="/" className="flex items-center gap-1">
              {/* <Image
                src="/assets/images/site-logo.svg"
                width={23}
                height={23}
                alt="Learn To Code"
              /> */}
              <h1 className="text-xl text-white  ">
                <span className="font-bold tracking-wide">Learn</span> To Code
              </h1>
            </Link>
            <div>
              <SheetClose asChild className="text-white">
                <NavContent />
              </SheetClose>
              {/* <SignedOut>
                <div className="flex flex-col gap-3">
                  <SheetClose asChild>
                    <Link href="/sign-in">
                      <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                        <span className="primary-text-gradient">Log In</span>
                      </Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/sign-up">
                      <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                        Sign Up
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </SignedOut> */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <Link href="/">
        <h1 className="text-xl text-white  ">
          <span className="font-bold tracking-wide">Learn</span> To Code
        </h1>
      </Link>
      <div className="hidden sm:flex  flex-row text-white items-center justify-center gap-5">
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
