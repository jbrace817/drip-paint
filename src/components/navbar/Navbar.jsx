"use client";
import Logo from "/public/assets/logo/navbar/dripLogo.svg";
import Link from "next/link";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogBackdrop,
  DialogTitle,
  TransitionChild,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
const company = [
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    // Disables scroll when mobile menu is open
    document.body.style.overflow = `${mobileMenuOpen ? "hidden" : "visible"}`;

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll, mobileMenuOpen]);

  return (
    <header
      className={`fixed left-0 top-4 z-[100] w-full bg-transparent transition duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-[120%]"
      } `}
    >
      <nav
        aria-label="Global"
        className={`mx-4 flex items-center justify-between rounded-xl px-4 py-4 transition duration-500 xl:mx-auto xl:max-w-[80rem] xl:px-0 ${isTop ? "bg-white" : "bg-white/60 backdrop-blur-md"}`}
      >
        <div className="flex pl-4 lg:flex-1">
          {/* Logo */}
          <Link href="/" aria-label="Home">
            <span className="sr-only">Your Company</span>
            <Image
              src={Logo}
              width={0}
              unoptimized
              className="w-28"
              alt="Drip Company Logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href={"/about"}
            className="text-sm/6 font-semibold text-gray-900"
          >
            About Us
          </Link>

          <Popover className="relative">
            {({ open, close }) => (
              <>
                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 focus-visible:outline-none">
                  Explore
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={`size-5 flex-none text-gray-400 transition duration-300 ease-in-out ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute -left-8 top-full z-10 mt-3 w-40 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  {company.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={close}
                    >
                      {item.name}
                    </Link>
                  ))}
                </PopoverPanel>
              </>
            )}
          </Popover>
          <Link
            href={"/contact"}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Contact Us
          </Link>
          <Link
            href={"/projects"}
            className="text-sm/6 font-semibold text-gray-900"
          >
            Projects
          </Link>
        </PopoverGroup>
        <div className="hidden pr-4 lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className={`relative z-[120]`}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pt-[50%]">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen transform transition duration-500 ease-in-out data-[closed]:translate-y-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-base font-semibold text-gray-900">
                        Panel title
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setMobileMenuOpen(false)}
                          className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <div className="mt-6 flow-root">
                      <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                          <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            Product
                          </a>
                          <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            Features
                          </a>
                          <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            Marketplace
                          </a>

                          <Disclosure as="div" className="-mx-3">
                            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                              Company
                              <ChevronDownIcon
                                aria-hidden="true"
                                className="size-5 flex-none group-data-[open]:rotate-180"
                              />
                            </DisclosureButton>
                            <DisclosurePanel className="mt-2 space-y-2">
                              {company.map((item) => (
                                <DisclosureButton
                                  key={item.name}
                                  as="a"
                                  href={item.href}
                                  className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                  {item.name}
                                </DisclosureButton>
                              ))}
                            </DisclosurePanel>
                          </Disclosure>
                        </div>
                        <div className="py-6">
                          <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            Log in
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </header>
  );
}
