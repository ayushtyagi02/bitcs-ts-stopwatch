import React from "react";

interface LapButtonProps {
  setLaps: React.Dispatch<React.SetStateAction<number[]>>;
  running: boolean;
  laps: number[];
  time: number;
}

const LapButton: React.FC<LapButtonProps> = ({ setLaps, running, laps, time }) => {
  const lapTimer = () => {
    if (running) {
      setLaps([...laps, time]);
    }
  };

  return <button onClick={lapTimer}>Lap</button>;
};

export default LapButton;
