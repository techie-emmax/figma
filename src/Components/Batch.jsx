import React from "react";
import Marquee from "react-fast-marquee";
const Batch = () => {
  return (
    <div className="bg-[#F0F8FF] w-full">
    
      <div className="flex flex-row items-center justify-between gap-38 ">
        <div className="font-display font-bold text-[61px] leading-tight cursor mt-20 ml-50">
        
          <p>
            Secure <mark className="bg-[#F0F8FF] text-green-400">business</mark>
            <br />
            with Techty security.
            <p className="text-[#4E4E4E] text-[20px] font-medium leading-normal">
              we have considered our solutions to support every stage of your
              <br />
              growth.We are the fastest and easiest way to launch an <br />
              attractive and feature-complete Saas showcase.
            </p>
          </p>
          <span className="flex items-center gap-[18px] mt-7">
            <button className="bg-[#28D08A] pt-[16px] pr-[10px] pb-[16px] pl-[10px] rounded-lg text-[16px] font-display font-bold hover:bg-[#171A1F] text-[#FFFFFF]">
              Request a Free Demo
            </button>
            <button className="bg-[#171A1F] pt-[16px] pr-[10px] pb-[16px] pl-[10px] rounded-lg text-[16px] font-display font-bold hover:bg-[#28D08A] text-[#FFFFFF]">
              Hire an expert
            </button>
          </span>
        </div>
        <div className="mt-20 mr-40">
          <img
            src="/src/assets/Frame 14.png"
            alt="fuck"
            className=" border border-[#FFFFFF] rounded-[20px]"
          />
          <img src="src/assets/Frame 17.png"/>
        </div>
      </div>
      <center><hr className="w-[1380px] mt-5" /></center>
      <div className="flex items-center justify-between ml-50 mt-10 ">
        <div>
          <h5 className="font-display text-[25px] font-medium text-[#171A1F]">
            Thousand of <br />
            businesses use Techty
          </h5>
        </div>
    
      
          <div className="flex items-center animate-[scroll_20s_ease_infinite] gap-20 w-[615px]">
            <span>
        <img src="/src/assets/Logo.png" alt="" />
            </span>
            <span>
        <img src="/src/assets/Logo (1).png" alt="" />
            </span>
            <span> <img src="/src/assets/Logo (2).png" alt="" />
            </span>
            <span>
        <img src="/src/assets/Logo (3).png" alt="" />
            </span>
   
        </div>
        </div>
    
    </div>
  );
};

export default Batch;
