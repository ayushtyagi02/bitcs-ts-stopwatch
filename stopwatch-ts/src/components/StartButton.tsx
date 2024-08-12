import React from "react";

interface StartButtonProps {
  setRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartButton: React.FC<StartButtonProps> = ({ setRunning }) => {
  const startTimer = () => setRunning(true);

  return <button onClick={startTimer}>Start</button>;
};

export default StartButton;
