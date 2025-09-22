import axios from "axios";
import React, { useEffect, useState } from "react";

const Fetching = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/comments");
        setComments(res.data.comments.splice(0, 6));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-[#FFFFFF] p-2 md:p-0">
      <p className="font-bold font-display text-[#171A1F] text-[30px] md:text-[49px] mt-10 text-center leading-tight">
        Read what the{" "}
        <mark className="bg-[#FFFFFF] text-[#28D08A]">customers</mark> <br />
        are saying about us.
      </p>
      <div className="md:grid flex flex-col md:grid-cols-3 md:grid-rows-2 md:mt-5 md:gap-10 md:p-10">
        {comments.map((comment) => {
          const surName = comment.user.fullName.split(" ");
          const firstLetter = surName[0][0];
          const lastLetter = surName[1][0];
          return (
            <div
              key={comment.id}
              className="grid grid-cols-1 grid-rows-2 items-start rounded-lg justify-center md:gap-5"
            >
              <div className="shadow-sm shadow-gray-500 p-5">
                <img src="src/assets/Frame 15.png" alt="" />
                <p className="text-center text-[20px] font-display font-regular">
                  {comment.body}
                </p>
                ;
                <div className="flex  items-center gap-5">
                  <p className="flex bg-gray-400 rounded-full font-display font-regular text-[25px] w-23 h-23 items-center justify-center">
                    {firstLetter}
                    {lastLetter}
                  </p>
                  <p className="flex flex-col text-center text-[24px] font-display font-medium">
                    {comment.user.fullName}
                    <span className="text-[16px] font-display font-regular">
                      Financialist
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fetching;
