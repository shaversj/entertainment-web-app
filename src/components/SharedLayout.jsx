import Nav from "./Nav.jsx";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <div className={"flex min-h-screen items-center justify-center bg-black"}>
        <div className={"min-h-[667px] w-full min-w-[375px] max-w-screen-sm bg-dark-blue font-Outfit"}>
          {/*Nav*/}
          <Nav />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SharedLayout;
