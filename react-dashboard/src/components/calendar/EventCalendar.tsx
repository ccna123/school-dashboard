import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EventCard from "../share/card/eventCard";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <section className="bg-white rounded-lg p-2 mb-2">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between bg-white p-2">
        <p className="font-bold">Events</p>
        <img
          src="/images/moreDark.png"
          className="w-6 h-6 cursor-pointer"
          alt=""
        />
      </div>
      <div>
        {[1, 2, 3].map((_item, index) => {
          return (
            <EventCard
              title="Lorem Ipsum"
              date="2024/12/12"
              time="10:30"
              color={`${
                index % 2 === 0 ? "border-t-sky-200" : "border-t-purple-200"
              }`}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default EventCalendar;
