import React from "react";

type Props = {
  title: string;
  date: string;
  time: string;
  color: string;
};

const EventCard: React.FC<Props> = ({ title, date, time, color }) => {
  return (
    <div
      className={`rounded-md px-4 py-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-t-4 ${color} mb-2`}
    >
      <div className="flex items-center justify-between mb-2">
        <p className="font-bold">{title}</p>
        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-400">{date}</p>
          <p className="text-xs text-gray-400">{time}</p>
        </div>
      </div>
      <p className="text-sm">Lorem Ipsum is simply dummy text </p>
    </div>
  );
};

export default EventCard;
