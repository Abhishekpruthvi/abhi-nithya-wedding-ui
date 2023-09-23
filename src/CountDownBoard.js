// src/CountdownBoard.js
import React, { useState, useEffect } from 'react';
import { format, parseISO, differenceInSeconds } from 'date-fns';
import './CountDownBoard.css';
import { Typography } from '@mui/material';
import "@fontsource/great-vibes";

function CountdownBoard({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const endDate = parseISO(targetDate);
      const remainingTimeInSeconds = Math.max(0, differenceInSeconds(endDate, now));

      const hours = Math.floor(remainingTimeInSeconds / 3600);
      const minutes = Math.floor((remainingTimeInSeconds % 3600) / 60);
      const seconds = remainingTimeInSeconds % 60;

      setTimeRemaining({ hours, minutes, seconds });

      if (remainingTimeInSeconds <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const styles = {
    cursiveFontStyle: {
        fontFamily: 'Great Vibes, cursive',
      }
  }
  return (
    <div className="countdown-board">
        <Typography variant="h6" color="white">We are waiting for ...</Typography>
        <Typography variant="h3" style={styles.cursiveFontStyle} color="white">The Big Day!</Typography>
      <div className="countdown-timer">
        <div className="timer-element">
        <Typography variant="h3" style={styles.cursiveFontStyle} color="white">{timeRemaining.hours}</Typography>
          <Typography color="white">HOURS</Typography>
        </div>
        <div className="timer-element">
          <Typography variant="h3" style={styles.cursiveFontStyle} color="white">{timeRemaining.minutes}</Typography>
          <Typography color="white">MINUTES</Typography>
        </div>
        <div className="timer-element">
        <Typography variant="h3" style={styles.cursiveFontStyle} color="white">{timeRemaining.seconds}</Typography>
          <Typography color="white">SECONDS</Typography>
        </div>
      </div>
    </div>
  );
}

export default CountdownBoard;
