import React, { useState } from "react";
import Empower from "../Components/Empower";

const Service = () => {
  const [hoveredIndex, setHoveredIndex] = useState([]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex([]);
  };

  const services = [
    {
      title: "Online Marketing",
      image: "src/assets/Frame 1000008386.png",
      description:
        "In the new era of technology we look into the future with certainty and pride.",
    },
    {
      title: "Startup Business",
      image: "src/assets/Frame 1000008386 (1).png",
      description:
        "In the new era of technology we look into the future with certainty and pride.",
    },
    {
      title: "Business Growth",
      image: "src/assets/Frame 1000008386 (2).png",
      description:
        "In the new era of technology we look into the future with certainty and pride.",
    },
    {
      title: "Development",
      image: "src/assets/Frame 1000008386 (3).png",
      description:
        "In the new era of technology we look into the future with certainty and pride.",
    },
  ];

  return (
    <div className="bg-[#F0F8FF]">
      <div className="flex flex-col items-center justify-center pt-10">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-[49px] text-[#171A1F] font-bold font-display">
            We provide the best{" "}
            <mark className="bg-[#F0F8FF] text-[#28D08A]">service</mark>{" "}
            solutions.
          </p>
          <p className="block text-[16px] text-[#4E4E4E] font-regular font-display mt-4">
            We're constantly pushing the boundaries of what's possible and
            seeking new ways to <br />
            improve our services and help our clients achieve their goals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mt-10 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-md w-72"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={service.image} alt={service.title} />
              <p className="text-[25px] font-display font-bold text-[#171A1F] mt-4">
                {service.title}
                <span className="block text-[16px] font-display font-regular text-[#4E4E4E]">
                  {service.description}
                </span>
              </p>
              <div className="flex items-center">
                <img
                  src="src/assets/Frame (3).png"
                  alt="contact icon"
                  className="mt-3 cursor-pointer"
                />
                {hoveredIndex === index && (
                  <span className="animate-fadeIn font-display mt-3 font-regular text-[20px]">
                    Contact
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Empower />
      <div className="bg-[#F0F8FF] p-15">
               
        <p className="font-bold font-display text-[49px] text-center">
                    We have the best          
          <mark className="bg-[#F0F8FF] text-[#28D08A]"> pricing</mark> <br /> 
                  package for you        
        </p>
               
        <div className="flex items-center justify-center gap-[30%] bg-[#FFFFFF] rounded-lg">
                   
          <span className="bg-[#FFFFFF] mt-5">
                       
            <p className="font-display font-medium text-[39px]">
                            On Demand              
              <span className="block font-display font-regular text-[16px] text-[#495460]">
                                Get all these features when you are using as
                starter.              
              </span>
                         
            </p>
                       
            <div className="flex items-center justify-top gap-10 mt-5">
                           
              <div>
                <span className="flex items-center gap-3">
                   
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check-icon lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <p className="text-[#4E4E4E] text-[16px] font-light font-display ">
                                      Unlimited Projects                
                  </p>
                </span>
                                             
                <span className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check-icon lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <p className="text-[#4E4E4E] text-[16px] font-light font-display ">
                                      Analytics dashboard                
                  </p>
                </span>
                               
                <span className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check-icon lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <p className="text-[#4E4E4E] text-[16px] font-light font-display ">
                                      Unlimited Projects                
                  </p>
                </span>
                             
              </div>
                           
              <div>
                <span className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check-icon lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <p className="text-[#4E4E4E] text-[16px] font-light font-display ">
                                      Insights panel                
                  </p>
                </span>
                               
                <span className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check-icon lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <p className="text-[#4E4E4E] text-[16px] font-light font-display ">
                                      Email notifications                
                  </p>
                </span>
                             
                <span className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check-icon lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <p className="text-[#4E4E4E] text-[16px] font-light font-display ">
                                      Share features              
                  </p>
                </span>
                                         
              </div>
                       
            </div>
                 
          </span>
                 
          <span className="bg-[#F0F8FF] px-5 ml-10 mr-10 mb-5 mt-5 rounded-lg">
                       
            <p className="mt-4 font-display font-bold text-[25px] text-center">
                            Quick Solution              
              <span className="block font-display text-[61px] font-bold text-[#495460]">
                                $20
                <sub className="text-[20px] font-bold text-[#495460]">
                  /hour
                </sub>
                             
              </span>
                         
            </p>
                     
            <button className="border border-[#28D08A] font-display font-bold bg-[#28D08A] hover:bg-[#000000] pt-[16px] pb-[16px] pl-[60px] pr-[60px] rounded-lg p-2 m-4 text-[16px] text-white">
              Hire an Expert
            </button>
                   
          </span>
                 
        </div>
               
        <div className="flex items-center justify-center mt-5 gap-[30%] bg-[#FFFFFF] rounded-lg">
          <span className="">
            <p className="font-display font-medium text-[39px]">
                           Maintenance              
              <span className="block font-display font-regular text-[16px] text-[#495460]">
                                Get all these features when you are using as
                starter.              
              </span>
                         
            </p>
                 
            <div className="flex items-center justify-top gap-10 mt-5">
                 
              <div className="">
                <span className="flex items-center gap-3">
                   
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check-icon lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <p className="text-[#4E4E4E] text-[16px] font-light font-display ">
                                      Unlimited Projects                
                  </p>
                </span>
                                             
                <span className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check-icon lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <p className="text-[#4E4E4E] text-[16px] font-light font-display ">
                                      Analytics dashboard                
                  </p>
                </span>
                               
                <span className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check-icon lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <p className="text-[#4E4E4E] text-[16px] font-light font-display ">
                                      Unlimited Projects                
                  </p>
                </span>
                             
              </div>
                           
              <div>
                <span className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check-icon lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <p className="text-[#4E4E4E] text-[16px] font-light font-display ">
                                      Insights panel                
                  </p>
                </span>
                               
                <span className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check-icon lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <p className="text-[#4E4E4E] text-[16px] font-light font-display ">
                                      Email notifications                
                  </p>
                </span>
                             
                <span className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check-icon lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <p className="text-[#4E4E4E] text-[16px] font-light font-display ">
                                      Share features              
                  </p>
                </span>
                                         
              </div>
               
            </div>{" "}
                 
          </span>
               
          <span className="bg-[#F0F8FF] px-5 ml-10 mr-10 mb-5 mt-5 rounded-lg">
                       
            <p className="mt-4 text-center font-display font-bold text-[25px]">
                            Quick Solution              
              <span className="block font-display text-[61px] font-bold text-[#495460]">
                                $99
                <sub className="text-[20px] font-bold text-[#495460]">
                  /hour
                </sub>
                             
              </span>
                       
            </p>
                       
            <button className="border border-[#28D08A] font-display font-bold bg-[#28D08A] hover:bg-[#000000] pt-[16px] pb-[16px] pl-[60px] pr-[60px] rounded-lg p-2 m-4 text-[16px] text-white">
              Hire an Expert
            </button>
                   
          </span>
                     
        </div>
               
      </div>
           
    </div>
  );
};

export default Service;
