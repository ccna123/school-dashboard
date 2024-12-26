import { useParams } from "react-router-dom";
import { teachersData } from "../../../utils/data";
import ScheduleCalendar from "../../../components/calendar/ScheduleCalendar";
import Announcement from "../../../components/share/announcement";
import ShortCut from "../../../components/share/Shortcut";
import GraphContainer from "../../../components/graph/GraphContainer";
import React, { Suspense } from "react";
import Spinner from "../../../components/share/Spinner";

const Graph = React.lazy(() => import("../../../components/graph/Graph"));

const SingleTeacherPage = () => {
  const { id } = useParams();

  const teacher = teachersData.find((teacher) => teacher.id === Number(id));
  return (
    <div className="gap-2 mt-2 flex items-start">
      {/* left */}
      <div className="rounded-lg w-2/3">
        <div className="flex gap-2 items-stretch">
          {/* user info */}
          <section className="bg-sky-200 rounded-lg pl-2 col-span-3 flex items-center gap-2 h-full">
            <img
              className="w-32 h-32 rounded-full object-cover"
              src={teacher?.photo}
              alt=""
            />
            <div className="px-2">
              <div className="py-2 text-sm">
                <p className="font-bold text-2xl">{teacher?.name}</p>
                <p className="text-sm text-gray-400 my-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesettin
                </p>
                <div className="flex items-center justify-between w-full gap-4">
                  <div>
                    <div className="flex items-center gap-2 my-2">
                      <img src="/images/blood.png" className="w-4 h-4" alt="" />
                      <p>A+</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <img src="/images/mail.png" className="w-4 h-4" alt="" />
                      <p>{teacher?.email}</p>
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
                      <p>{teacher?.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* stats */}
          <section className="flex w-fit flex-wrap justify-between gap-3 h-auto">
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
          </section>
        </div>
        {/* big calendar  */}
        <div className="min-h-full mt-4">
          <div className="bg-white rounded-md p-4">
            <p className="font-bold h-full">Schedule (A4)</p>
            <div className="h-[550px]">
              <ScheduleCalendar />
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-1/3">
        <ShortCut />
        <div className="h-[250px] my-2">
          <GraphContainer title="Performance">
            <Suspense fallback={<Spinner />}>
              <Graph graphType="performance" />
            </Suspense>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="font-bold text-3xl">9.2</p>
              <p className="text-sm text-gray-400">of max TLS</p>
            </div>
            <h1 className="absolute bottom-16 left-0 right-0 m-auto text-center font-medium text-xl">
              1st-Semester - 2nd-Semester
            </h1>
          </GraphContainer>
        </div>
        <Announcement />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
