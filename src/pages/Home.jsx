import { useState } from "react";
import Search from "../components/Search.jsx";
import TrendingList from "../components/TrendingList.jsx";
import SectionList from "../components/SectionList.jsx";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const [titleFilter, setTitleFilter] = useState("");
  const { data, handleBookmark } = useOutletContext();

  function handleTitleFilter(value) {
    setTitleFilter(value);
  }

  let trendingShowsAndMovies = data.filter((item) => item.isTrending);
  let nonTrendingShowsAndMovies = data.filter((item) => !item.isTrending);
  let filteredShowsByTitle = data.filter((item) => titleFilter.length >= 1 && item.title.toLowerCase().includes(titleFilter.toLowerCase()));
  let searchResultHeading = "Found " + filteredShowsByTitle.length + " results for '" + titleFilter + "'";

  return (
    <>
      <Search handleTitleFilter={handleTitleFilter} placeholder={"Search for movies or TV series"} />
      {!titleFilter && <TrendingList data={trendingShowsAndMovies} handleBookmark={handleBookmark} />}
      <SectionList title={titleFilter ? searchResultHeading : "Recommended for you"} data={titleFilter ? filteredShowsByTitle : nonTrendingShowsAndMovies} handleBookmark={handleBookmark} />
    </>
  );
};

export default Home;
