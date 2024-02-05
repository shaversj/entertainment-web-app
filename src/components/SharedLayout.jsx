import Nav from "./Nav.jsx";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <div className={"flex min-h-screen items-center justify-center bg-black"}>
        <div className={"min-h-[667px] w-full min-w-[375px] max-w-screen-sm bg-dark-blue font-Outfit"}>
          {/*Nav*/}
          <Nav />
          <main className={"space-y-[24px] px-4"}>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default SharedLayout;
