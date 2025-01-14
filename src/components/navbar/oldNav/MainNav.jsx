"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MainNav() {
  const pathName = usePathname();
  const isActive = (path) => path === pathName;
  return (
    <>
      {/* update links for accessibility once updated */}
      <ul className="hidden w-full gap-4 font-headings text-lg font-semibold text-black sm:flex md:mr-7 md:gap-6 md:text-lg 2xl:gap-10 2xl:text-xl">
        <li
          className={
            isActive("/about")
              ? "after:block after:h-1 after:w-full after:rounded-full after:bg-orange-700"
              : "after:block after:h-1 after:w-full after:origin-top-left after:scale-x-0 after:rounded-full after:bg-orange-700 after:transition after:duration-300 after:ease-in-out after:content-[''] after:hover:scale-x-100"
          }
        >
          <Link href={"/about"}>About Us</Link>
        </li>
        <li
          className={
            isActive("/services")
              ? "after:block after:h-1 after:w-full after:rounded-full after:bg-orange-700"
              : "after:block after:h-1 after:w-full after:origin-top-left after:scale-x-0 after:rounded-full after:bg-orange-700 after:transition after:duration-300 after:ease-in-out after:content-[''] after:hover:scale-x-100"
          }
        >
          <Link href={"/services"}>Services</Link>
        </li>
        <li
          className={
            isActive("/projects")
              ? "after:block after:h-1 after:w-full after:rounded-full after:bg-orange-700"
              : "after:block after:h-1 after:w-full after:origin-top-left after:scale-x-0 after:rounded-full after:bg-orange-700 after:transition after:duration-300 after:ease-in-out after:content-[''] after:hover:scale-x-100"
          }
        >
          <Link href={"/projects"}>Projects</Link>
        </li>
        <li
          className={
            isActive("/contact")
              ? "after:block after:h-1 after:w-full after:rounded-full after:bg-orange-700"
              : "after:block after:h-1 after:w-full after:origin-top-left after:scale-x-0 after:rounded-full after:bg-orange-700 after:transition after:duration-300 after:ease-in-out after:content-[''] after:hover:scale-x-100"
          }
        >
          <Link href={"/contact"}>Contact Us</Link>
        </li>
      </ul>
    </>
  );
}

export default MainNav;
