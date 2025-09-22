import React from 'react'
import { NavLink,Link } from 'react-router-dom'


const Footer = () => {

 

  return (
    <div className='bg-[#495460] w-full '>
    <div className='flex flex-col md:flex-row jusify-between items-start gap-[20%] md:gap-[40%] bg-[#495460] ml-5 md:ml-20 mt-5 md:mt-20 '>
        <h2 className='font-display font-bold text-[#FFFFFF] md:text-[35px] text-[49px] leading-tight'>Ready to take your business<br />to the next level</h2>
<button className='border border-[#28D08A] font-display bg-[#28D08A] hover:border-[#000000] hover:bg-[#000000] mt-5 md::mt-0 pt-[16px] pb-[16px] pl-[15px] md:pl-[15px] pr-[15px] rounded-lg md:p-2 md:m-4 text-white' >Request a Free Demo</button>
    </div>
    <center> <hr className='text-[#F0F8FF] w-[91%] mt-10'/></center>
   
    <div className='flex flex-col md:flex-row items-start justify-top gap-[5%] md:gap-[20%] ml-10 md:ml-20 mt-15 '>
      <div className='flex gap-5 items-center'><img src="./src/assets/svg-662123605_1698@2x.png" alt="fuck" className="w-[60px] h-[60px]" />
      <h5 className="font-display font-bold text-4xl w-[104px] h-[37px] text-[#FFFFFF]">Techty
      <span className='flex mt-5 md:mt-15 items-center gap-[4px]'>
        <img src="/src/assets/Vector (2).png" alt="" />
        <img src="/src/assets/Vector (1).png" alt="" />
        <img src="/src/assets/instagram-line.png" alt="" />
        <img src="/src/assets/Vector.png" alt="" /></span>
        <p className='mt-3 font-regular font-display text-sm md:text-[8px] text-[#FFFFFF]'>Copyright © {new Date().getFullYear()} Techty.<br/>
        All Rights Reserved</p>
      </h5>
      </div>
     <div>
     <div className='flex flex-col md:flex-row items-start justify-center gap-[40%] mt-29 md:mt-none mb-5'>
<h5 className='font-display font-bold text-[25px] text-[#FFFFFF] mt-10 md:mt-0'>QuickLink
  <span className='flex flex-col gap-[10px] md:gap-[16px] mt-4 md:mt-7 mb-4 md:mb-0'>
    <NavLink to="/about" className="text-[20px] font-display font-medium text-[#FFFFFF]">About</NavLink>
    <NavLink to="/service" className="text-[20px] font-display font-medium text-[#FFFFFF]">Service</NavLink>
    <NavLink to="/blog" className="text-[20px] font-display font-medium text-[#FFFFFF]">Blog</NavLink>
    <NavLink to="/contact" className="text-[20px] font-display font-medium text-[#FFFFFF]">Contact</NavLink>
  </span>
</h5>
<h5 className='font-display font-bold text-[25px] text-[#FFFFFF] mt-5 md:mt-0' >Socials
  <span className='flex flex-col gap-[10px] md:gap-[16px] mt-5 md:mt-7 mb-5 md:mb-0'>
    <Link to={""} className="text-[20px] font-display font-medium text-[#FFFFFF]">Twitter</Link>
    <Link to={""} className="text-[20px] font-display font-medium text-[#FFFFFF]">LinkedIn</Link>
    <Link to={""} className="text-[20px] font-display font-medium text-[#FFFFFF]">Facebook</Link>
  </span>
</h5>
<h5 className='font-display font-bold text-[25px] text-[#FFFFFF]'>
  Our Newsletter
  <span className='flex-row md:flex-col gap-[16px] mt-7 block'>
    <p className='text-[20px] font-display font-medium text-[#FFFFFF]'>Subscribe to our newsletter to<br/>
    get our news delivered to you.</p>
    <div className='flex items-center mt-5'>
    <input type="email" placeholder='Email address' className='border input:font-display input:font-regular outline-none pt-[3px] pb-[3px] pl-[10px] pr-[15px] border-[#FFFFFF] rounded-md placeholder:text-[15px] placeholder:font-display  placeholder:pl-1 placeholder:font-regular'/>
    <Link to="" className='pt-[3px] pb-[3px] pl-[10px] -ml-18 pr-[10px] text-[#FFFFFF] font-display font-regular rounded-md bg-[#28D08A]' >Join</Link>
    </div>
  </span>
</h5>
</div>
     </div>
    

    </div>
    </div>
  )
}

export default Footer