import React from "react";

export default function NavbarItem({ title, href }) {
  return (
    <a
      class="mr-12 md:ml-11 ml-0 cursor-pointer text-white-300 hover:text-white font-semibold tr04"
      href={href}
    >
      {title}
    </a>
  );
}
