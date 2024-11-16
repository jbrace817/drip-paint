"use client";
import { useEffect } from "react";
import Link from "next/link";
function MobileNav({ isOpen, setIsOpen }) {
  function handleNav() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  return (
    <div className="-mt-2 sm:hidden">
      <div className="z-10 sm:hidden">
        <button
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={handleNav}
          className={`absolute right-4 z-20 flex flex-col items-center justify-center transition-all duration-500 ease-out ${
            isOpen && "-rotate-180"
          }`}
        >
          <span
            className={`mb-1 block h-0.5 w-8 rounded-sm bg-stone-700 transition-all duration-300 ease-out ${
              isOpen ? "-mb-1 translate-y-1 rotate-45" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`my-0.5 block h-0.5 w-8 self-start rounded-sm bg-stone-700 transition-all duration-300 ease-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`mt-1 block h-0.5 w-8 rounded-sm bg-stone-700 transition-all duration-300 ease-out ${
              isOpen ? "-mt-1 -translate-y-1 -rotate-45" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </div>
      <div
        id="mobile-navigation"
        role="dialog"
        aria-labelledby="mobile-menu-title"
        aria-hidden={!isOpen}
        className={`absolute top-0 sm:hidden ${
          isOpen ? "left-0" : "left-full"
        } bottom-0 right-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in`}
      >
        <h2 id="mobile-menu-title" className="sr-only">
          Mobile Navigation Menu
        </h2>

        {/* update links for accessibility once updated */}
        <ul>
          <li
            onClick={handleNav}
            className="p-4 text-4xl text-gray-50 hover:text-gray-400"
          >
            <Link href="/">Home</Link>
          </li>
          <li
            onClick={handleNav}
            className="p-4 text-4xl text-gray-50 hover:text-gray-400"
          >
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li
            onClick={handleNav}
            className="p-4 text-4xl text-gray-50 hover:text-gray-400"
          >
            <Link href="/work">Work</Link>
          </li>
          <li
            onClick={handleNav}
            className="p-4 text-4xl text-gray-50 hover:text-gray-400"
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
