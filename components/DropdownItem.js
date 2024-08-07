import React from "react";

export default function DropdownItem({ header, subHeader, href }) {
  return (
    <a
      href={href}
      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
    >
      <div className="ml-4">
        <p className="text-base font-medium text-white">{header}</p>
        <p className="mt-1 text-sm text-white-500">{subHeader}</p>
      </div>
    </a>
  );
}
