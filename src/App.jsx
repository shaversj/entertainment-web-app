import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SharedLayout from "./components/SharedLayout.jsx";
import Movies from "./pages/Movies.jsx";
import TVSeries from "./pages/TVSeries.jsx";
import Bookmarked from "./pages/Bookmarked.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: SharedLayout,
    children: [
      { index: true, Component: Home },
      { path: "/movies", Component: Movies },
      { path: "/tvseries", Component: TVSeries },
      { path: "/bookmarked", Component: Bookmarked },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
