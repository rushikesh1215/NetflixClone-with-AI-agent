import React, { useEffect } from "react";
import { ApiOption } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

const Trailer = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailervideo = useSelector((store) => store.movies.trailer);
console.log(trailervideo);
  const gettrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      ApiOption
    );
    const json = await data.json();

    const filteredTrailer = json?.results?.filter(
      (video) => video.type == "Trailer"
    );

    const trailer = filteredTrailer.length
      ? filteredTrailer[0]
      : json.results[0];

    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    gettrailer();
  }, []);

  return (
    <div >
      <iframe
        className="relative w-[100vw] h-[100vh] overflow-hidden"
        // src={"https://www.youtube.com/embed/" + trailervideo?.key+"?&autoplay=1&mute=1"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default Trailer;
