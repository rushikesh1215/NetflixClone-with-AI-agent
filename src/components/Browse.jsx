import React, { useEffect } from "react";
import Header from "./Header";
import { ApiOption, url } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addmovies } from "../utils/movieSlice";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const dispatch = useDispatch();

  const movies = async () => {
    const data = await fetch(url, ApiOption);
    const json = await data.json();
    dispatch(addmovies(json.results));
  };

  useEffect(() => {
    movies();
  }, []);

  return (
    <>
      <Header />
<MainContainer/>
<SecondaryContainer/>
    </>
  );
};

export default Browse;
