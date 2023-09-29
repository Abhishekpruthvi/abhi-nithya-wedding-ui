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
                <Typography variant="h2" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Our Story</Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </div>

            <div style={{ marginTop: "30px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67">First Chat</Typography>
            </div>
            <div className="text-styling">
                <Typography lineHeight="30px">
                    Tuesday, 7th March 2023 <br />
                </Typography>
            </div>

            <div style={{ marginTop: "30px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67">First Call</Typography>
            </div>
            <div className="text-styling">
                <Typography lineHeight="30px">
                    Thursday, 9th March 2023 <br />
                </Typography>
            </div>

            <div style={{ marginTop: "30px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67">First Date</Typography>
            </div>
            <div className="text-styling">
                <Typography lineHeight="30px">
                    Tuesday, 7th March 2023 <br />
                    Mysore <br />
                </Typography>
            </div>

            <div style={{ marginTop: "30px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67">First Rose</Typography>
            </div>
            <div className="text-styling">
                <Typography lineHeight="30px">
                    Saturday, 8th April 2023 <br />
                    Mysore <br />
                </Typography>
            </div>


        </div>
    )
}