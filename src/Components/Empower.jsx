import React, { useState } from "react";

const Empower = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  return (
    <div className="bg-white w-full">
      <div className="flex items-center justify-center md:mt-20">
        <h2 className="font-display font-bold text-[#171A1F] mt-5 text-[30px] md:text-[49px] leading-tight text-center md:pl-0 md:pr-0">
          Empower your business <br />
          with cutting edge
          <mark className="bg-white text-[#28D08A]"> solutions</mark>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row mt-15 pl-5 md:pl-0 md:ml-40 border-b-1 border-b-gray-300 mb-10 gap-2">
        <div
          onClick={() => {
            setFirst(true), setSecond(false), setThird(false);
          }}
          className={
            first
              ? "flex items-center gap-3 pb-7 cursor-pointer border-b-1 border-[#28D08A]"
              : "flex items-center gap-3 pb-7 cursor-pointer"
          }
        >
          <h1
            className={`font-display font-medium text-[61px] text-[#171A1F] ${
              first ? "text-[#28D08A]" : "text-[#000000]"
            }`}
          >
            01
          </h1>
          <div className="flex flex-col gap-2 ">
            <p className="text-[20px] font-display font-regular text-[#171A1F">
              Collect Ideas
            </p>
            <p className="block font-display m-1 text-[16px] text-[#4E4E4E]">
              Creating or improving products to meet our user needs.
            </p>
          </div>
        </div>
        <div
          onClick={() => {
            setFirst(false), setSecond(true), setThird(false);
          }}
          className={
            second
              ? "flex items-center gap-3 md:pb-7 cursor-pointer border-b-1 border-[#28D08A] "
              : "flex items-center gap-3 md:pb-7 cursor-pointer"
          }
        >
          <h1
            className={`font-display font-medium text-[61px] text-[#171A1F] ${
              second ? "text-[#28D08A] " : "text-[#000000]"
            }`}
          >
            02
          </h1>
          <div className="flex flex-col gap-2 ">
            <p className="text-[20px] font-display font-regular text-[#171A1F">
              Data Analysis
            </p>
            <p className="block font-display m-1 text-[16px] text-[#4E4E4E]">
              Creating or improving products to meet our user needs.
            </p>
          </div>
        </div>
        <div
          onClick={() => {
            setFirst(false), setSecond(false), setThird(true);
          }}
          className={
            third
              ? "flex items-center gap-3 md:pb-7 cursor-pointer border-b-1 border-[#28D08A]"
              : "flex items-center gap-3 md:pb-7 cursor-pointer"
          }
        >
          <h1
            className={`font-display font-medium text-[61px] text-[#171A1F] ${
              third ? "text-[#28D08A]" : "text-[#000000]"
            }`}
          >
            03
          </h1>
          <div className="flex flex-col gap-2 ">
            <p className="text-[20px] font-display font-regular text-[#171A1F">
              Analyze Product
            </p>
            <p className="block font-display m-1 text-[16px] text-[#4E4E4E]">
              Creating or improving products to meet our user needs.
            </p>
          </div>
        </div>
      </div>
      <div>
        {first ? (
          <div className="flex flex-col md:flex-row items-center md:ml-30 p-5 md:p-25 gap-10 md:gap-30">
            <div className="">
              <img src="Frame 29.png" alt="" />
            </div>
            <p className="text-[25px] font-display font-medium ">
              Data Analysis
              <span className="block mt-3 font-display font-regular text-[16px] text-[#4E4E4E]">
                With our Techty company, you can create landing pages that
                convert more
                <br />
                visitors than any other website. You can easily create a page
                using a variety
                <br />
                of unique blocks.
              </span>
              <span className="m-4">
                <span className="flex items-center gap-5 hover:scale-110">
                  <img src="/checkbox-circle-line.png"/>
                  <p className="text-[20px] font-display font-regular">
                    We collect ideas from different design inspirations,
                  </p>
                </span>
                <span className="flex items-center mt-2 gap-5 hover:scale-110">
                  <img src="checkbox-circle-line.png"/>
                  <p className="text-[20px] font-display font-regular">
                    Analysis data for any kind of corrections.
                  </p>
                </span>
                <span className="flex items-center mt-2 gap-5 hover:scale-110">
                  <img src="checkbox-circle-line.png" />
                  <p className="text-[20px] font-display font-regular">
                    Finalize the product for the production to be done.
                  </p>
                </span>
              </span>
              <button className=" pt-[16px] pr-[10px] pl-[10px] pb-[16px] text-[16px] font-display font-bold border border-[#28D08A] bg-[#28D08A] rounded-lg text-[#FFFFFF] mt-10">
                Request a Free Demo
              </button>
            </p>
          </div>
        ) : (
          ""
        )}
        {second ? (
          <div className="flex flex-col md:flex-row items-center md:ml-30 p-5 md:p-25 gap-10 md:gap-30">
            <div className="">
              <img src="/img 1.png" alt="" />
            </div>
            <p className="text-[25px] font-display font-medium">
              Data Analysis
              <span className="block mt-3 font-display font-regular text-[16px] text-[#4E4E4E]">
                With our Techty company, you can create landing pages that
                convert more
                <br />
                visitors than any other website. You can easily create a page
                using a variety
                <br />
                of unique blocks.
              </span>
              <span className="m-4">
                <span className="flex items-center gap-5">
                  <img src="/checkbox-circle-line.png" />
                  <p className="text-[20px] font-display font-regular">
                    We collect ideas from different design inspirations,
                  </p>
                </span>
                <span className="flex items-center mt-2 gap-5">
                  <img src="/checkbox-circle-line.png" />
                  <p className="text-[20px] font-display font-regular">
                    Analysis data for any kind of corrections.
                  </p>
                </span>
                <span className="flex items-center mt-2 gap-5">
                  <img src="/checkbox-circle-line.png" />
                  <p className="text-[20px] font-display font-regular">
                    Finalize the product for the production to be done.
                  </p>
                </span>
              </span>
              <button className="pt-[16px] pr-[10px] pl-[10px] pb-[16px] text-[16px] font-display font-bold border border-[#28D08A] bg-[#28D08A] rounded-lg text-[#FFFFFF] mt-10">
                Request a Free Demo
              </button>
            </p>
          </div>
        ) : (
          ""
        )}
        {third ? (
          <div className="flex flex-col md:flex-row items-center md:ml-30 p-5 md:p-25 gap-10 md:gap-30">
            <div className="">
              <img src="/img 2.png" alt="" />
            </div>
            <p className="text-[25px] font-display font-medium">
              Data Analysis
              <span className="block mt-3 font-display font-regular text-[16px] text-[#4E4E4E]">
                With our Techty company, you can create landing pages that
                convert more
                <br />
                visitors than any other website. You can easily create a page
                using a variety
                <br />
                of unique blocks.
              </span>
              <span className="m-4">
                <span className="flex items-center gap-5">
                  <img src="/checkbox-circle-line.png" />
                  <p className="text-[20px] font-display font-regular">
                    We collect ideas from different design inspirations,
                  </p>
                </span>
                <span className="flex items-center mt-2 gap-5">
                  <img src="/checkbox-circle-line.png" />
                  <p className="text-[20px] font-display font-regular">
                    Analysis data for any kind of corrections.
                  </p>
                </span>
                <span className="flex items-center mt-2 gap-5">
                  <img src="/checkbox-circle-line.png" />
                  <p className="text-[20px] font-display font-regular">
                    Finalize the product for the production to be done.
                  </p>
                </span>
              </span>
              <button className="pt-[16px] pr-[10px] pl-[10px] pb-[16px] text-[16px] font-display font-bold border border-[#28D08A] bg-[#28D08A] rounded-lg text-[#FFFFFF] mt-10">
                Request a Free Demo
              </button>
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Empower;
