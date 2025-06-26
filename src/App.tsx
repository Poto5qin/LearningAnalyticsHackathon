// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from 'react';
import { schedule, getCalendarDataFromSchedule } from './Module/General'; // adjust path if needed
import { MyCalender } from './containers/calender'; 

export default function App() {
  const calendarData = getCalendarDataFromSchedule(schedule);
  return (
    <div>
      <h1>NTU Hackathon Calendar</h1>
      <Calender data={calendarData} />
    </div>
  );
}

