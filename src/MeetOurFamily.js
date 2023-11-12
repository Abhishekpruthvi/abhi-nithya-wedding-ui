import React from 'react';
import { Typography, Grid } from '@mui/material';
import "@fontsource/great-vibes";
import underlineHeart from './images/underlineHeart.png'
import './TextStyling.css'
import NithyasFam from './images/Family/NithyasFam.JPG'
import AbhisFam from './images/Family/AbhisFam.JPG'

export default function MeetOurFamily() {

    const styles = {
        cursiveFontStyle: {
            fontFamily: 'Great Vibes, cursive',
        },
        mainFontStyle: {
            fontFamily: 'Courgette, sans-serif'
        },
        imageContainer: {
           position: 'relative',
            overflow: 'hidden', // Ensure that the box shadow doesn't get cut off
            borderRadius: '50px', // Border radius
            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.3)', // Box shadow
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Transition for hover effect
        },
        imageStyle: {
            width: '100%',
            display: 'block',
            margin: '0 auto',
        }
    }
    return (
        <Grid container justifyContent="center" style={{ marginTop: "50px" }}>
            <Grid item xs={12}>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginBottom: "20px"
                }} />
                <Typography variant="h2" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Meet Our Family</Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </Grid>
            <Grid item xs={12} style={{ marginTop: "30px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67">Nithya's Family</Typography>
            </Grid>
            <Grid item xs={12} md={6} style={styles.imageContainer}>
                <img src={NithyasFam} style={styles.imageStyle} />
            </Grid>


            <Grid item xs={12} style={{ marginTop: "30px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67">Abhi's Family</Typography>
            </Grid>

            <Grid item xs={12} md={6} style={styles.imageContainer}>
                <img src={AbhisFam} style={styles.imageStyle} />
            </Grid>

        </Grid>
    )
}