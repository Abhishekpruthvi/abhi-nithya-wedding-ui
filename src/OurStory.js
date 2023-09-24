import React from 'react';
import { Typography, Button } from '@mui/material';
import "@fontsource/great-vibes";
import underlineHeart from './images/underlineHeart.png'
import './TextStyling.css'

export default function OurStory() {
    const styles = {
        cursiveFontStyle: {
            fontFamily: 'Great Vibes,cursive',
        }
    }
    return(
        <div style={{ marginTop: "50px" }}>
            <div>
            <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginBottom: "20px"
                }} />
                <Typography variant="h2" align="center" style={styles.cursiveFontStyle} color="#5e9a8d"> Our Story</Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </div>

            <div style={{ marginTop: "30px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#5e9a8d">First Meet</Typography>
            </div>
            <div className="text-styling">
                <Typography lineHeight="30px">
                    Sunday, 19th March 2023, 12:00 PM <br />
                    Mysore <br />
                </Typography>
            </div>


        </div>
    )
}