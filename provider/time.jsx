import React, { useState, useEffect } from "react";

const ProviderTime = ({ className }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Jakarta",
      };
      setCurrentTime(currentDate.toLocaleString("id-ID", options));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <p className={`${className}`}>{currentTime}</p>;
};

export default ProviderTime;
