import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Topics from "./components/Topics/Topics";
import Main from "./layouts/Main";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/topics",
          element: <Topics></Topics>,
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorMessage></ErrorMessage>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
