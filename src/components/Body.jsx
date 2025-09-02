import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Gpt from "./Gpt";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/gpt",
      element: <Gpt />,
    },
  ]);

  return (
    <div className="bg-black w-screen">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
