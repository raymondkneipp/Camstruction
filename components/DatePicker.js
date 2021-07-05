import { useState } from "react";
import tw from "twin.macro";

const today = new Date();

const getWeekday = (date) => {
  switch (date.getDay()) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Undefined";
  }
};

const getMonthName = (date) => {
  switch (date.getMonth()) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
  }
};

const ordinal_suffix_of = (i) => {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return "st";
  }
  if (j == 2 && k != 12) {
    return "nd";
  }
  if (j == 3 && k != 13) {
    return "rd";
  }
  return "th";
};

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const Day = ({ date, handleDateSelection, selected }) => {
  const handleOnClick = (date) => {
    handleDateSelection(date);
  };

  return (
    <button
      css={[
        tw`p-2 sm:h-16 md:h-16 transition-all hocus:(outline-none ring ring-blue-700 ring-opacity-50) cursor-pointer flex items-start bg-white border-gray-200 border text-gray-600`,
        selected && tw`bg-blue-700 text-white`,
      ]}
      onClick={() => handleOnClick(date)}
    >
      {date.getDate()}
    </button>
  );
};

const EmptyDay = () => <div tw="bg-gray-200 border cursor-not-allowed"></div>;

const Calendar = ({ date, handleDateSelection, dateOfQuote }) => {
  const [selected, setSelected] = useState(dateOfQuote);

  let totalDays = 20;
  var currentDay = date;

  const handleOnClick = (date) => {
    setSelected(date);
    handleDateSelection(date);
  };

  return (
    <div tw="grid grid-cols-5 gap-2">
      <h5 tw="font-medium text-black text-center">Mon</h5>
      <h5 tw="font-medium text-black text-center">Tue</h5>
      <h5 tw="font-medium text-black text-center">Wed</h5>
      <h5 tw="font-medium text-black text-center">Thu</h5>
      <h5 tw="font-medium text-black text-center">Fri</h5>

      {date.getDay() != 6 && date.getDay() != 5 && (
        <>
          {[...Array(date.getDay())].map((e, i) => (
            <EmptyDay key={i} />
          ))}
        </>
      )}

      {[...Array(totalDays)].map((e, i) => {
        currentDay = addDays(currentDay, 1);

        if (currentDay.getDay() == 0) {
          currentDay = addDays(currentDay, 1);
        } else if (currentDay.getDay() == 6) {
          currentDay = addDays(currentDay, 2);
        }

        return (
          <Day
            date={currentDay}
            handleDateSelection={handleOnClick}
            key={i}
            selected={selected && selected.getDate() == currentDay.getDate()}
          />
        );
      })}

      {date.getDay() != 6 && date.getDay() != 5 && date.getDay() != 0 && (
        <>
          {[...Array(5 - date.getDay())].map((e, i) => (
            <EmptyDay key={i} />
          ))}
        </>
      )}
    </div>
  );
};

const DatePicker = ({ handleDateSelection, dateOfQuote }) => {
  return (
    <div>
      <h4 tw="font-medium text-xl text-center my-8">
        {getWeekday(today)}, {getMonthName(today)} {today.getDate()}
        <sup>{ordinal_suffix_of(today.getDate())}</sup>
      </h4>

      <Calendar
        date={today}
        handleDateSelection={handleDateSelection}
        dateOfQuote={dateOfQuote}
      />
    </div>
  );
};

export default DatePicker;
