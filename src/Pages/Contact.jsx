import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

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
    <div className='mt-5 mb-5 flex items-center justify-center gap-3'>
      <p className='font-display font-bold text-[25px]'>we are happy to discuss your project<br />and answer any question</p>
      <p></p>
      <div className='bg-[#FFFFFF] pt-5 pl-5 pb-5 pr-5'>
        <p className='font-display font-bold '>Send us Message</p>
        <div className='flex items-center justify-center gap-5'>
          <input type="text" name="" id="" value="Name" className='pl-3 text-[#6F7681] bg-[#F1F1F1]'/>
        <input type="email" name="email" id="email" value="Email" className='pl-3 font-display text-[#6F7681] bg-[#F1F1F1]'/></div>
        <input type="text" name="" value="Message" id="" className='mt-5 pt-2 pl-2 pr-58 pb-40  bg-[#F1F1F1]' />
        <span className='block'>
        <input type="button" value="Send Message" className='border border-[#28D08A] rounded-lg px-38 py-4 mt-3 font-display bg-[#28D08A] font-bold text-[#FFFFFF]'/>
       </span>
        
        
      </div>
    </div>
    </div>
  )
}

export default Contact