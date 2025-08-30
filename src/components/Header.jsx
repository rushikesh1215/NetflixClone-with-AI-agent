import React from "react";
import logo from "../assets/userred.png"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeuser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const user= useSelector(store=>store.user);

  const navigate=useNavigate();
  const dispatch= useDispatch();
  const logout=()=>{
    signOut(auth).then(() => {
  dispatch(removeuser());
    navigate("/");
}).catch((error) => {
  
});
   
  }
  return (
    <div className=" flex justify-between w-screen absolute z-2 bg-gradient-to-b from-black">
      <img
        className="h-20"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
        {/* <img
        className="h-20 p-2 m-1"
        src={logo}  alt="logo"
      /> */}
      {user && <button onClick={logout} className="bg-red-600 h-10 mt-5 hover:bg-red-800 cursor-pointer rounded-lg text-white  m-4 px-2 ">Logout</button>
}
    </div>
  );
};

export default Header;
