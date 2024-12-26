import { role } from "../../utils/data";
import { NavLink } from "react-router-dom";
import React from "react";

type Props = {
  menu: {
    icon: string;
    text: string;
    visible: string[];
    href: string;
  }[];
};

const Menu: React.FC<Props> = ({ menu }) => {
  return (
    <div className="mt-1">
      {menu.map((item, index) => {
        if (item.visible.includes(role)) {
          return (
            <NavLink
              to={item.href}
              key={index}
              className="flex items-center gap-3 mb-1 cursor-pointer py-1 rounded-md hover:bg-sky-200 duration-150"
            >
              <img className="w-5 h-5" src={item.icon} alt="" />
              <p>{item.text}</p>
            </NavLink>
          );
        }
      })}
    </div>
  );
};

export default Menu;
