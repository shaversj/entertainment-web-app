import React, { useState } from "react";
import customData from "../assets/design/starter-code/data.json";
import Search from "../components/Search.jsx";
import SectionList from "../components/SectionList.jsx";

const TvSeries = () => {
  const [titleFilter, setTitleFilter] = useState("");
  let allTVSeries = customData.filter((item) => item.category === "TV Series");
  let filteredTVSeriesByTitle = allTVSeries.filter((item) => titleFilter.length >= 1 && item.title.toLowerCase().includes(titleFilter.toLowerCase()));

  function handleBookmark() {}
  function handleTitleFilter(value) {
    setTitleFilter(value);
  }

  return (
    <>
      <Search handleTitleFilter={handleTitleFilter} placeholder={"Search for TV series"} />
      <SectionList title={"TV Series"} data={titleFilter ? filteredTVSeriesByTitle : allTVSeries} handleBookmark={handleBookmark} titleFilter={titleFilter} />
    </>
  );
};

export default TvSeries;
