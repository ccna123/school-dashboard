import { Outlet } from "react-router-dom";
import NavBar from "./navBar";

const LayoutRight = () => {
  return (
    <section className="w-full p-3">
      <NavBar />
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default LayoutRight;
