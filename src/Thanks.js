import React from 'react';
import { Typography, Button } from '@mui/material';
import underlineHeart from './images/underlineHeart.png'


const styles = {
    cursiveFontStyle: {
        fontFamily: 'Great Vibes,cursive',
    }
}

export default function Thanks() {
    return (
        <div>
            <div>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginBottom: "20px"
                }} />
                <Typography variant="h2" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Thanks </Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </div>
            <div className="text-styling">
                <Typography lineHeight="30px">
                    Thanks for visiting our site! , See you in the event
                </Typography>
            </div>
        </div>
    )
}