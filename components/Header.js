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
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <header class="fixed top-0 w-full bg-gray-800 text-white z-50 header">
      <div class="max-w-6xl mx-auto p-5 flex flex-col md:flex-row items-center">
        <div class="flex flex-col md:flex-row w-full md:w-auto">
          <a href="/" class="text-3xl text-white font-medium mb-4 md:mb-0">
            Fishercat Consulting
          </a>
          <div class="flex flex-col md:flex-row md:ml-auto mt-4 md:mt-0 md:text-base text-xl">
            <div class="flex flex-wrap justify-evenly items-center w-full">
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
