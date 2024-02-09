import Nav from "./Nav.jsx";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { originalData } from "../projectData.jsx";

const SharedLayout = () => {
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
  return (
    <>
      <div className={"flex min-h-screen items-center justify-center bg-black"}>
        <div className={"min-h-[667px] w-full min-w-[375px] max-w-screen-sm bg-dark-blue font-Outfit"}>
          <Nav />
          <main className={"space-y-[24px] px-4"}>
            <Outlet context={{ data, handleBookmark }} />
          </main>
        </div>
      </div>
    </>
  );
};

export default SharedLayout;
