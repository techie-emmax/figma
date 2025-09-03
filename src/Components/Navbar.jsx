import React from "react";
import { NavLink, useLocation } from 'react-router-dom';



const Navbar = () => {

  const location = useLocation();
  const currentPath = location.pathname;


  const navbarClasses = `flex items-center justify-center mt-4 md:mt-4 mb-4 md:mb-4 md:gap-88 w-full ${
    currentPath === '/blog' || currentPath === '/contact' ? 'bg-[#FFFFFF]' : 'bg-transparent'
  }`

  const buttonClasses = `
  hidden md:block border font-display rounded-lg p-2
  pt-[16px] pb-[10px] pl-[10px] pr-[10px]${
    currentPath === '/blog' || currentPath === '/contact'
      ? 'border-[#6F7681] bg-white text-[#000000] hover:bg-[#28D08A] hover:border-[#28D08A]'
      : ''
  }

`




  return (
 <div className="flex items-center justify-center gap-120 md:gap-88">
    <div className={navbarClasses}>
        <div className="flex items-center">
      <img
        src="src/assets/svg-662123605_1698@2x.png" alt="" className="w-[60px] h-[60px]"
      />
      <p className="font-display font-bold text-4xl w-[104px] h-[37px]">Techty</p></div>
      <div className="md:justify-between md:items-center gap-15 text-black hidden md:flex">
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
          <NavLink to="/blog"  className={({ isActive }) =>
    isActive ? "text-[#28D08A] underline underline-offset-8" : ""
    }>Blog</NavLink>
        </div>
        <div>
          <NavLink to="/contact"  className={({ isActive }) =>
    isActive ? "text-[#28D08A] underline underline-offset-8" : ""
    }>Contact</NavLink>
        </div>
      </div>
      <button className={buttonClasses}>
        Request a Free Demo
      </button>
  

    </div>
  <div className="flex flex-col gap-2 md:hidden" >
<p className="border-1 px-3 "></p>
<p className="border-1 px-3 "></p>
<p className="border-1 px-3 "></p>
    </div>
    </div>

  );
};

export default Navbar;