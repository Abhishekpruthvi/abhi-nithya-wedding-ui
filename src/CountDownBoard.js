// src/CountdownBoard.js
import React, { useState, useEffect } from 'react';
import { format, parseISO, differenceInSeconds } from 'date-fns';
import './CountDownBoard.css';
import { Typography, Grid } from '@mui/material';
import "@fontsource/great-vibes";
import ConfettiExplosion from 'react-confetti-explosion';

function CountdownBoard({ targetDate }) {
    const [isExploding, setIsExploding] = React.useState(false);
    const [infinite, setInfinite] = React.useState(false);

    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const endDate = parseISO(targetDate);
            const remainingTimeInSeconds = Math.max(0, differenceInSeconds(endDate, now));

            const days = Math.floor(remainingTimeInSeconds / 86400)
            const hours = Math.floor((remainingTimeInSeconds % 86400) / 3600);
            const minutes = Math.floor((remainingTimeInSeconds % 3600) / 60);
            const seconds = remainingTimeInSeconds % 60;

            setTimeRemaining({ days, hours, minutes, seconds });

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

    useEffect(() => {
        const delay = 1000; // 1000 milliseconds = 1 second

        const timerId = setTimeout(() => {
            // Your code or side effect after the delay
            console.log('After 1 second');
            setInfinite(!infinite)
        }, delay);


        // Cleanup function to clear the timer if the component unmounts or if the effect re-runs
        return () => clearTimeout(timerId);
    }, [infinite]);

    return (
        <Grid className="countdown-board">
            <Typography variant="h6" color="white">We are waiting for ...</Typography>
            <Typography variant="h3" style={styles.cursiveFontStyle} color="white">The Big Day!</Typography>
            <Grid className="countdown-timer">
                {isExploding && infinite && <ConfettiExplosion duration="2000" />}
                <Grid className="timer-element">
                    <Typography variant="h4" style={styles.cursiveFontStyle} color="white">{timeRemaining.days}</Typography>
                    <Typography fontSize="15px" color="white">DAYS</Typography>
                </Grid>
                <Grid className="timer-element">
                    <Typography variant="h4" style={styles.cursiveFontStyle} color="white">{timeRemaining.hours}</Typography>
                    <Typography fontSize="15px" color="white">HOURS</Typography>
                </Grid>
                <Grid className="timer-element">
                    <Typography variant="h4" style={styles.cursiveFontStyle} color="white">{timeRemaining.minutes}</Typography>
                    <Typography fontSize="15px" color="white">MINUTES</Typography>
                </Grid>
                <Grid className="timer-element">
                    <Typography variant="h4" style={styles.cursiveFontStyle} color="white">{timeRemaining.seconds}</Typography>
                    <Typography fontSize="15px" color="white">SECONDS</Typography>
                </Grid>
                {isExploding && infinite && <ConfettiExplosion duration="2000" />}
            </Grid>
        </Grid>
    );
}

export default CountdownBoard;
