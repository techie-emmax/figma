import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div className="bg-[#F1F1F1] w-full">
      <div className="flex flex-col items-center justify-center">
        <p className="mt-10 font-bold font-display text-[49px] text-center">
          Contact Us
          <span className="block text-[20px] text-[#6F7681] font-regular font-display">
            We're constantly pushing the boundaries of what's <br />
            possible and seeking new ways to improve our <br />
            services.
          </span>
        </p>
      </div>
      <div className="flex items-top justify-center mt-10 mb-5  gap-47">
        <div className="">
          <p className="font-display font-bold text-[25px]">
            we are happy to discuss your project
            <br />
            and answer any question
          </p>
          <div className="flex items-center gap-15 mt-10">
            <div>
              <span className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#28D08A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-phone-icon lucide-phone"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>

                <p className="font-display font-medium text-[20px]">
                  Toll Number
                </p>
              </span>
              <p className="font-regular font-display text-[16px] mr-17 text-[#6F7681]">
                +234 801 272 3390
              </p>
            </div>

            <div>
              <span className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#28D08A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-mail-icon lucide-mail"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>

                <p className="font-display font-medium text-[20px]">
                  Mail Address
                </p>
              </span>
              <p className="font-regular font-display text-[16px] text-[#6F7681]">
                Info@example.com
              </p>
            </div>
          </div>
          <div className="flex mt-5 gap-25">
            <div>
              <span className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#28D08A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-clock3-icon lucide-clock-3"
                >
                  <path d="M12 6v6h4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>

                <p className="font-display font-medium text-[20px]">
                  Working Hours
                </p>
              </span>
              <p className="font-regular font-display text-[16px] text-[#6F7681]">
                Mon - Friday
                <span className="block">9a.m - 8 p.m</span>
              </p>
            </div>
            <div>
              <span className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#28D08A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-map-pin-icon lucide-map-pin"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>

                <p className="font-display font-medium text-[20px]">
                  Office Address
                </p>
              </span>
              <p className="font-regular font-display text-[16px] text-[#6F7681]">
                Ikoyi, Lagos.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#FFFFFF] pt-5 pl-5 pb-5 pr-5 rounded-lg">
          <p className="font-display font-medium text-[31px]">
            Send us Message
            <span className="block font-display font-regular text-[16px] text-[#6F7681] mt-5">
              Feel free to fill up the form and our team will get back to you
              <br />
              within 24 hours.
            </span>
          </p>
          <div className="flex mt-5 items-center justify-center gap-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className="pl-3 pt-2 pb-2 pr-5 rounded-lg  font-display text-[#6F7681] bg-[#F1F1F1]"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="pl-3 pt-2 pb-2 pr-5 rounded-lg font-display text-[#6F7681] bg-[#F1F1F1]"
            />
          </div>
          <input
            type="text"
            name=""
            placeholder="Message"
            id=""
            className="mt-5 pt-2 pl-2 pr-68 pb-40 rounded-lg  bg-[#F1F1F1]  font-display"
          />
          <span className="block">
            <button className="border border-[#28D08A] rounded-lg pr-46 pl-46 pt-4 pb-4 mt-3 font-display bg-[#28D08A] font-bold text-[#FFFFFF]">
              Send Message
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
