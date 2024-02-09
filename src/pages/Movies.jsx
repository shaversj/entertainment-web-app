import Search from "../components/Search.jsx";
import SectionList from "../components/SectionList.jsx";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Movies = () => {
  const [titleFilter, setTitleFilter] = useState("");
  const { data, handleBookmark } = useOutletContext();
  let allMovies = data.filter((item) => item.category === "Movie");
  let filteredMovies = allMovies.filter((item) => titleFilter.length >= 1 && item.title.toLowerCase().includes(titleFilter.toLowerCase()));

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
