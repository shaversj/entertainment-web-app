import Nav from "./Nav.jsx";
import Search from "./Search.jsx";
import TrendingList from "./TrendingList.jsx";
import customData from "/src/assets/design/starter-code/data.json";
import SectionList from "./SectionList.jsx";
import { useState } from "react";

function App() {
  const [titleFilter, setTitleFilter] = useState("");
  function handleBookmark() {}
  function handleTitleFilter(value) {
    setTitleFilter(value);
  }
  return (
    <>
      <div className={"flex min-h-screen items-center justify-center bg-black"}>
        <div className={"min-h-[667px] w-full min-w-[375px] max-w-screen-sm  bg-dark-blue font-Outfit"}>
          {/*Nav*/}
          <Nav />
          <main className={"space-y-[24px] px-4"}>
            {/*  Search*/}
            <Search handleTitleFilter={handleTitleFilter} placeholder={"Search for movies or TV series"} />

            {/*Trending*/}
            {!titleFilter && <TrendingList data={customData} handleBookmark={handleBookmark} />}

            {/*Recommended for you*/}
            <SectionList title={"Recommended for you"} data={customData} handleBookmark={handleBookmark} titleFilter={titleFilter} />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
