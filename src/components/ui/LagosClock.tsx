"use client";

import { useEffect, useState } from "react";

// Live clock for Enugu (Africa/Lagos, WAT). Empty on the server so it never mismatches.
export default function LagosClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Lagos",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const tick = () => setTime(format.format(new Date()));
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span>
      Local time: Enugu [WAT] <span className="tabular-nums">{time}</span>
    </span>
  );
}
