import Nav from "./Nav.jsx";
import Search from "./Search.jsx";
import TrendingCard from "./TrendingCard.jsx";
import TrendingList from "./TrendingList.jsx";

function App() {
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
            <section>
              <TrendingList />
            </section>

            {/*Recommended for you*/}
            <section></section>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
