import React, { useEffect } from "react";
import Header from "./Header";
import { ApiOption, url } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addmovies } from "../utils/movieSlice";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usetrending from "../hooks/usetrending";
import useToprated from "../hooks/useToprated";
import useMovies from "../hooks/useMovies";

const Browse = () => {
  useMovies();
  usetrending();
  useToprated();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
