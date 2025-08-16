import React from "react";
import { Link, NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
 
    <div className="flex items-center jusify-center gap-88 p-5 ">
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
      <button className="border border-[#000000] font-display hover:[#28D08A] bg-black pt-[16px] pb-[10px] pl-[10px] pr-[10px] rounded-lg p-2 text-white ">
        Request a Free Demo
      </button>
    </div>

  );
};

export default Navbar;
