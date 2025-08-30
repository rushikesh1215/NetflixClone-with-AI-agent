import React, { useEffect } from "react";
import Header from "./Header";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { adduser, removeuser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeuser());
      }
    });
  }, []);

  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
