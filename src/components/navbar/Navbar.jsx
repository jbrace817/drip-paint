"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../app/assets/navbar/dripLogo.svg";
import Link from "next/link";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isTop, setIsTop] = useState(true); // Track if at the top of the screen
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const SCROLL_THRESHOLD = 10; // Adjust based on sensitivity

    const handleScroll = () => {
      const currentScroll = Math.max(0, Math.round(window.scrollY));

      // Check if at the top of the screen
      setIsTop(currentScroll === 0);

      // Toggle visibility only if the scroll difference exceeds the threshold
      if (Math.abs(currentScroll - prevScroll) > SCROLL_THRESHOLD) {
        setIsVisible(currentScroll < prevScroll || currentScroll === 0);
        setPrevScroll(currentScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return (
    <header
      className={`fixed left-0 top-0 z-[100] w-full transition duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isTop ? "bg-transparent" : "bg-white/60 backdrop-blur-md"}`}
    >
      <div className="container m-auto flex h-full max-w-[80rem] items-center justify-between p-2">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Image
            src={Logo}
            width={0}
            unoptimized
            className="w-28"
            alt="Drip Company Logo"
          />
        </Link>
        <nav aria-label="Main Navigation">
          {/* Desktop */}
          <MainNav />

          {/* Mobile */}
          <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
