import styled from "styled-components";
import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  const statutoryHolidays = [
    { title: "New Year's Day", date: "2023-01-01" },
    { title: "Canada Day", date: "2023-07-01" },
    { title: "Labour Day", date: "2023-09-04" },
    { title: "Christmas Day", date: "2023-12-25" },
    // Add more holidays here
  ];

  useEffect(() => {
    const holidaysFormatted = statutoryHolidays.map((holiday) => {
      let holidayDate = new Date(holiday.date);
      return {
        title: holiday.title,
        allDay: true,
        start: holidayDate,
        end: holidayDate,
        isHoliday: true,
      };
    });

    setEvents(holidaysFormatted);
  }, []);

  const eventStyleGetter = (event) => {
    if (event.isHoliday) {
      return {
        style: {
          backgroundColor: "lightblue",
          color: "black",
        },
      };
    }
    return {};
  };

  return (
    <CalendarWrapper>
      <Calendar
        localizer={localizer}
        events={events}
        views={["month"]}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={eventStyleGetter}
        popup
      />
    </CalendarWrapper>
  );
};

const CalendarWrapper = styled.div`
  height: 600px;
  margin: 50px;
  overflow: visible;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    margin: 10px;
  }
`;

export default MyCalendar;
