"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
const navbarLinks = [
  { href: "/about", title: "About", id: "1" },
  { href: "/technologies", title: "Technologies", id: "2" },
  { href: "/impact", title: "Impact", id: "3" },
  { href: "/discover", title: "Discover", id: "4" },
];
const Footer = () => {
  const [feedback, setFeedback] = useState("");
  return (
    <div className="flex flex-col py-[50px] justify-center gap-[50px]">
      <div className="flex flex-row w-full items-center justify-start gap-[20px]">
        <p className="text-pure-greys-400 text-lg font-sans">Follow us</p>
        <Link href="/">
          <FaInstagram
            size={24}
            className="text-pure-greys-200 duration-300 hover:scale-110 cursor-pointer"
          />
        </Link>
        <Link href="/">
          <FaGithub
            size={24}
            className="text-pure-greys-200 duration-300 hover:scale-110 cursor-pointer"
          />
        </Link>
        <Link href="/">
          <FaYoutube
            size={24}
            className="text-pure-greys-200 duration-300 hover:scale-110 cursor-pointer"
          />
        </Link>
        <Link href="/">
          <LuLinkedin
            size={24}
            className="text-pure-greys-200 duration-300 hover:scale-110 cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-start gap-[10px] py-10 border-t-2 border-b-2 border-pure-greys-200 ">
        <form className="w-full flex-1 relative flex flex-row gap-[30px]">
          <IoMailOutline
            size={24}
            className="absolute text-pure-greys-200 left-4 top-[50%] translate-y-[-50%]"
          />
          <input
            type="text"
            className="form-style w-full h-[50px] rounded-md font-sans font-semibold !bg-transparent border !text-pure-greys-300 !pl-[60px]"
            placeholder="Send us your Feedback anonymously"
            onChange={(e) => setFeedback(e.target.value)}
            value={feedback}
          />
          <button
            type="submit"
            className="py-2 px-8 font-sans font-semibold bg-white text-black rounded-md duration-300 hover:scale-110"
          >
            Submit
          </button>
        </form>
        <p className="text-pure-greys-400 text-sm font-sans">
          I accept Learn To Code&apos;s Terms and Conditions and acknowledge
          that my information will be used in accordance with Learn To
          Code&apos;s{" "}
          <Link href="/" className="underline underline-offset-2 text-blue-100">
            Privacy Policy.
          </Link>
        </p>
      </div>
      <div className="flex flex-row items-center justify-start gap-[10px]">
        <div className="hidden sm:flex  flex-row text-pure-greys-200 items-center justify-center gap-5">
          <Link href="/" className="font-sans">
            <h1 className="text-xl text-pure-greys-200  ">
              <span className="font-bold tracking-wide">Learn</span> To Code
            </h1>
          </Link>
          {navbarLinks.map((link) => (
            <div className="text-pure-greys-200" key={link.id}>
              <Link
                href={`/${link.href}`}
                className="hover:underline hover:underline-offset-[20px] hover:cursor-pointer decoration-caribbeangreen-300"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
