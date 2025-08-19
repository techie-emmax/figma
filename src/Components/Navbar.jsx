import React from "react";
import { NavLink, useLocation } from 'react-router-dom';



const Navbar = () => {

  const location = useLocation();
  const currentPath = location.pathname;


  const navbarClasses = `flex items-center justify-center gap-88 p-5 w-full ${
    currentPath === '/blog' || currentPath === '/contact' ? 'bg-white' : 'bg-transparent'
  }`

  const buttonClasses = `
  border font-display rounded-lg p-2
  pt-[16px] pb-[10px] pl-[10px] pr-[10px]${
    currentPath === '/blog' || currentPath === '/contact'
      ? 'border-[#6F7681] bg-white text-[#000000] hover:bg-[#28D08A]'
      : 'border-[#000000] bg-black text-[#FFFFFF] hover:bg-[#28D08A]'
  }
`;

  return (
 
    <div className={navbarClasses}>
        <div className="flex items-center">
      <img
        src="src/assets/svg-662123605_1698@2x.png" alt="" className="w-[60px] h-[60px]"
      />
      <p className="font-display font-bold text-4xl w-[104px] h-[37px]">Techty</p></div>
      <div className="flex justify-between items-center gap-15 text-black">
        <div>
          <NavLink to="/" className="font-regular font-display hover:text-[#28D08A]">Home</NavLink>
        </div>
        <div>
          <NavLink to="/about" className={({ isActive }) =>
    isActive ? "font-regular font-display text-[#28D08A] underline underline-offset-8" : ""
  }>About</NavLink>
        </div>
        <div>
          <NavLink to="/service" className={({ isActive }) =>
    isActive ? "font-regular font-display text-[#28D08A] underline underline-offset-8" : "" 
    }>Service</NavLink>
        </div>
        <div>
          <NavLink to="/blog"  className={({ isActive }) =>
    isActive ? "text-[#28D08A] underline underline-offset-8" : ""
    }>Blog</NavLink>
        </div>
        <div>
          <NavLink to="/contact"  className={({ isActive }) =>
    isActive ? "text-[#28D08A] underline underline-offset-8" : ""
    }>Contact</NavLink>
        </div>
      </div>
      <button className={buttonClasses}>
        Request a Free Demo
      </button>
    </div>

  );
};

export default Navbar;
