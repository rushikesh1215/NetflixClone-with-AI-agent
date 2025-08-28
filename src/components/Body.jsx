import React from 'react'
import Header from './Header'
import Login from './Login'
import{createBrowserRouter} from "react-router-dom"
import { RouterProvider } from 'react-router-dom'
import Browse from './Browse'

const Body = () => {
  const appRouter=createBrowserRouter(
[
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/browse",
    element:<Browse/>
  },


]
  );
  return (
    <div className="">
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body