import { role } from "../../utils/data";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="bg-white rounded-full px-2 py-1 w-fit flex items-center gap-2 border-2 border-gray-300">
        <img className="w-4 h-4" src="/images/search.png" alt="" />
        <input
          type="text"
          className="text-gray-400 focus:outline-none"
          placeholder="Search..."
        />
      </div>
      <div className="flex items-center gap-4">
        <img
          className="w-6 h-6 cursor-pointer"
          src="/images/message.png"
          alt=""
        />
        <img
          className="w-6 h-6 cursor-pointer"
          src="/images/announcement.png"
          alt=""
        />
        <div>
          <p className="text-sm font-bold">John Doe</p>
          <p className="text-xs text-gray-400 text-right">{role}</p>
        </div>
        <img
          className="w-6 h-6 rounded-full cursor-pointer"
          src="/images/avatar.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default NavBar;
