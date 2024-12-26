import EventCalendar from "../../components/calendar/EventCalendar";
import ScheduleCalendar from "../../components/calendar/ScheduleCalendar";
import Announcement from "../../components/share/announcement";

const Student = () => {
  return (
    <div className="flex">
      {/* big calendar  */}
      <div className="w-[70%] min-h-full mt-4 mr-2">
        <div className="bg-white rounded-md p-4">
          <p className="font-bold h-full">Schedule (A4)</p>
          <div className="h-[750px]">
            <ScheduleCalendar />
          </div>
        </div>
      </div>
      {/* event announcement  */}
      <div className="w-[35%] mt-4">
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  );
};

export default Student;
