import React from "react";

interface StopButtonProps {
  setRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

const StopButton: React.FC<StopButtonProps> = ({ setRunning }) => {
  const stopTimer = () => setRunning(false);

  return <button onClick={stopTimer}>Stop</button>;
};

export default StopButton;
