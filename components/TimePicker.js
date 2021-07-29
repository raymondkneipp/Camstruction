import { useState } from "react";
import tw from "twin.macro";

const TimeItem = ({ time, selectedTime, onSelection, autoFocus }) => {
  const handleOnClick = () => {
    onSelection(time);
  };

  return (
    <button
      css={[
        tw`p-2 transition-all hocus:(outline-none ring ring-red-700 ring-opacity-50) cursor-pointer flex items-center justify-center bg-white border-gray-200 border text-gray-600 font-serif`,
        selectedTime == time && tw`bg-red-700 text-white`,
      ]}
      onClick={() => handleOnClick()}
      autoFocus={autoFocus}
    >
      {time}
    </button>
  );
};

const TimePicker = ({ timeOfQuote, handleTimeSelection }) => {
  const [selectedTime, setSelectedTime] = useState(timeOfQuote);

  const setTime = (time) => {
    setSelectedTime(time);
    handleTimeSelection(time);
  };

  return (
    <div tw="grid gap-4 mt-8 sm:grid-cols-3 items-start">
      <div tw="grid gap-2 items-start">
        <h6 tw="font-medium text-black text-center font-sans">Morning</h6>
        <TimeItem
          time={"8:00 AM"}
          selectedTime={selectedTime}
          onSelection={(t) => setTime(t)}
          autoFocus
        />

        <TimeItem
          time={"9:00 AM"}
          selectedTime={selectedTime}
          onSelection={(t) => setTime(t)}
        />

        <TimeItem
          time={"10:00 AM"}
          selectedTime={selectedTime}
          onSelection={(t) => setTime(t)}
        />

        <TimeItem
          time={"11:00 AM"}
          selectedTime={selectedTime}
          onSelection={(t) => setTime(t)}
        />
      </div>

      <div tw="grid gap-2 items-start">
        <h6 tw="font-medium text-black text-center font-sans">Afternoon</h6>
        <TimeItem
          time={"12:00 PM"}
          selectedTime={selectedTime}
          onSelection={(t) => setTime(t)}
        />

        <TimeItem
          time={"1:00 PM"}
          selectedTime={selectedTime}
          onSelection={(t) => setTime(t)}
        />

        <TimeItem
          time={"2:00 PM"}
          selectedTime={selectedTime}
          onSelection={(t) => setTime(t)}
        />

        <TimeItem
          time={"3:00 PM"}
          selectedTime={selectedTime}
          onSelection={(t) => setTime(t)}
        />

        <TimeItem
          time={"4:00 PM"}
          selectedTime={selectedTime}
          onSelection={(t) => setTime(t)}
        />
      </div>

      <div tw="grid gap-2 items-start">
        <h6 tw="font-medium text-black text-center font-sans">Evening</h6>
        <TimeItem
          time={"5:00 PM"}
          selectedTime={selectedTime}
          onSelection={(t) => setTime(t)}
        />

        <TimeItem
          time={"6:00 PM"}
          selectedTime={selectedTime}
          onSelection={(t) => setTime(t)}
        />
      </div>
    </div>
  );
};

export default TimePicker;
