import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ heading, list }) => {
  if (!list || !Array.isArray(list)) return null; // safe check

  return (
    <div  >
      <h1 className=" mx-4 w-fit h-7 py-1   text-white font-black">{heading}</h1>
      <div className="mx-1 flex overflow-x-scroll scrollbar-hide">
        <div className="flex  ">
          {list.map((movie) => (
            <MoviesCard
              key={movie.id}
              name={movie.original_title}
              Poster_path={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
