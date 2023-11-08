import React from 'react';
import { Typography, Button } from '@mui/material';
import underlineHeart from './images/underlineHeart.png'
import NithyaSingle from './images/NithyaSingle.JPG'

const styles = {
    cursiveFontStyle: {
        fontFamily: 'Great Vibes,cursive',
    }
}
export default function BrideSquad() {
    return (
        <div>
            <div>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginBottom: "20px"
                }} />
                <Typography variant="h2" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Bride Squad </Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </div>

            <div className="couple-container">
                <div className="profile-container">
                    <div className="profile">
                        <img className="circle-image" src={NithyaSingle} alt="Groom" />
                        <Typography>
                            Nithya
                        </Typography>
                    </div>
                    <div className="profile">
                        <img className="circle-image" src={NithyaSingle} alt="Bride" />
                        <Typography >
                            Nithya
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}