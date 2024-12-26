import React from "react";
import AnnouncementCard from "./card/announcementCard";

const Announcement = () => {
  return (
    <section className="bg-white rounded-lg p-2">
      <div className="flex items-center justify-between bg-white p-2 rounded-lg">
        <p className="font-bold">Announcements</p>
        <img
          src="/images/moreDark.png"
          className="w-6 h-6 cursor-pointer"
          alt=""
        />
      </div>
      <div>
        {[1, 2, 3].map((item, index) => {
          return (
            <AnnouncementCard
              title="Lorem Ipsum"
              date="2024/12/12"
              time="10:30"
              color={`${index % 2 === 0 ? "bg-sky-200" : "bg-purple-200"}`}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Announcement;
