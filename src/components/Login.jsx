import  { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";
import { NetflixBackGround } from "../utils/constants";

const Login = () => {
  const [Signup, setSignup] = useState(false);
  const [ermsg, setermsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  const dispatch=useDispatch();

  const loginclick = () => {
    const msg = validate(
      Signup,
      username?.current?.value,
      email.current.value,
      password.current.value
    );

    setermsg(msg);
    if (msg) return;
    if (Signup) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: username.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                adduser({ uid: uid, email: email, displayName: displayName })
              );

            
            })
            .catch((error) => {
              setermsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setermsg(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setermsg(errorCode.substring(5));
        });
    }
  };
  
  const toggle = () => {
    setSignup(!Signup);
  };

  return (
    <div>
      <Header />
      <div className="">
        <img
          className=" h-screen w-screen brightness-40"
          src={NetflixBackGround}
        />
      </div>
      <form
        className="h-auto text-white flex flex-col left-150 absolute top-50 w-2/9 bg-black/80"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="p-4 m-1 text-2xl font-extrabold text-center">
          {Signup ? "Sign up" : "Login"}
        </h1>
        {Signup && (
          <input
            ref={username}
            className="bg-gray-600/20 text-sm border-white px-2 py-2 mx-4 my-2"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="bg-gray-600/20 text-sm border-white px-2 py-2 mx-4 my-2"
          type="text"
          placeholder="Email"
        />
        <input
          ref={password}
          className="bg-gray-600/20 border-white px-2 py-2 mx-4 my-2 "
          type="password"
          placeholder="Password"
        />
        <p className="text-red-400 font-bold p-1 mx-4">{ermsg}</p>
        <button
          className="bg-red-600 hover:bg-red-800 cursor-pointer h-7 my-2 mx-4 focus text-center rounded-sm text-white"
          onClick={loginclick}
        >
          {Signup ? "Sign up" : "Login"}
        </button>
        <p
          className="cursor-pointer w-fit hover:text-gray-400 p-2 m-2 font-extrabold"
          onClick={toggle}
        >
          {Signup ? "Existing user? Login" : "New user? Signup"}
        </p>
      </form>
    </div>
  );
};

export default Login;
