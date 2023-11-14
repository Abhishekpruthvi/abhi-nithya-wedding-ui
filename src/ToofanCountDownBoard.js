// src/CountdownBoard.js
import React, { useState, useEffect, useRef } from 'react';
import { format, parseISO, differenceInSeconds } from 'date-fns';
import './CountDownBoard.css';
import { Typography, Grid } from '@mui/material';
import "@fontsource/great-vibes";
import ConfettiExplosion from 'react-confetti-explosion';

function ToofanCountdownBoard({ targetDate }) {
    const [isExploding, setIsExploding] = React.useState(false);
    const [infinite, setInfinite] = React.useState(false);

    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
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
                setIsExploding(true)
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
        <Grid className="countdown-board" justifyContent="center">
            {/* <Typography variant="h6" color="white">Get Ready To Witness The Toofan Soon</Typography> */}
            <Typography variant="h4" style={styles.cursiveFontStyle} color="white">Get Ready To Witness The Toofan Soon!</Typography>
            <Grid className="countdown-timer">
                {isExploding && infinite && <ConfettiExplosion duration="2000" />}

                <Grid className="timer-element">
                    <Typography variant="h5" style={styles.cursiveFontStyle} color="white">{timeRemaining.days}</Typography>
                    <Typography fontSize="12px" color="white">DAYS</Typography>
                </Grid>
                <Grid className="timer-element">
                    <Typography variant="h5" style={styles.cursiveFontStyle} color="white">{timeRemaining.hours}</Typography>
                    <Typography fontSize="12px" color="white">HOURS</Typography>
                </Grid>
                <Grid className="timer-element">
                    <Typography variant="h5" style={styles.cursiveFontStyle} color="white">{timeRemaining.minutes}</Typography>
                    <Typography fontSize="12px" color="white">MINUTES</Typography>
                </Grid>
                <Grid className="timer-element">
                    <Typography variant="h5" style={styles.cursiveFontStyle} color="white">{timeRemaining.seconds}</Typography>
                    <Typography fontSize="12px" color="white">SECONDS</Typography>
                </Grid>
                {isExploding && infinite && <ConfettiExplosion duration="2000" />}
            </Grid>
        </Grid>
    );
}

export default ToofanCountdownBoard;
