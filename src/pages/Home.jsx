import { useState } from "react";
import Search from "../components/Search.jsx";
import TrendingList from "../components/TrendingList.jsx";
import SectionList from "../components/SectionList.jsx";
import { originalData } from "../projectData.jsx";

const Home = () => {
  const [titleFilter, setTitleFilter] = useState("");
  const [data, setData] = useState(originalData);
  function handleBookmark(id) {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return { ...item, isBookmarked: !item.isBookmarked };
        } else {
          return item;
        }
      }),
    );
  }
  function handleTitleFilter(value) {
    setTitleFilter(value);
  }

  let trendingShowsAndMovies = data.filter((item) => item.isTrending);
  let nonTrendingShowsAndMovies = data.filter((item) => !item.isTrending);
  let filteredByTitle = data.filter((item) => titleFilter.length >= 1 && item.title.toLowerCase().includes(titleFilter.toLowerCase()));

  return (
    <>
      {/*  Search*/}
      <Search handleTitleFilter={handleTitleFilter} placeholder={"Search for movies or TV series"} />

      {/*Trending*/}
      {!titleFilter && <TrendingList data={trendingShowsAndMovies} handleBookmark={handleBookmark} />}

      {/*Recommended for you*/}
      <SectionList title={"Recommended for you"} data={titleFilter ? filteredByTitle : nonTrendingShowsAndMovies} handleBookmark={handleBookmark} titleFilter={titleFilter} />
    </>
  );
};

export default Home;
