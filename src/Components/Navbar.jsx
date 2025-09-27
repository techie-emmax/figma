import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navbarClasses = `flex items-center justify-center mt-4 mb-4 md:gap-85 w-full ${
    currentPath === "/blog" || currentPath === "/contact"
      ? "bg-[#FFFFFF]"
      : "bg-transparent"
  }`;

  const buttonClasses = `
    hidden md:block border font-display rounded-lg p-2
    pt-[16px] pb-[10px] pl-[10px] pr-[10px] ${
      currentPath === "/blog" || currentPath === "/contact"
        ? "border-[#6F7681] bg-white text-[#000000] hover:bg-[#28D08A] hover:border-[#28D08A]"
        : ""
    }
  `;

  const [menubutton, setMenubutton] = useState(false);

  return (
    <div className="flex items-center justify-center gap-45 md:gap-20">
      <div className={navbarClasses}>
        <div className="flex items-center">
          <img
  src="/svg-662123605_1698@2x.png"
  alt="logo"
  className="w-[40%]"
/>
          <p className="font-display font-bold text-3xl md:text-4xl">Techty</p>
        </div>

        <div className="md:justify-between md:items-center gap-15 text-black hidden md:flex">
          <NavLink
            to="/"
            className="font-regular font-display hover:text-[#28D08A]"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "font-regular font-display text-[#28D08A] underline underline-offset-8"
                : ""
            }
          >
            About
          </NavLink>

          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive
                ? "font-regular font-display text-[#28D08A] underline underline-offset-8"
                : ""
            }
          >
            Service
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-[#28D08A] underline underline-offset-8"
                : ""
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#28D08A] underline underline-offset-8"
                : ""
            }
          >
            Contact
          </NavLink>
        </div>

        <button className={buttonClasses}>Request a Free Demo</button>
      </div>

     
      <div
        className="flex items-center md:hidden"
        onClick={() => setMenubutton(!menubutton)}
      >
        <Menu size={40} color="#333333" />
      </div>

      {menubutton && (
        <div className="absolute bg-white flex flex-col w-1/2 top-20 right-0 ml-5">
          <NavLink
            to="/"
            className="text-xl font-semibold border-b-4 border-b-gray-100 p-4"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-xl font-semibold border-b-4 border-b-gray-100 p-4"
          >
            About
          </NavLink>
          <NavLink
            to="/service"
            className="text-xl font-semibold border-b-4 border-b-gray-100 p-4"
          >
            Service
          </NavLink>
          <NavLink
            to="/blog"
            className="text-xl font-semibold border-b-4 border-b-gray-100 p-4"
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className="text-xl font-semibold p-4"
          >
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
