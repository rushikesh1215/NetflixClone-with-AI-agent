import React, { useEffect } from "react";
import Header from "./Header";
import { ApiOption, url } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addmovies } from "../utils/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();

  const movies = async () => {
    const data = await fetch(url, ApiOption);
    const json = await data.json();
    // dispatch(addmovies(json.results));
    console.log(json);
  };

  useEffect(() => {
    movies();
  }, []);

  return (
    <>
      <Header />

    </>
  );
};

export default Browse;
