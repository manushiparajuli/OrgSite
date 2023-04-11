import React, { useState } from "react";

function Calendar() {
  const [date, setDate] = useState(new Date());

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  );

  const daysInMonth = lastDayOfMonth.getDate();

  const days = [];
  let dayIndex = 0;

  for (let i = 0; i < 6; i++) {
    let row = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth.getDay()) {
        row.push("");
      } else if (dayIndex < daysInMonth) {
        dayIndex++;
        row.push(dayIndex);
      }
    }
    days.push(row);
    if (dayIndex >= daysInMonth) {
      break;
    }
  }

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  };

  return (
    <div>
      <h2>{months[date.getMonth()]} {date.getFullYear()}</h2>
      <table>
        <thead>
          <tr>
            {weekdays.map((weekday) => (
              <th key={weekday}>{weekday}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((day, columnIndex) => (
                <td key={`${rowIndex}-${columnIndex}`}>{day}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
