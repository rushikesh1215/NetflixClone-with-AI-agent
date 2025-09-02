import Header from "./Header";
import { useSelector } from "react-redux";

import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usetrending from "../hooks/usetrending";
import useToprated from "../hooks/useToprated";
import useMovies from "../hooks/useMovies";
import Gpt from "./Gpt";

const Browse = () => {
  const isgpt = useSelector((store) => store.gpt);
  useMovies();
  usetrending();
  useToprated();

  return (
    <div className="">
      <Header />
      {isgpt ? (
        <Gpt />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
   </div>
  );
};

export default Browse;
