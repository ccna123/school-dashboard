import { role } from "../../utils/data";
import Card from "../../components/share/card/card";
import EventCalendar from "../../components/calendar/EventCalendar";
import Announcement from "../../components/share/announcement";
import GraphContainer from "../../components/graph/GraphContainer";
import React, { Suspense } from "react";
import Spinner from "../../components/share/Spinner";

const Graph = React.lazy(() => import("../../components/graph/Graph"));

const Admin = () => {
  return (
    <div className="flex">
      <div className="w-[65%] min-h-full mt-4 mr-2">
        <section className="flex items-center gap-2">
          <Card
            color="bg-purple-200"
            date={"2024/12"}
            number={6123}
            title={"Student"}
          />
          <Card
            color="bg-yellow-200"
            date={"2024/12"}
            number={1123}
            title={"Teachers"}
          />
          <Card
            color="bg-purple-200"
            date={"2024/12"}
            number={1123}
            title={"Parents"}
          />
          <Card
            color="bg-yellow-200"
            date={"2024/12"}
            number={1123}
            title={"Staffs"}
          />
        </section>
        {/* Chart */}
        <section className="flex items-center mt-2 gap-2">
          {/* student chart */}
          <div className="h-[300px] w-1/3">
            <GraphContainer title="Student">
              <Suspense fallback={<Spinner />}>
                <Graph graphType="student" />
              </Suspense>
            </GraphContainer>
          </div>
          {/* attendance chart */}
          <div className="h-[300px] w-2/3">
            <GraphContainer title="Attendance">
              <Suspense fallback={<Spinner />}>
                <Graph graphType="attendance" />
              </Suspense>
            </GraphContainer>
          </div>
        </section>
        {/* income chart */}
        {role === "student" || role === "parent" ? (
          ""
        ) : (
          <div className="my-2">
            <GraphContainer title="Finance">
              <Suspense fallback={<Spinner />}>
                <Graph graphType="finance" />
              </Suspense>
            </GraphContainer>
          </div>
        )}
        <div className="mt-2">
          {/* AvgScore Chart */}
          <GraphContainer title="Average Score">
            <Suspense fallback={<Spinner />}>
              <Graph graphType="avg_score" />
            </Suspense>
          </GraphContainer>
        </div>
      </div>
      <div className="w-[35%] mt-4">
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  );
};

export default Admin;
