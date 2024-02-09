import { useState } from "react";
import Search from "../components/Search.jsx";
import SectionList from "../components/SectionList.jsx";
import { useOutletContext } from "react-router-dom";

const TvSeries = () => {
  const [titleFilter, setTitleFilter] = useState("");
  const { data, handleBookmark } = useOutletContext();
  let allTVSeries = data.filter((item) => item.category === "TV Series");
  let filteredTVSeriesByTitle = allTVSeries.filter((item) => titleFilter.length >= 1 && item.title.toLowerCase().includes(titleFilter.toLowerCase()));

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
