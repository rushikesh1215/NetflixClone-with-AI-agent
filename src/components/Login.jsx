import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [Signup, setSignup] = useState(false);
  const toggle=()=>{
    setSignup(!Signup);
  }

  return (
    <div>
      <Header />
      <div className="">
        <img
          className=" h-screen w-screen brightness-40"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg"
        />
      </div>
      <form
        className=" text-white flex flex-col left-115 absolute top-30 w-2/9 bg-black/80"
        action=""
      >
        <h1 className="p-4 m-1 text-2xl font-extrabold text-center">
          {Signup ? "Sign up" : "Login"}
        </h1>
        {Signup && 
          <input
            className="bg-gray-600/20 text-sm border-white px-2 py-2 mx-4 my-2"
            type="text"
            placeholder="Full Name"
          />
        }
        <input
          className="bg-gray-600/20 text-sm border-white px-2 py-2 mx-4 my-2"
          type="text"
          placeholder="Email"
        />
        <input
          className="bg-gray-600/20 border-white px-2 py-2 mx-4 my-2 "
          type="password"
          placeholder="Password"
        />
        <button className="bg-red-600 hover:bg-red-800 cursor-pointer h-7 my-2 mx-4 focus text-center rounded-sm text-white">
           {Signup ? "Sign up" : "Login"}
        </button>
        <p className="cursor-pointer w-fit hover:text-gray-400 p-2 m-2 font-extrabold" onClick={toggle}>
          {Signup ? "Existing user? Login" : "New user? Signup"}
        </p>
      </form>
    </div>
  );
};

export default Login;
