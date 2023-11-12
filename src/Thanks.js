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

export default function Thanks() {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginBottom: "20px"
                }} />
                <Typography variant="h2" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Thank You! </Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </Grid>
            <Grid item className="text-styling">
                <Typography lineHeight="30px" style={styles.mainFontStyle}>
                    Thanks for visiting our site! , See you at our wedding
                </Typography>
            </Grid>
        </Grid>
    )
}