import { useDispatch } from "react-redux";
import { addToprated } from "../utils/movieSlice";
import { useEffect } from "react";
import { ApiOption } from "../utils/constants";

const useToprated = () => {
  const dispatch = useDispatch();

  const movies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      ApiOption
    );
    const json = await data.json();
    dispatch(addToprated(json.results));
  };

  useEffect(() => {
    movies();
  }, []);
};

export default useToprated;
