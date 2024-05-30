import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Applayout from "./layouts/Applayout";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import Favourites from "./pages/Favourites";
import Singlegif from "./pages/Singlegif";


  //homepage
  //categories
  //search
  //single gif
  //favorites

  const router = createBrowserRouter([
    {
      element: <Applayout />,

      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/Search/:query",
          element: <Search />,
        },
        {
          path: "/:Category",
          element: <Categories />,
        },
        {
          path: "/Favourites",
          element: <Favourites />,
        },
        {
          path: "/:type/:slug",
          element: <Singlegif />,
        },
      ],
    },
  ]);

  function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
