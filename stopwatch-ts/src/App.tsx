import { useState, useEffect } from "react";
import "./App.css";
import Laps from "./components/laps";
import StopWatchTimer from "./components/StopWatchTimer";
import StartButton from "./components/StartButton";
import StopButton from "./components/StopButton";
import ResetButton from "./components/ResetButton";
import LapButton from "./components/LapButton";

const App: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running && timer) {
      clearInterval(timer);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [running]);

  return (
    <div className="App">
      <StopWatchTimer time={time} />
      <div className="buttons">
        <StartButton setRunning={setRunning} />
        <StopButton setRunning={setRunning} />
        <LapButton setLaps={setLaps} running={running} laps={laps} time={time} />
        <ResetButton setLaps={setLaps} setTime={setTime} running={running} />
      </div>
      <Laps laps={laps} />
    </div>
  );
};

export default App;
