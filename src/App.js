import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Home from "./components/Home/Home";
import Quizes from "./components/Quizes/Quizes";
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
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Topics></Topics>,
        },
        {
          path: "/topic/:quizeId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizeId}`
            );
          },
          element: <Quizes></Quizes>,
        },
        {
          path: "/statistics",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
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
