import React from "react";

type Props = {
  number: number;
  title: string;
  date: string;
  color: string;
};

const Card: React.FC<Props> = ({ date, number, title, color }) => {
  return (
    <div className={`${color} p-3 rounded-2xl w-full`}>
      <div className="flex items-center justify-between">
        <p className="bg-white text-blue-700 text-xs p-1 rounded-full font-bold">
          {date}
        </p>
        <img src="images/more.png" className="w-6 h-6 cursor-pointer" alt="" />
      </div>
      <div className="font-bold my-3">{number}</div>
      <div className="text-xs text-gray-500">{title}</div>
    </div>
  );
};

export default Card;
