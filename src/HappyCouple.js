import { Typography, Grid } from '@mui/material';
import React from 'react';
import './HappyCouple.css';
import underlineHeart from './images/underlineHeart.png'
import "@fontsource/great-vibes";
import laveloHeart from './images/laveloHeart.png'
import NithyaSingle from './images/NithyaSingle.jpg'
import AbhiSingle from './images/AbhiSingle.jpg'
import sbg1 from './images/Us/bg1.jpg'
import '@fontsource/courgette';

export default function HappyCouple() {

    const styles = {
        cursiveFontStyle: {
            fontFamily: 'Great Vibes, cursive',
        },
        mainFontStyle: {
            fontFamily: 'Courgette, sans-serif'
        },
        imageStyle: {
            display: 'block',
            margin: '0 auto',
            marginTop: '-5%',
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.35, // Adjust the opacity as needed
        },
    }

    return (
        <Grid container justifyContent="center">
            <Grid item>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginBottom: "20px"
                }} />
                <Typography variant="h2" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Happy couple</Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </Grid>
            <Grid container justifyContent="center" className="couple-container">
                <Grid container className="profile-container" padding="10px">
                    <Grid item xs={5} className="profile">
                        <img className="circle-image" src={AbhiSingle} alt="Groom" />
                        <Typography style={styles.mainFontStyle}>
                            Hey I'm Abhishek Pruthvi, a witty and a smart software engineer!<br />
                            Road tripping in my enfield makes me happy  and friends along makes it adventurous!
                            <br />
                            PS : The website you are looking at is developed by me 🤭
                        </Typography>
                    </Grid>
                    <Grid item xs={2} alignSelf="start" justifyContent="center" marginTop="50px" className="heart-container">
                        <img className="heart" src={laveloHeart} alt="Heart" />
                    </Grid>
                    <Grid item xs={5} className="profile">
                        <img className="circle-image" src={NithyaSingle} alt="Bride" />
                        <Typography style={styles.mainFontStyle}>
                            Hey I'm Nithya, a doctor by profession and a dancer by passion! Kinda introverted simple and fun loving girl
                            Who’s always on toe’s to do things that interests me
                            As sweettooth person I love to bake yum treats to make everyone’s day more sweeter also i love love love to dress up 🤭
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginBottom: "20px"
                }} />
                <Typography variant="h2" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> What made us fall for each other!</Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px",
                    marginBottom:"40px"
                }} />
                <Grid item container>
                    <img src={sbg1} alt="Background" style={styles.imageStyle} />
                    <Grid item className="text-styling">

                        <Typography lineHeight="30px" style={styles.mainFontStyle}>
                            <h2>Nithya</h2>
                        As we started our chat I felt a spark instantly and was really excited to meet him, his sense of humour and the fact that he’s very open about each and everything blew me up and after a few days of chats n calls we finally met I spontaneously felt he was the one with whom I want to spend the rest of my life , he was what I was looking for
                        And each and everyday as we got closer, I realised he is an updated version of my dad! And what more could I ask for rite?
                    </Typography>
                    </Grid>

                    <img src={underlineHeart} style={{
                        display: 'block',
                        margin: '0 auto',
                        marginTop: "-40px"
                    }} />
                    <Grid className="text-styling">
                        <Typography lineHeight="30px" style={styles.mainFontStyle}>
                            <h2>Abhi</h2>
                        When we started talking I tried to impress her in several ways😂 but little did I know that she already had fallen for me ! She’s a simple , innocent girl with a child’s heart and I believed she would be her best as my better half , a few days later i was awaiting her response and it was final yes from her side for the win!
                    </Typography>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}