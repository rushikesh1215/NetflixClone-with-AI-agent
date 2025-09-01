import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ApiOption, url } from "../utils/constants";
import { addmovies } from "../utils/movieSlice";

const useMovies = () => {
  const dispatch = useDispatch();

  const movies = async () => {
    const data = await fetch(url, ApiOption);
    const json = await data.json();
    dispatch(addmovies(json.results));
  };

  useEffect(() => {
    movies();
  }, []);
};

export default useMovies;
