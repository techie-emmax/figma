import axios from "axios";
import React, { useEffect, useState } from "react";

const Fetching = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/posts");
        setPosts(res.data.posts);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return(
    <div className="flex flex-col items-center justify-center bg-[#FFFFFF] mt-[#FFFFFF]">
    <p className="font-bold font-display text-[#171A1F] text-[49px] text-center leading-tight">Read what the <mark className="bg-[#FFFFFF] text-[#28D08A]">customers</mark> <br />are saying about us.</p>
  <span className="grid grid-cols-4 gap-3 mt-10 p-10">

    {posts.map((post) => (
      <div key={post.id} className="flex flex-col items-center border shadow-sm shadow-green-500 justify-center gap-5 ">{post.id}
        <div>
            <p className="text-center text-xs">{post.body}</p>;
        
        </div>
      </div>
    ))}
  </span>
  </div>
  );

};

export default Fetching;
