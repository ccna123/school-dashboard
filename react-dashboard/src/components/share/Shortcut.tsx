import shortcuts from "../../utils/shortcuts.json";
import { Link } from "react-router-dom";

const ShortCut = () => {
  return (
    <div className="bg-white rounded-lg p-4">
      <p className="font-bold text-xl">Shortcuts</p>
      <div className="flex flex-wrap items-center gap-3 mt-4">
        {shortcuts.map((item, index) => {
          return (
            <Link key={index} to={item.link}>
              <button className="bg-sky-200 text-xs cursor-pointer px-2 w-fit py-1 rounded-lg">
                <p>{item.title}</p>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ShortCut;
