"use client";

import moment from "moment";
import { calendarEvents } from "../../utils/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";

const localizer = momentLocalizer(moment);

const ScheduleCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "100%" }}
      onView={handleOnChangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
    />
  );
};

export default ScheduleCalendar;
