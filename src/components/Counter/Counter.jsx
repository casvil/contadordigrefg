import React from "react";

import "./counter.css";

function formatSeconds(seconds) {
  var date = new Date(1970, 0, 1);
  date.setSeconds(seconds);
  return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
}

export const Counter = ({ count }) => {
  console.log("🚀 ~ file: Counter.jsx ~ line 12 ~ Counter ~ count", count);
  const [counter, setCounter] = React.useState(count);

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  React.useEffect(() => {
    setCounter(count);
  }, [count]);

  return <div className="App-counter">{formatSeconds(counter)}</div>;
};
