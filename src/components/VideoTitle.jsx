import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full z-2 aspect-video pt-[23%] absolute text-amber-50 py-2 px-20 bg-gradient-to-r from-black ">
      <h1 className="text-5xl font-black">{title}</h1>
      <br />
      <p className="p-2 py-2 my-1 text-sm font-extrabold items-center w-1/3 ">{overview}</p>
      <div className="flex w-200 ">
        <button className="bg-gradient-to-bl h-8 rounded-xl  text-sm font-bold  hover:bg-gradient-to-tl cursor-pointer from-gray-700 w-30">
          ▶︎ Play
        </button>
        <button className="bg-gradient-to-bl h-9 mx-3 pb-1 rounded-xl text-m font-bold hover:bg-gradient-to-tl cursor-pointer  from-gray-700 w-30">
          More Info ⓘ
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
