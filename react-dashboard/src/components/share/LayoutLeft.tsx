import top_menu from "../../utils/top_menu.json";
import bottom_menu from "../../utils/bottom_menu.json";
import Menu from "./menu";

const LayoutLeft = () => {
  return (
    <div className="p-4 bg-white w-1/6">
      <div className="flex gap-4 items-center">
        <img src="/images/education.png" alt="" className="w-8 h-8" />
        <p className="font-bold">ABC school</p>
      </div>
      <p className="mt-2 text-gray-400">Menu</p>
      <Menu menu={top_menu} />
      <p className="mt-2 text-gray-400">Other</p>
      <Menu menu={bottom_menu} />
    </div>
  );
};

export default LayoutLeft;
