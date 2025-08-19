import axios from "axios";
import React, { useEffect, useState } from "react";

const Fetching = () => {


  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/comments");
        setComments(res.data.comments.splice(0, 6));}
        
       catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return(
    <div className="flex flex-col items-center justify-center bg-[#FFFFFF] mt-[#FFFFFF]">
    <p className="font-bold font-display text-[#171A1F] text-[49px] mt-10 text-center leading-tight">Read what the <mark className="bg-[#FFFFFF] text-[#28D08A]">customers</mark> <br />are saying about us.</p>
  <span className="grid grid-cols-3 grid-rows-2 mt-10 gap-10 p-10">

    {comments.map((comment) => {
        const surName = comment.user.fullName.split(' ');
        const firstLetter = surName[0][0];
        const lastLetter = surName[1][0];
        return (
      <div key={comment.id} className="p-5 flex flex-col items-start rounded-lg shadow-sm shadow-gray-500 justify-center gap-5 ">
        <div className="">
          <img src="src/assets/Frame 15.png" alt="" />
            <p className="text-center text-[20px] mt-5 font-display font-regular">{comment.body}</p>;
            <div className="flex  items-center gap-5">  
              <p className="flex bg-gray-400 rounded-full font-display font-regular text-[25px] w-23 h-23 items-center justify-center">{firstLetter}{lastLetter}</p>
              <p className="flex flex-col text-center text-[24px] font-display font-medium">{comment.user.fullName}<span className="text-[16px] font-display font-regular">Financialist</span></p>
              </div>
      
        </div>
      </div>)
      ;
    })}
  </span>
  </div>
  );

};

export default Fetching;
