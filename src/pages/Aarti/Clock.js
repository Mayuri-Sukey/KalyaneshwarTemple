import React, { useEffect, useState } from "react";
import "./aarti.css";
import img1 from "../../assets/saibabaaudio.png";

const Clock = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const zeroPadding = (num, digit) => {
      let zero = "";
      for (let i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    };

    const updateTime = () => {
      const cd = new Date();
      const hours = cd.getHours();
      const minutes = zeroPadding(cd.getMinutes(), 2);
      const seconds = zeroPadding(cd.getSeconds(), 2);
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12; // Convert to 12-hour format
      setTime(
        `${zeroPadding(formattedHours, 2)}:${minutes}:${seconds} ${ampm}`
      );
      setDate(
        `${zeroPadding(cd.getDate(), 2)}-${zeroPadding(
          cd.getMonth() + 1,
          2
        )}-${zeroPadding(cd.getFullYear(), 4)} ${week[cd.getDay()]}`
      );
    };

    const timerID = setInterval(updateTime, 1000);
    updateTime();

    return () => clearInterval(timerID);
  }, []);

  return (
    <div id="aarti-clock">
      <p className="aarti-date">
        <span>Sai Aarti</span>
      </p>

      <div className="aarti-time">
        <div>
          {" "}
          <img src={img1} />
        </div>
        <div>
          <span>{date}</span>
          <br></br>
          <span> {time}</span>
        </div>
        <div>
          {" "}
          <img src={img1} />
        </div>
      </div>
    </div>
  );
};

export default Clock;
