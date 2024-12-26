import LayoutLeft from "../share/LayoutLeft";
import LayoutRight from "../share/LayoutRight";

const Layout = () => {
  return (
    <section className="flex min-h-screen">
      <LayoutLeft />
      <LayoutRight />
    </section>
  );
};

export default Layout;
