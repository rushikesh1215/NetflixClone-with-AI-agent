import { useDispatch } from "react-redux";
import { addTrending } from "../utils/movieSlice";
import { useEffect } from "react";
import { ApiOption } from "../utils/constants";

const usetrending = () => {
  const dispatch = useDispatch();

  const movies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      ApiOption
    );
    const json = await data.json();
    dispatch(addTrending(json.results));
  };

  useEffect(() => {
    movies();
  }, []);
};

export default usetrending;
