import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeuser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Netflixlogo } from "../utils/constants";
import { useEffect } from "react";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeuser());
        navigate("/");
      })
      .catch((error) => {});
  };

  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
      } else {
        dispatch(removeuser());
        navigate("/")
      }
    });

    return ()=> unsubscribe();
  }, []);

  return (
    <div className=" flex justify-between w-screen absolute z-3 bg-gradient-to-b from-black">
      <img
        className="h-20 px-4"
        src={Netflixlogo}
        alt="logo"
      />
      {/* <img
        className="h-20 p-2 m-1"
        src={logo}  alt="logo"
      /> */}
      {user && (
        <button
          onClick={logout}
          className="bg-red-600 h-10 m-5 hover:bg-red-800 cursor-pointer rounded-lg text-white  m-4 px-2 "
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
