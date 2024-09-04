import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [isStart, seIsStart] = useState(false);

  useEffect(() => {
    let timerId;
    if (isStart) {
      timerId = setInterval(() => setTime(time + 1), 1000);
    }
    return () => clearInterval(timerId);
  }, [isStart, time]);

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  const startStop = () => {
    seIsStart(!isStart);
  };

  const reset = () => {
    setTime(0);
  };

  return (
    <div className="App">
      <div
        className="row mt-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="card" style={{ width: 500 }}>
          <div className="card-body">
            <h5 className="card-title">Stopwatch</h5>

            <p className="card-text">
              Time: {minutes}:{seconds < 10 ? `0${seconds}` : `${seconds}`}
            </p>
            <button className="btn btn-sm btn-success ml-5" onClick={startStop}>
              {isStart ? "Stop" : "Start"}
            </button>
            <button className="btn btn-sm btn-warning mx-2" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
