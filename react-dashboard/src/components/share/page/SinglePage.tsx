import React from "react";
import ShortCut from "../shortcut";
import Announcement from "../announcement";
import { Student } from "../../../interface/IStudent";
import { Teacher } from "../../../interface/ITeacher";
import ScheduleCalendar from "../../calendar/ScheduleCalendar";
import PerformanceChart from "../../graph/PerformanceChart";

interface GeneralSinglePageProps {
  person: Teacher | Student;
  pageType: string;
}

const GeneralSinglePage: React.FC<GeneralSinglePageProps> = ({
  person,
  pageType,
}) => {
  return (
    <div className="gap-2 mt-2 flex items-start">
      {/* left */}
      <div className="rounded-lg w-2/3">
        <div className="grid grid-cols-5 gap-2 items-stretch">
          <div className="bg-sky-200 rounded-lg pl-2 col-span-3 flex items-center gap-2 h-full">
            <img
              className="w-32 h-32 rounded-full object-cover"
              src={person?.photo}
              alt=""
            />
            <div className="px-2">
              <div className="py-2 text-sm">
                <p className="font-bold text-2xl">{person?.name}</p>
                <p className="text-sm text-gray-400 my-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesettin
                </p>
                <div className="flex items-center justify-between w-fit gap-4">
                  <div>
                    <div className="flex items-center gap-2 my-2">
                      <img src="/images/blood.png" className="w-4 h-4" alt="" />
                      <p>A+</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <img src="/images/mail.png" className="w-4 h-4" alt="" />
                      <p>{person?.email}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 my-2">
                      <img
                        src="/images/calendar.png"
                        className="w-4 h-4"
                        alt=""
                      />
                      <p>12/12/2024</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <img src="/images/phone.png" className="w-4 h-4" alt="" />
                      <p>{person?.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-stretch flex-wrap justify-between gap-3 col-span-2 h-full">
            <div className="bg-white rounded-lg gap-2 flex items-center w-[48%] px-2">
              <img
                className="w-6 h-6"
                src="/images/singleAttendance.png"
                alt=""
              />
              <div>
                <p className="font-bold">90%</p>
                <p className="text-sm text-gray-400">Attendance</p>
              </div>
            </div>
            <div className="bg-white rounded-lg gap-2 flex items-center w-[48%] px-2">
              <img className="w-6 h-6" src="/images/singleLesson.png" alt="" />
              <div>
                <p className="font-bold">6</p>
                <p className="text-sm text-gray-400">Lessons</p>
              </div>
            </div>
            <div className="bg-white rounded-lg gap-2 flex items-center w-[48%] px-2">
              <img className="w-6 h-6" src="/images/singleClass.png" alt="" />
              <div>
                <p className="font-bold">6</p>
                <p className="text-sm text-gray-400">Classes</p>
              </div>
            </div>
            <div className="bg-white rounded-lg gap-2 flex items-center w-[48%] px-2">
              <img className="w-6 h-6" src="/images/singleBranch.png" alt="" />
              <div>
                <p className="font-bold">2</p>
                <p className="text-sm text-gray-400">Branches</p>
              </div>
            </div>
          </div>
        </div>
        {/* big calendar  */}
        <div className="min-h-full mt-4">
          <div className="bg-white rounded-md p-4">
            <p className="font-bold h-full">
              {pageType === "teacher"
                ? "Teacher's Schedule"
                : "Student's Schedule"}
            </p>
            <div className="h-[750px]">
              <ScheduleCalendar />
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-1/3">
        <ShortCut />
        <PerformanceChart title="Performance" />
        <Announcement />
      </div>
    </div>
  );
};

export default GeneralSinglePage;
