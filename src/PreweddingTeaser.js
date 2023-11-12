import React, { useEffect, useRef, useState } from 'react'
import PreweddingTeaser from './videos/PreweddingTeaser.mp4'
import { Typography, Grid } from '@mui/material';
import "@fontsource/great-vibes";
import underlineHeart from './images/underlineHeart.png'
import './TextStyling.css'

const styles = {
    cursiveFontStyle: {
        fontFamily: 'Great Vibes,cursive',
    }
}

export default function PreWeddingTeaser() {

    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            // Load the video when the component mounts
            video.load();
        }

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust the threshold as needed (percentage of video in view)
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Video is in view, play
                    video.play();
                } else {
                    // Video is out of view, pause
                    video.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (video) {
            observer.observe(video);
        }

        return () => {
            if (video) {
                observer.unobserve(video);
            }
        };
    }, []); // Run only once when the component mounts

    return (
        <Grid container justifyContent="center" style={{ marginTop: "50px", zIndex: "999" }}>
            <Grid item>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginBottom: "20px"
                }} />
                <Typography variant="h2" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Prewedding Teaser Part-2 </Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </Grid>

            <video width="100%" ref={videoRef} controls>
                <source src={PreweddingTeaser} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </Grid>

    )
}