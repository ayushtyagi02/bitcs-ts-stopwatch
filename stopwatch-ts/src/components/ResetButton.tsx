import React from "react";

interface ResetButtonProps {
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setLaps: React.Dispatch<React.SetStateAction<number[]>>;
  running: boolean;
}

const ResetButton: React.FC<ResetButtonProps> = ({ setTime, setLaps, running }) => {
  const resetTimer = () => {
    if (!running) {
      setTime(0);
      setLaps([]);
    }
  };

  return <button onClick={resetTimer} disabled={running}>Reset</button>;
};

export default ResetButton;
