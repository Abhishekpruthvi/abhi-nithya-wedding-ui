import React from 'react';
import { Typography, Grid } from '@mui/material';
import underlineHeart from './images/underlineHeart.png'
import '@fontsource/courgette';


const styles = {
    cursiveFontStyle: {
        fontFamily: 'Great Vibes,cursive',
    },
    mainFontStyle: {
        fontFamily: 'Courgette, sans-serif'
    }
}

export default function Welcome() {
    return (
        <Grid container justifyContent="center">
            <Grid item>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginBottom: "20px"
                }} />
                <Typography variant="h2" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Welcome </Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </Grid>
            <Grid className="text-styling">
                <Typography lineHeight="30px" style={styles.mainFontStyle}>
                    Hello there! welcome to our page thanks for taking time to check in!
                    Here we take you through our wedding story hop on  for a quick and cool visual retreat!
                </Typography>
            </Grid>
        </Grid>
    )
}