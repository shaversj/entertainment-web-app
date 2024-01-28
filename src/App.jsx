import Nav from "./Nav.jsx";
import Search from "./Search.jsx";

function App() {
  return (
    <>
      <div className={"flex min-h-screen items-center justify-center bg-black"}>
        <div className={"min-h-[667px] min-w-[375px] max-w-screen-sm bg-dark-blue font-Outfit"}>
          <main>
            {/*Nav*/}
            <Nav />

            {/*  Search*/}
            <Search />

            {/*Trending*/}
            <section></section>

            {/*Recommended for you*/}
            <section></section>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
