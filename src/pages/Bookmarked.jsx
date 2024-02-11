import Search from "../components/Search.jsx";
import SectionList from "../components/SectionList.jsx";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
const Bookmarked = () => {
  const [titleFilter, setTitleFilter] = useState("");
  const { data, handleBookmark } = useOutletContext();
  let bookmarkedMovies = data.filter((item) => item.isBookmarked && item.category === "Movie");
  let bookmarkedTVSeries = data.filter((item) => item.isBookmarked && item.category === "TV Series");
  let allBookmarkedShows = data.filter((item) => item.isBookmarked);

  let filteredBookmarkedShowsByTitle = allBookmarkedShows.filter((item) => titleFilter.length >= 1 && item.title.toLowerCase().includes(titleFilter.toLowerCase()));
  let searchResultHeading = "Found " + filteredBookmarkedShowsByTitle.length + " results for '" + titleFilter + "'";

  function handleTitleFilter(value) {
    setTitleFilter(value);
  }
  return (
    <>
      <Search handleTitleFilter={handleTitleFilter} placeholder={"Search for bookmarked shows"} />
      <SectionList title={titleFilter ? searchResultHeading : "Bookmarked Movies"} data={titleFilter ? filteredBookmarkedShowsByTitle : bookmarkedMovies} handleBookmark={handleBookmark} />
      {!titleFilter && <SectionList title={"Bookmarked TV Series"} data={bookmarkedTVSeries} handleBookmark={handleBookmark} />}
    </>
  );
};

export default Bookmarked;
