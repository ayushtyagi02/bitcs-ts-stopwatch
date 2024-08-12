import React from "react";
import { formatTime } from "./StopWatchTimer";

interface LapsProps {
  laps: number[];
}

const Laps: React.FC<LapsProps> = ({ laps }) => {
  return (
    <div className="laps">
      {laps.map((lap, index) => (
        <div key={index} className="lap">
          Lap {index + 1}: {formatTime(lap)}
        </div>
      ))}
    </div>
  );
};

export default Laps;
