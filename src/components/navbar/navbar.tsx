import React from "react";

const navLinks = {
  About: "#about",
  Skills: "#skills",
  Projects: "#projects",
  Experience: "#experiences",
  Contact: "#contact",
};

const Navbar = () => {
  return (
    <div className="absolute right-8 top-5 tracking-wider text-gray-600  space-y-1 md:text-lg lg:text-xl">
      {Object.entries(navLinks).map(([key, value]) => (
        <a key={key} href={value} className="block">
          {key}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
