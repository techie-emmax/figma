import React from "react";
import Marquee from "react-fast-marquee";
const Batch = () => {

  return (
    <div className="bg-[#F0F8FF] w-full">
      <div className="flex md:flex-row flex-col items-center justify-between gap-38 ">
        <div className="font-display font-bold text-[61px] leading-none cursor mt-10 md:mt-20 ml-6 md:ml-50">
          <p className="text-left md:text-left">
            Secure <mark className="bg-[#F0F8FF] text-green-400">business</mark>
            <br />
            with Techty security.
            <p className="text-[#4E4E4E] text-[20px] font-medium text-left mt-3 md:mt-0 md:text-left leading-7">
              we have considered our solutions to support every stage of your
              <br />
              growth.We are the fastest and easiest way to launch an <br />
              attractive and feature-complete Saas showcase.
            </p>
          </p>
          <span className="flex items-center justify-center md:justify-start gap-[18px] mt-7">
            <button className="bg-[#28D08A] pt-[16px] pr-[10px] pb-[16px] pl-[10px] rounded-lg text-[16px] font-display font-bold hover:bg-[#171A1F] text-[#FFFFFF]">
              Request a Free Demo
            </button>
            <button className="bg-[#171A1F] pt-[16px] pr-[28px] pb-[16px] pl-[28px] rounded-lg text-[16px] font-display font-bold hover:bg-[#28D08A] text-[#FFFFFF]">
              Hire an expert
            </button>
          </span>
        </div>
        <div className="-mt-16 md:mt-20 px-5 md:px-0 md:mr-40">
          <img
            src="/src/assets/Frame 14.png"
            alt="fuck"
            className=" border border-[#FFFFFF] rounded-[20px]"
          />
          <img src="src/assets/Frame 17.png"className="mt-5 mb-10" />
        </div>
      </div>
      <center>
        <hr className="w-[480px] md:w-[1500px] mt-10" />
      </center>
      <div className="flex items-center justify-center pl-10  md:pl-50  mt-10 gap-10 md:gap-20">
          <p className="font-display text-[26px] mb-2 md:mb-0 font-medium text-[#171A1F] leading-tight">
            Thousand of businesses use Techty
          </p>

        <Marquee scrollamount="50" className="ml-3 md:ml-20 mr-2 md:mr-40">
          <span className="block">
            <img src="/src/assets/Logo.png" alt="" className="w-[100%]"/>
          </span>
          <span className="block ml-15">
            <img src="/src/assets/Logo (1).png" alt="" className="w-[100%]"/>
          </span>
          <span className="block ml-15">
            
            <img src="/src/assets/Logo (2).png" alt="" className="w-[100%]"/>
          </span>
          <span className="block ml-15">
            <img src="/src/assets/Logo (3).png" alt="" className="w-[100%]"/>
          </span>
          <span className="block ml-15">
            <img src="/src/assets/img done by me.png" alt="" className="w-[100%]"/>
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default Batch;
