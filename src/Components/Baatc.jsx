import React from "react";
const Baatc = () => {
  return (
    <div className="flex flex-col mt-10 mb-[#FFFFFF] bg-[#FFFFFF]">
      <div className="flex flex-col md:flex-row items-center justify-center md:ml-30 p-5 md:p-35 gap-5">
        <p className="text-[#171A1F] font-bold font-display text-[35px] md:text-[49px] leading-tight">
          Our most priority is to <span className="hidden md:block"> </span>
          provide the effective
          <br />
          <mark className="bg-[#FFFFFF] text-[#28D08A]"> solutions.</mark>
          <span>
            <p className="text-[16px] text-[#000000] font-display font-regular mt-3">
              With a library full of thousands of templates to choose from, go
              idea to
              <br className="hidden md:block" /> launch in a matter of minutes.
              Try uploading your own for sale.
            </p>
            <button className="border border-[#28D08A] pt-[16px] pb-[16px] pr-[10px] pl-[10px] bg-[#28D08A] text-[16px] rounded-lg text-[#FFFFFF]">
              Request a Free Demo
            </button>
          </span>
        </p>
        <img src="/Frame 45.png" alt="" className="rounded-lg" />
      </div>
      <div className="flex flex-col md:flex-row items-center bg-[#171A1F] m-2 md:m-0">
        <img src="/Rectangle (1).png" className="" />
        <div className="flex flex-col items-center justify-center">
          <p className="font-display font-bold text text-[49px] ml-3 md:ml-0 mt-5 mb-5 md:mt-0 text-[#FFFFFF] leading-tight">
            Personalize your business
            <br />
            <mark className="bg-[#171A1F] text-[#28D08A]"> strategy</mark> to
            reach out.
            <span className="mt-5">
              <p className="font-display font-regular text-[20px] text-[#FFFFFF]">
                Our advisors approach each client individually, so each time we
                <br />
                select the appropriate insurance for your needs. Thanks to
                <br />
                conversation, we will adjust the appropriate cover.
              </p>
            </span>
          </p>
          <span className="flex  md:ml-0 mb-5 md:mb-0 items-center">
            <img src="/Frame 52.png" alt="fuck" className="w-[20%]"/>
            <img src="/Frame 54.png" alt="fuck" className="w-[20%]"/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Baatc;
