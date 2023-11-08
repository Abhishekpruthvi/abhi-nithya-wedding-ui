import React from 'react';
import { Typography, Button } from '@mui/material';
import underlineHeart from './images/underlineHeart.png'
import './squad.css'
import AbhiSingle from './images/AbhiSingle.JPG'

const styles = {
    cursiveFontStyle: {
        fontFamily: 'Great Vibes,cursive',
    }
}
export default function GroomSquad() {
    return (
        <div>
            <div>
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
            </div>

            <div className="couple-container">
                <div className="profile-container">
                    <div className="profile">
                        <img className="circle-image" src={AbhiSingle} alt="Groom" />
                        <Typography>
                            Abhishek Pruthvi
                        </Typography>
                    </div>
                    <div className="profile">
                        <img className="circle-image" src={AbhiSingle} alt="Bride" />
                        <Typography >
                            Abhishek Pruthvi
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}