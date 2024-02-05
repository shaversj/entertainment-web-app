import Search from "../components/Search.jsx";
import SectionList from "../components/SectionList.jsx";
import customData from "../assets/design/starter-code/data.json";
import { useState } from "react";

const Movies = () => {
  const [titleFilter, setTitleFilter] = useState("");
  let allMovies = customData.filter((item) => item.category === "Movie");
  let filteredMovies = allMovies.filter((item) => titleFilter.length >= 1 && item.title.toLowerCase().includes(titleFilter.toLowerCase()));

  function handleBookmark() {}
  function handleTitleFilter(value) {
    setTitleFilter(value);
  }

  return (
    <>
      <Search handleTitleFilter={handleTitleFilter} placeholder={"Search for movies"} />
      <SectionList title={"Movies"} data={titleFilter ? filteredMovies : allMovies} handleBookmark={handleBookmark} titleFilter={titleFilter} />
    </>
  );
};

export default Movies;
