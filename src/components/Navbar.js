"use client";

import Link from "next/link";
import { useState } from "react";

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md`}
    >
      {/* Logo container */}
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        <Link className="text-xl font-semibold" href="/">
          PORTFOLIO
        </Link>
      </div>
      {/* Navigation links */}
      <div className="flex flex-col ml-4">
        <Link
          className="text-xl font-medium my-4"
          href="/technologies"
          onClick={() => setTimeout(() => setOpen(!open), 100)}
        >
          Technologies
        </Link>
        <Link
          className="text-xl font-medium my-4"
          href="/projects"
          onClick={() => setTimeout(() => setOpen(!open), 100)}
        >
          Projects
        </Link>
        <Link
          className="text-xl font-medium my-4"
          href="/about"
          onClick={() => setTimeout(() => setOpen(!open), 100)}
        >
          About Me
        </Link>
        <Link
          className="text-xl font-medium my-4"
          href="/contact"
          onClick={() => setTimeout(() => setOpen(!open), 100)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
      {/* Mobile navigation */}
      <MobileNav open={open} setOpen={setOpen} />
      {/* Logo */}
      <div className="w-3/12 flex items-center">
        <a className="text-2xl font-semibold" href="/">
          PORTFOLIO
        </a>
      </div>
      {/* Other navigation links */}
      <ul className={`w-full m-1 hidden md:flex justify-end`}>
        <li className="p-1">
          <Link className=" font-medium my-4" href="/projects">
            Projects
          </Link>
        </li>

        <li className="p-1">
          <Link className=" font-medium my-4" href="/technologies">
            Technologies
          </Link>
        </li>
        <li className="p-1">
          <Link className=" font-medium my-4" href="/contact">
            Contact
          </Link>
        </li>
        <li className="p-1">
          <Link className=" font-medium my-4" href="/about">
            About Me
          </Link>
        </li>
      </ul>
      <div className="w-9/12 flex justify-end items-center">
        {/* Hamburger button */}

        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
        </div>
        {/* Other desktop navigation links */}
        {/* Add your other navigation links here */}
      </div>
    </nav>
  );
}
