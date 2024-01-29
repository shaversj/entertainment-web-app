import Nav from "./Nav.jsx";
import Search from "./Search.jsx";
import TrendingList from "./TrendingList.jsx";
import customData from "/src/assets/design/starter-code/data.json";
import SectionList from "./SectionList.jsx";

function App() {
  function handleBookmark() {}

  return (
    <>
      <div className={"flex min-h-screen items-center justify-center bg-black"}>
        <div className={"min-h-[667px] w-full min-w-[375px] max-w-screen-sm  bg-dark-blue font-Outfit"}>
          {/*Nav*/}
          <Nav />
          <main className={"space-y-[24px] px-4"}>
            {/*  Search*/}
            <Search />

            {/*Trending*/}
            <TrendingList data={customData} handleBookmark={handleBookmark} />

            {/*Recommended for you*/}
            <SectionList title={"Recommended for you"} data={customData} handleBookmark={handleBookmark} />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
