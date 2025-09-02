import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeuser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Netflixlogo } from "../utils/constants";
import { useEffect, useState } from "react";
import { addgpt } from "../utils/gptSlice";
import { removegptsearch, removemovies } from "../utils/movieSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const isGpt = useSelector((store) => store.gpt);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gpt=()=>{
    if(isGpt){
      dispatch(removegptsearch())
dispatch(addgpt())

    }else{
    dispatch(addgpt());
  }}
  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeuser());
        navigate("/");
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeuser());
        dispatch(removemovies());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className=" flex justify-between w-screen absolute z-3 bg-gradient-to-b from-black">
      <img className="h-20 my-2 px-4" src={Netflixlogo} alt="logo" />
      {/* <img
        className="h-20 p-2 m-1"
        src={logo}  alt="logo"
      /> */}
      {user && (
        <div>
          <button
            onClick={gpt}
            className="font-extrabold cursor-pointer hover:text-xl text-green-400 text-2xl"
          >
           {isGpt? "Home": "gpt ֎"}
          </button>
          <button
            onClick={logout}
            className="bg-transparent  font-extrabold cursor-pointer text-white text-xl h-12 my-3 mx-5 p-2  hover:bg-gray-800 rounded-3xl"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
