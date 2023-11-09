import React from 'react';
import { Typography, Button } from '@mui/material';
import underlineHeart from './images/underlineHeart.png'
import NithyaSingle from './images/NithyaSingle.JPG'
import Navya from './images/BrideSisters/Navya.JPG'
import Keerthana from './images/BrideSisters/keeru.JPG'
import Thanu from './images/BrideSisters/tanu.JPG'
import Jagath from './images/BrideBrothers/Jagath.JPG'
import Jayanth from './images/BrideBrothers/jay.JPG'
import Likith from './images/BrideBrothers/liki.JPG'
import Nishanth from './images/BrideBrothers/Nishanth.JPG'
import Nishchitha from './images/BridesMaid/nischi.JPG'
import Nisha from './images/BridesMaid/nisha.JPG'
import PoojaBs from './images/BridesMaid/poojabs.JPG'
import PoojaDs from './images/BridesMaid/poojads.JPG'
import Rachana from './images/BridesMaid/rachu.JPG'
import Sufiya from './images/BridesMaid/sufi.JPG'
import Vidya from './images/BridesMaid/vidya.JPG'

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

            <div style={{ marginTop: "50px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Sisters Squad </Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </div>

            <div className="couple-container">
                <div className="profile-container">
                    <div className="profile">
                        <img className="circle-image" src={Navya} alt="Bride Sister" />
                        <Typography>
                            Navya Prabhu
                        </Typography>
                    </div>
                    <div className="profile">
                        <img className="circle-image" src={Keerthana} alt="Bride" />
                        <Typography >
                            Keerthana
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="couple-container">
                <div className="profile-container">
                    <div className="profile">
                        <img className="circle-image" src={Thanu} alt="Bride Sister" />
                        <Typography>
                            Thanu
                        </Typography>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: "50px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Brothers Squad </Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </div>
            <div className="couple-container">
                <div className="profile-container">
                    <div className="profile">
                        <img className="circle-image" src={Jagath} alt="Bride Sister" />
                        <Typography>
                            Jagath
                        </Typography>
                    </div>
                    <div className="profile">
                        <img className="circle-image" src={Jayanth} alt="Bride" />
                        <Typography >
                            Jayanth
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="couple-container">
                <div className="profile-container">
                    <div className="profile">
                        <img className="circle-image" src={Likith} alt="Bride Sister" />
                        <Typography>
                            Likith
                        </Typography>
                    </div>
                    <div className="profile">
                        <img className="circle-image" src={Nishanth} alt="Bride" />
                        <Typography >
                            Nishanth
                        </Typography>
                    </div>
                </div>
            </div>

            <div style={{ padding: "20px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Brides Maid aka Besties </Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </div>

            <div className="couple-container">
                <div className="profile-container">
                    <div className="profile">
                        <img className="circle-image" src={Sufiya} alt="Bride Sister" />
                        <Typography>
                            Sufiya
                        </Typography>
                    </div>
                    <div className="profile">
                        <img className="circle-image" src={PoojaBs} alt="Bride" />
                        <Typography >
                            Pooja B S
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="couple-container">
                <div className="profile-container">
                    <div className="profile">
                        <img className="circle-image" src={Nishchitha} alt="Bride Sister" />
                        <Typography>
                            Nishchitha
                        </Typography>
                    </div>
                    <div className="profile">
                        <img className="circle-image" src={Nisha} alt="Bride" />
                        <Typography >
                            Nisha
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="couple-container">
                <div className="profile-container">
                    <div className="profile">
                        <img className="circle-image" src={Vidya} alt="Bride Sister" />
                        <Typography>
                            Vidya
                        </Typography>
                    </div>
                    <div className="profile">
                        <img className="circle-image" src={Rachana} alt="Bride" />
                        <Typography >
                            Rachana
                        </Typography>
                    </div>
                </div>
            </div>

            <div className="couple-container">
                <div className="profile-container">
                    <div className="profile">
                        <img className="circle-image" src={PoojaDs} alt="Bride Sister" />
                        <Typography>
                            Pooja D S
                        </Typography>
                    </div>
                </div>
            </div>

        </div>
    )
}