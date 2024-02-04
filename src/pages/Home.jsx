import { useState } from "react";
import Search from "../components/Search.jsx";
import TrendingList from "../components/TrendingList.jsx";
import customData from "../assets/design/starter-code/data.json";
import SectionList from "../components/SectionList.jsx";

const Home = () => {
  const [titleFilter, setTitleFilter] = useState("");
  function handleBookmark() {}
  function handleTitleFilter(value) {
    setTitleFilter(value);
  }
  return (
    <>
      <main className={"space-y-[24px] px-4"}>
        {/*  Search*/}
        <Search handleTitleFilter={handleTitleFilter} placeholder={"Search for movies or TV series"} />

        {/*Trending*/}
        {!titleFilter && <TrendingList data={customData} handleBookmark={handleBookmark} />}

        {/*Recommended for you*/}
        <SectionList title={"Recommended for you"} data={customData} handleBookmark={handleBookmark} titleFilter={titleFilter} />
      </main>
    </>
  );
};

export default Home;
