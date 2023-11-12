import React from 'react';
import { Typography, Button, Grid } from '@mui/material';
import underlineHeart from './images/underlineHeart.png'
import './squad.css'
import AbhiSingle from './images/AbhiSingle.JPG'
import Harshith from './images/GroomBoys/Harshith.JPG'
import Kushal from './images/GroomBoys/Kushal.PNG'
import Madhu from './images/GroomBoys/Madhu.JPG'
import Shrinidhi from './images/GroomBoys/Shrinidhi.PNG'
import Sumukh from './images/GroomBoys/Sumukh.PNG'
import Sumanth from './images/GroomBoys/Sumanth.png'
import Sam from './images/GroomBoys/Sam.jpeg'
import Upendra from './images/GroomBoys/Upendra.jpg'

import Amrutha from './images/GroomGirls/Amrutha.PNG'
import Dhanusha from './images/GroomGirls/Dhanusha.png'
import Ranjitha from './images/GroomGirls/Ranjitha.PNG'
import Sahithya from './images/GroomGirls/Sahithya.PNG'
import Sangeetha from './images/GroomGirls/Sangeetha.PNG'
import Spoorthi from './images/GroomGirls/Spoorthi.PNG'
import Supriya from './images/GroomGirls/Supriya.PNG'

import '@fontsource/courgette';


const styles = {
    cursiveFontStyle: {
        fontFamily: 'Great Vibes,cursive',
    },
    mainFontStyle: {
        fontFamily: 'Courgette, sans-serif'
    }
}
export default function GroomSquad() {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginBottom: "20px"
                }} />
                <Typography variant="h2" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Groom Squad </Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </Grid>

            <Grid item xs={12} style={{ marginTop: "50px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Boys Squad </Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </Grid>
            <Grid item className="couple-container">
                <Grid className="profile-container">
                    <Grid className="profile">
                        <img className="circle-image" src={Harshith} alt="Bride Sister" />
                        <Typography style={styles.mainFontStyle}>
                            Harshith
                        </Typography>
                    </Grid>
                    <Grid className="profile">
                        <img className="circle-image" src={Kushal} alt="Bride" />
                        <Typography style={styles.mainFontStyle}>
                            Kushal
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className="couple-container">
                <Grid className="profile-container">
                    <Grid className="profile">
                        <img className="circle-image" src={Madhu} alt="Bride Sister" />
                        <Typography style={styles.mainFontStyle}>
                            Madhu
                        </Typography>
                    </Grid>
                    <Grid className="profile">
                        <img className="circle-image" src={Sam} alt="Bride Sister" />
                        <Typography style={styles.mainFontStyle}>
                            Samuel Kiran
                        </Typography>
                    </Grid>

                </Grid>
            </Grid>

            <Grid item className="couple-container">
                <Grid className="profile-container">
                    <Grid className="profile">
                        <img className="circle-image" src={Shrinidhi} alt="Bride Sister" />
                        <Typography style={styles.mainFontStyle}>
                            Shrinidhi
                        </Typography>
                    </Grid>
                    <Grid className="profile">
                        <img className="circle-image" src={Sumanth} alt="Bride Sister" />
                        <Typography style={styles.mainFontStyle}>
                            Sumanth
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item className="couple-container">
                <Grid className="profile-container">
                    <Grid className="profile">
                        <img className="circle-image" src={Sumukh} alt="Bride" />
                        <Typography style={styles.mainFontStyle}>
                            Sumukh
                        </Typography>
                    </Grid>
                    <Grid className="profile">
                        <img className="circle-image" src={Upendra} alt="Bride" />
                        <Typography style={styles.mainFontStyle}>
                            Upendra
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>


            <Grid item xs={12} style={{ marginTop: "50px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Girls Squad </Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </Grid>
            <Grid item className="couple-container">
                <Grid className="profile-container">
                    <Grid className="profile">
                        <img className="circle-image" src={Amrutha} alt="Bride Sister" />
                        <Typography style={styles.mainFontStyle}>
                            Amrutha
                        </Typography>
                    </Grid>
                    <Grid className="profile">
                        <img className="circle-image" src={Dhanusha} alt="Bride" />
                        <Typography style={styles.mainFontStyle}>
                            Dhanusha
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className="couple-container">
                <Grid className="profile-container">
                    <Grid className="profile">
                        <img className="circle-image" src={Ranjitha} alt="Bride Sister" />
                        <Typography style={styles.mainFontStyle}>
                            Ranjitha
                        </Typography>
                    </Grid>
                    <Grid className="profile">
                        <img className="circle-image" src={Sahithya} alt="Bride" />
                        <Typography style={styles.mainFontStyle}>
                            Sahithya
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item className="couple-container">
                <Grid className="profile-container">
                    <Grid className="profile">
                        <img className="circle-image" src={Sangeetha} alt="Bride Sister" />
                        <Typography style={styles.mainFontStyle}>
                            Sangeetha
                        </Typography>
                    </Grid>
                    <Grid className="profile">
                        <img className="circle-image" src={Spoorthi} alt="Bride" />
                        <Typography style={styles.mainFontStyle}>
                            Spoorthi
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className="couple-container">
                <Grid className="profile-container">
                    <Grid className="profile">
                        <img className="circle-image" src={Supriya} alt="Bride Sister" />
                        <Typography style={styles.mainFontStyle} marginLeft="50px">
                            Supriya
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}