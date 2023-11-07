import React, { useEffect, useRef , useState} from 'react'
import PreweddingStudioTeaser from './videos/PreweddingStudioTeaser.mp4'
import { Typography, Button } from '@mui/material';
import "@fontsource/great-vibes";
import underlineHeart from './images/underlineHeart.png'
import './TextStyling.css'

const styles = {
    cursiveFontStyle: {
        fontFamily: 'Great Vibes,cursive',
    }
}

export default function PreWeddingStudioTeaser() {
    const videoRef = useRef(null);

    useEffect(() => {
        // This code will run when the component mounts
        videoRef.current.load(); // Load the video
    }, []); // The empty dependency array ensures this effect runs only once when the component mounts


    return (
        <div style={{ marginTop: "50px" }}>
            <div>
            <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginBottom: "20px"
                }} />
                <Typography variant="h2" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Prewedding Teaser Part-1 </Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </div>

            <video width="100%" ref={videoRef} controls autoPlay muted playsInline loop>
                <source src={PreweddingStudioTeaser} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>

    )
}