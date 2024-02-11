import Nav from "./Nav.jsx";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { originalData } from "../projectData.jsx";

const SharedLayout = () => {
  const [data, setData] = useState(originalData);
  function handleBookmark(id) {
    console.log(id);
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
      <div className={"flex items-center justify-center bg-black lg:items-stretch"}>
        <div className={"min-h-[667px] w-full min-w-[375px] max-w-screen-sm bg-dark-blue font-Outfit lg:grid lg:min-w-[1440px] lg:max-w-[1440px] lg:grid-cols-[auto,1fr] lg:pl-[32px] lg:pt-[32px]"}>
          <Nav />
          <main className={"space-y-[24px] px-4 lg:min-h-screen lg:pl-[32px]"}>
            <Outlet context={{ data, handleBookmark }} />
          </main>
        </div>
      </div>
    </>
  );
};

export default SharedLayout;
