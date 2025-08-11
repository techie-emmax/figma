import React from "react";

const Empower = () => {
  return (
    <div className="bg-white w-[99vw]">
      <div className="flex items-center justify-center mt-20">
        <h2 className="font-display font-bold text-[#171A1F] text-[49px]">
          <center>
            Empower your business <br />
            with cutting edge
            <mark className="bg-white text-[#28D08A]"> solutions</mark>
          </center>
        </h2>
      </div>

      <div className="flex items-center justify-center gap-5 ">
        <a className="flex items-center justify-center gap-2 ">
          <p className="font-display font-medium text-[61px] text-[#171A1F] hover:text-[#28D08A]">
            01
          </p>
          <p className="text-[20px] font-display font-regular text-[#171A1F]">
            Collect Ideas
            <span className="block font-display m-1 text-[16px] text-[#4E4E4E]">
              Creating or improving products to meet our user needs.
            </span>
          </p>
        </a>
        <a className="flex items-center justify-center gap-2">
          <p className="font-display font-medium text-[61px] text-[#171A1F] hover:text-[#28D08A]">
            02
          </p>
          <p className="text-[20px] font-display font-regular text-[#171A1F]">
            Data Analysis
            <span className="block font-display m-1 text-[16px] text-[#4E4E4E]">
              Creating or improving products to meet our user needs.
            </span>
          </p>
        </a>
        <a className="flex items-center justify-center gap-2">
          <p className="font-display font-medium text-[61px] text-[#171A1F] hover:text-[#28D08A]">
            03
          </p>
          <p className="text-[20px] font-display font-regular text-[#171A1F]">
            Analyze Product
            <span className="block font-display m-1 text-[16px] text-[#4E4E4E]">
              Creating or improving products to meet our user needs.
            </span>
          </p>
        </a>
      </div>
      <center><hr className="w-[77%]"/></center>
      
      <div className="flex items-center ml-30 p-15 gap-30">
        <img src="/src/assets/Frame 29.png" alt="" />
        <p className="text-[25px] font-display font-medium">
          Data Analysis
          <span className="block mt-3 font-display font-regular text-[16px] text-[#4E4E4E]">
            With our Techty company, you can create landing pages that convert
            more<br/>visitors than any other website. You can easily create a page
            using a variety<br/>of unique blocks.
          </span>
          <span className="m-4">
          <span className="flex items-center gap-5">
            <img src="/src/assets/checkbox-circle-line.png" />
            <p className="text-[20px] font-display font-regular">We collect ideas from different design inspirations,</p>
          </span>
          <span className="flex items-center mt-2 gap-5">
            <img src="/src/assets/checkbox-circle-line.png" />
            <p className="text-[20px] font-display font-regular">Analysis data for any kind of corrections.</p>
          </span>
          <span className="flex items-center mt-2 gap-5">
            <img src="/src/assets/checkbox-circle-line.png" />
            <p className="text-[20px] font-display font-regular">Finalize the product for the production to be done.</p>
          </span>
          </span>
          <button className="pt-[16px] pr-[10px] pl-[10px] pb-[16px] text-[16px] font-display font-bold border border-[#28D08A] bg-[#28D08A] rounded-lg text-[#FFFFFF] mt-10">Request a Free Demo</button>
        </p>
       
      </div>
    </div>
  );
};

export default Empower;
