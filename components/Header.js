import React from "react";
import DropdownItem from "./DropdownItem";
import NavbarItem from "./NavbarItem";

const navbarItems = [
  { title: "Values", href: "/values" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "Blog", href: "/blog" },
  { title: "About Us", href: "/about-us" },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-gray-800 text-white z-50 header">
      <div className="max-w-6xl mx-auto p-5 flex flex-col md:flex-row items-center">
        <div className="flex flex-col md:flex-row w-full items-center justify-center">
          {/* Logo */}
          <a
            href="/"
            className="text-3xl text-white font-medium mb-4 md:mb-0 whitespace-nowrap"
          >
            Fishercat Consulting
          </a>

          {/* Navbar */}
          <div className="flex flex-col items-center w-full mt-4 md:mt-0">
            {/* Mobile Grid Layout */}
            <div className="block md:hidden w-full max-w-md mx-auto flex justify-center ml-2">
              <div className="grid grid-cols-2 gap-4">
                {navbarItems.map((item) => (
                  <NavbarItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Flex Layout */}
            <div className="hidden md:flex flex-wrap justify-evenly items-center w-full">
              {navbarItems.map((item) => (
                <NavbarItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
