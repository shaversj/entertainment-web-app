import Search from "../components/Search.jsx";
import SectionList from "../components/SectionList.jsx";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
const Bookmarked = () => {
  const [titleFilter, setTitleFilter] = useState("");
  const { data, handleBookmark } = useOutletContext();
  let bookmarkedMovies = data.filter((item) => item.isBookmarked && item.category === "Movie");
  let bookmarkedTVSeries = data.filter((item) => item.isBookmarked && item.category === "TV Series");

  let filteredBookmarkedMovies = bookmarkedMovies.filter((item) => titleFilter.length >= 1 && item.title.toLowerCase().includes(titleFilter.toLowerCase()));
  let filteredBookmarkedTVSeries = bookmarkedTVSeries.filter((item) => titleFilter.length >= 1 && item.title.toLowerCase().includes(titleFilter.toLowerCase()));

  function handleTitleFilter(value) {
    setTitleFilter(value);
  }
  return (
    <>
      <Search handleTitleFilter={handleTitleFilter} placeholder={"Search for bookmarked shows"} />
      <SectionList title={"Bookmarked Movies"} data={titleFilter ? filteredBookmarkedMovies : bookmarkedMovies} handleBookmark={handleBookmark} titleFilter={titleFilter} />
      {!titleFilter && <SectionList title={"Bookmarked TV Series"} data={titleFilter ? filteredBookmarkedTVSeries : bookmarkedTVSeries} handleBookmark={handleBookmark} titleFilter={titleFilter} />}
    </>
  );
};

export default Bookmarked;
