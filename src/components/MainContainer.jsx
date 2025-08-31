import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.movies);
  if (!movies) return;
  const mainMovie = movies[0];
  const {original_title,overview}= mainMovie;
  return
   (<div>
    <VideoTitle Title={original_title} overview={overview}/>
   </div>);

};

export default MainContainer;
