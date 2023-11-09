import React from 'react';
import { Typography, Button } from '@mui/material';
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

import Amrutha from './images/GroomGirls/Amrutha.PNG'
import Dhanusha from './images/GroomGirls/Dhanusha.png'
import Ranjitha from './images/GroomGirls/Ranjitha.PNG'
import Sahithya from './images/GroomGirls/Sahithya.PNG'
import Sangeetha from './images/GroomGirls/Sangeetha.PNG'
import Spoorthi from './images/GroomGirls/Spoorthi.PNG'
import Supriya from './images/GroomGirls/Supriya.PNG'


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

            <div style={{ marginTop: "50px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Boys Squad </Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </div>
            <div className="couple-container">
                <div className="profile-container">
                    <div className="profile">
                        <img className="circle-image" src={Harshith} alt="Bride Sister" />
                        <Typography>
                            Harshith
                        </Typography>
                    </div>
                    <div className="profile">
                        <img className="circle-image" src={Kushal} alt="Bride" />
                        <Typography >
                            Kushal
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="couple-container">
                <div className="profile-container">
                    <div className="profile">
                        <img className="circle-image" src={Madhu} alt="Bride Sister" />
                        <Typography>
                            Madhu
                        </Typography>
                    </div>
                    <div className="profile">
                        <img className="circle-image" src={Sam} alt="Bride Sister" />
                        <Typography>
                            Samuel Kiran
                        </Typography>
                    </div>
        
                </div>
            </div>

            <div className="couple-container">
                <div className="profile-container">
                <div className="profile">
                        <img className="circle-image" src={Shrinidhi} alt="Bride Sister" />
                        <Typography>
                            Shrinidhi
                        </Typography>
                    </div>
                    <div className="profile">
                        <img className="circle-image" src={Sumanth} alt="Bride Sister" />
                        <Typography>
                            Sumanth
                        </Typography>
                    </div>
                </div>
            </div>

            <div className="couple-container">
                <div className="profile-container">
                    <div className="profile">
                        <img className="circle-image" src={Sumukh} alt="Bride" />
                        <Typography >
                            Sumukh
                        </Typography>
                    </div>
                </div>
            </div>


            <div style={{ marginTop: "50px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Girls Squad </Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </div>
            <div className="couple-container">
                <div className="profile-container">
                    <div className="profile">
                        <img className="circle-image" src={Amrutha} alt="Bride Sister" />
                        <Typography>
                            Amrutha
                        </Typography>
                    </div>
                    <div className="profile">
                        <img className="circle-image" src={Dhanusha} alt="Bride" />
                        <Typography >
                            Dhanusha
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="couple-container">
                <div className="profile-container">
                    <div className="profile">
                        <img className="circle-image" src={Ranjitha} alt="Bride Sister" />
                        <Typography>
                            Ranjitha
                        </Typography>
                    </div>
                    <div className="profile">
                        <img className="circle-image" src={Sahithya} alt="Bride" />
                        <Typography >
                            Sahithya
                        </Typography>
                    </div>
                </div>
            </div>

            <div className="couple-container">
                <div className="profile-container">
                    <div className="profile">
                        <img className="circle-image" src={Sangeetha} alt="Bride Sister" />
                        <Typography>
                            Sangeetha
                        </Typography>
                    </div>
                    <div className="profile">
                        <img className="circle-image" src={Spoorthi} alt="Bride" />
                        <Typography >
                            Spoorthi
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="couple-container">
                <div className="profile-container">
                    <div className="profile">
                        <img className="circle-image" src={Supriya} alt="Bride Sister" />
                        <Typography>
                            Supriya
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}