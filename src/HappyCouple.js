import { Typography } from '@mui/material';
import React from 'react';
import './HappyCouple.css';
import underlineHeart from './images/underlineHeart.png'
import "@fontsource/great-vibes";
import laveloHeart from './images/laveloHeart.png'
import NithyaSingle from './images/NithyaSingle.JPG'
import AbhiSingle from './images/AbhiSingle.JPG'

export default function HappyCouple() {

    const styles = {
        cursiveFontStyle: {
            fontFamily: 'Great Vibes, cursive',
        }
    }

    return (
        <div>
            <div>
                <Typography variant="h2" align="center" style={styles.cursiveFontStyle} color="#5e9a8d"> Happy couple</Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </div>
            <div className="couple-container">
                <div className="profile-container">
                    <div className="profile">
                        <img className="circle-image" src={AbhiSingle} alt="Groom" />
                        <Typography>Hi I am Abhishek Pruthvi. I'm a Software Engineer working in a product based 
                            company as a FullStack Developer!.
                            Infact the website you are looking at is developed by me!
                        </Typography>
                    </div>
                    <div className="heart-container">
                        <img className="heart" src={laveloHeart} alt="Heart" />
                    </div>
                    <div className="profile">
                        <img className="circle-image" src={NithyaSingle} alt="Bride" />
                        <Typography >Hi I am Nithya. I have recenlty completed BAMS, looking forward to become a very good Doctor.
                        And especially very good Wife!</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}