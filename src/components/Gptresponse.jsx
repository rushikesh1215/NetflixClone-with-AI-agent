import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Gptresponse = () => {
  const result = useSelector((store) => store.movies.gptMovies);
  const [arr, setArr] = useState([]);
  console.log(result);

  useEffect(() => {
    if (!result) return;

    let re = result
      .replace(/\n\n/g, " ")
      .replace(/\*\*/g, "")
      .replace(/\*/g, "");

    // Only cut if ":" exists
    const colonIndex = re.indexOf(":");
    if (colonIndex !== -1) {
      re = re.substring(colonIndex + 2);
    }

    const newArr = re.split("$$");
    setArr(newArr);

    console.log(newArr);
  }, [result]);

  if (!result) {
    return <p className="text-gray-400  p-4">No GPT recommendations yet.</p>;
  }

  return (
    <div className="bg-gray-950 w-[65%] ml-40">
      {arr.map((element, index) => (
        <>
          <p key={index} className="text-amber-50 px-3 ">
            {element}
          </p>
          <br />
        </>
      ))}
    </div>
  );
};

export default Gptresponse;
