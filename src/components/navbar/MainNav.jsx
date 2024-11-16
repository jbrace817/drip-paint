import Link from "next/link";

function MainNav() {
  return (
    <>
      {/* update links for accessibility once updated */}
      <ul className="font-headings hidden w-full gap-4 text-lg font-semibold text-black sm:flex md:mr-7 md:gap-6 md:text-lg 2xl:gap-10 2xl:text-xl">
        <li>
          <Link href={"/about"}>About Us</Link>
        </li>
        <li>
          <Link href={"/services"}>Services</Link>
        </li>
        <li>
          <Link href={"/projects"}>Projects</Link>
        </li>
        <li>
          <Link href={"/reviews"}>Reviews</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </>
  );
}

export default MainNav;
