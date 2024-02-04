import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import SharedLayout from "./SharedLayout.jsx";
import Movies from "../pages/Movies.jsx";
import TVSeries from "../pages/TVSeries.jsx";
import Bookmarked from "../pages/Bookmarked.jsx";

const Root = () => {
  return (
    <Routes>
      <Route path={"/"} element={<SharedLayout />}>
        <Route index={true} element={<Home />} />
        <Route path={"/movies"} element={<Movies />} />
        <Route path={"/tvseries"} element={<TVSeries />} />
        <Route path={"/bookmarked"} element={<Bookmarked />} />
      </Route>
    </Routes>
  );
};

export default Root;
