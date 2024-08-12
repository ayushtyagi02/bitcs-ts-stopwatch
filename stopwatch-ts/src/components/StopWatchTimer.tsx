import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const formatTime = (time: number): string => {
  const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
  const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
  const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
  const hours = `0${Math.floor(time / 3600000)}`.slice(-2);
  return `${hours}:${minutes}:${seconds}.${getMilliseconds}`;
};

interface StopWatchTimerProps {
  time: number;
}

const StopWatchTimer: React.FC<StopWatchTimerProps> = ({ time }) => {
  return <div className="timer">{formatTime(time)}</div>;
};

export default StopWatchTimer;
