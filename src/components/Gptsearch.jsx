import { useRef } from "react";
import { ai } from "../utils/geminiAI";
import { useDispatch } from "react-redux";
import { addgptsearch } from "../utils/movieSlice";

const Gptsearch = () => {
  const SearchText = useRef(null);
  const dispatch=useDispatch();
 
  const handleGptSearch = async () => {
    const text = SearchText.current.value;
    const query="act as movie recommendation system and suggest some movies for query:"+text+". and only give 10 Movies with 2 lines of their description and overall rating. and put 2 $ only before name of movies so that i can split them.for example $$1.mai tera hero(1980 ) then desciption then title"
   const  response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: query,
    });
   
    const res=response.candidates[0].content.parts[0].text;
     dispatch(addgptsearch(res));
     SearchText.current.value = ""

  };
  return (
    <div>
      <div className=" flex justify-center ">
        <form
          action=""
          className=" p-1"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            ref={SearchText}
            type="text"
            className="bg-amber-50 border-2 p-2 ml-.5 w-2xl "
            placeholder="what would you like to watch today"
          />
          <button
            onClick={handleGptSearch}
            className="bg-red-600 py-2 px-1 h-11 ml-1 cursor-pointer text-white font-bold w-auto"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Gptsearch;
