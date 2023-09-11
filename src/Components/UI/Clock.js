import React, { useState, useEffect } from "react";

const Clock = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2023-09-31T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        clearInterval(interval);
        return;
      }

      // Calculate days, hours, minutes, and seconds
      const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hoursRemaining = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesRemaining = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secondsRemaining = Math.floor(
        (timeDifference % (1000 * 60)) / 1000
      );

      setDays(daysRemaining);
      setHours(hoursRemaining);
      setMinutes(minutesRemaining);
      setSeconds(secondsRemaining);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const clockData = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];

  return (
    <div className="clock_wrapper d-flex align-item-center gap-3 my-4 ">
      {clockData.map((item, index) => (
        <div key={index}>
          <div className="clock_data text-center text-white">
            <h1 className="fs-2">{item.value}</h1>
            <h5 className="fs-6">{item.label}</h5>
          </div>
          <span
            className="text-white mt-2"
            style={{ marginTop: "-47px !important", display: "block" }}
          >
            :
          </span>
        </div>
      ))}
    </div>
  );
};

export default Clock;
