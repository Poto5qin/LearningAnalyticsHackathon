import React from 'react';
import { schedule, getCalendarDataFromSchedule } from '../../Module/General';
import { Calender } from './index'; // index.tsx exports your Calender component

export default function MyCalender(props) {
  const calendarData = getCalendarDataFromSchedule(schedule);
  return <Calender data={calendarData} {...props} />;
}
