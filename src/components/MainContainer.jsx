import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import Trailer from "./Trailer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.Movies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title,id, overview } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <Trailer movieId={id} />
      <video />
    </div>
  );
};

export default MainContainer;
