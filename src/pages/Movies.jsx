import Search from "../components/Search.jsx";
import SectionList from "../components/SectionList.jsx";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Movies = () => {
  const [titleFilter, setTitleFilter] = useState("");
  const { data, handleBookmark } = useOutletContext();

  let allMovies = data.filter((item) => item.category === "Movie");
  let filteredMoviesByTitle = allMovies.filter((item) => titleFilter.length >= 1 && item.title.toLowerCase().includes(titleFilter.toLowerCase()));
  let searchResultHeading = "Found " + filteredMoviesByTitle.length + " results for '" + titleFilter + "'";
  function handleTitleFilter(value) {
    setTitleFilter(value);
  }

  return (
    <>
      <Search handleTitleFilter={handleTitleFilter} placeholder={"Search for movies"} />
      <SectionList title={titleFilter ? searchResultHeading : "Movies"} data={titleFilter ? filteredMoviesByTitle : allMovies} handleBookmark={handleBookmark} />
    </>
  );
};

export default Movies;
