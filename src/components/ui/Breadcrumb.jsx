import React from "react";

const Breadcrumb = ({ links }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex text-gray-500 space-x-2">
        {links.map((link, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && <span className="mx-2">{">"}</span>}
            {link.href ? (
              <a href={link.href} className="hover:underline">
                {link.label}
              </a>
            ) : (
              <span className="font-semibold text-black">{link.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
