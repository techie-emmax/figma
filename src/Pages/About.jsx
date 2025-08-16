import React from "react";

const About = () => {
  return (
    <div className="flex flex-col w-full">
    <div className="">
        <div className="flex items-center justify-center  gap-40 bg-[#F0F8FF]">
          <img src="/src/assets/Frame 1000008371 (1).png" className="rounded-lg mt-20 mb-20" alt="fuck" />
          <p className="text-[49px] font-display font-bold text-[#171A1F]">
            <mark className="bg-[#F0F8FF] text-[#28D08A]">About</mark> Techty
            <span className="block">
              <p className="text-[20px] font-display font-regular text-[#4E4E4E]">
                We're constantly pushing the boundaries of what's
                <br />
                possible and seeking new ways to improve our services
                <br /> and help our clients achieve their goals.
              </p>
            </span>
            <h4 className="font-display font-bold text-[31px] text-[#171A1F]">
              Vison
              <span className="block">
                <h6 className="text-[20px] text-display text-regular text-[#4E4E4E]">
                  Our vision is to create a better financial future for
                  <br /> everyone. We believe that everyone deserves access to
                  <br />
                  financial services and resources that empower them to
                  <br />
                  achieve their goals.
                </h6>
              </span>
            </h4>
            <h4 className="font-display font-bold text-[31px] text-[#171A1F]">
              Mission
              <span className="block">
                <h6 className="text-[20px] text-display text-regular text-[#4E4E4E]">
                  We're on a mission to empower people to take control of <br />
                  their finances and achieve their goals. We believe that <br />
                  everyone should have access to the tools and resources <br />
                  they have and make smart financial decisions.
                </h6>
              </span>
            </h4>
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-center gap-10 mt-30 bg-[#FFFFFF]">
        <h4 className="font-display font-bold text-[#4E4E4E] text-[31px] mt-10">Message from <mark className="bg-[#FFFFFF] text-[#28D08A]">Founder</mark>
          <span><p className="font-display font-regular text-[#4E4E4E] text-[20px]">
          I would like to take a moment to express my sincere
          <br />
          gratitude for choosing our IT services. As the founder of<br />
          this company, I am proud to say that we are committed to<br />
          providing the best possible solutions for your business needs.
          <br />
          <br />
          We understand the challenges that come with managing
          <br />
          an enterprise in the digital age, and we are dedicated to
          <br /> delivering innovative and reliable IT services to help you
          <br />
          navigate these challenges with ease.
          <br />
          <br />
          Our team of experts is constantly working to improve our
          <br />
          services and stay up-to-date with the latest
          <br />
          technological advancements. We strive to provide <br />
          personalized solutions that cater to your specific <br />
          requirements, ensuring that your business operations run <br />
          smoothly and efficiently.
          </p>
          </span>
          <span className="mt-10">
            <p className="text-[25px] text-[#171A1F] font-bold font-display ">John Willams<span className="block text-[20px] text-[#4E4E4E] font-display font-regular ">
            Founder, Ceo</span></p>
          </span>
        </h4>
        <img src="/src/assets/Frame 1000008371.png" alt="fuck" className="mt-10 mb-30"/>
      </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#FFFFFF]">
<p className="font-display font-bold text-[49px] leading-tight">
Our <mark className="bg-[#FFFFFF] text-[#28D08A]">team</mark> behind all <br />the success we have
</p>
<div className="flex items-center justify-center gap-10 mt-5 mb-5">
<span>
  <img src="src/assets/Frame 1000008378.png" alt="fuck"/>
  <p className="text-[25px] text-[#171A1F] font-bold font-display">Hyeon Vivek
    <span className="block text-[20px] font-regular font-display text-[#4E4E4E]">Financial Consultant</span>
  </p>
</span>
<span>
  <img src="src/assets/Frame 1000008378 (1).png" alt="fuck"/>
  <p className="text-[25px] text-[#171A1F] font-bold font-display">Hyeon Vivek
    <span className="block text-[20px] font-regular font-display text-[#4E4E4E]">Financial Consultant</span>
  </p>
</span>
<span>
  <img src="src/assets/Frame 1000008378 (1).png" alt="fuck"/>
  <p className="text-[25px] text-[#171A1F] font-bold font-display">Hyeon Vivek
    <span className="block text-[20px] font-regular font-display text-[#4E4E4E]">Financial Consultant</span>
  </p>
</span>
<span>
  <img src="src/assets/Frame 1000008378 (1).png" alt="fuck"/>
  <p className="text-[25px] text-[#171A1F] font-bold font-display">Hyeon Vivek
    <span className="block text-[20px] font-regular font-display text-[#4E4E4E]">Financial Consultant</span>
  </p>
</span>
</div>
      </div>
    </div>
  );
}

export default About;