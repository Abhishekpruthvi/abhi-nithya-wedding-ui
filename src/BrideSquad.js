import React from 'react';
import { Typography, Grid } from '@mui/material';
import underlineHeart from './images/underlineHeart.png'
import NithyaSingle from './images/NithyaSingle.JPG'
import Navya from './images/BrideSisters/Navya.JPG'
import Keerthana from './images/BrideSisters/keeru.jpg'
import Thanu from './images/BrideSisters/tanu.jpg'
import Jagath from './images/BrideBrothers/Jagath.jpg'
import Jayanth from './images/BrideBrothers/jay.JPG'
import Likith from './images/BrideBrothers/liki.JPG'
import Nishanth from './images/BrideBrothers/Nishanth.JPG'
import Nishchitha from './images/BridesMaid/nischi.jpg'
import Nisha from './images/BridesMaid/nisha.JPG'
import PoojaBs from './images/BridesMaid/poojabs.jpg'
import PoojaDs from './images/BridesMaid/poojads.jpg'
import Rachana from './images/BridesMaid/rachu.jpg'
import Sufiya from './images/BridesMaid/sufi.JPG'
import Vidya from './images/BridesMaid/vidya.jpg'
import '@fontsource/courgette';


const styles = {
    cursiveFontStyle: {
        fontFamily: 'Great Vibes,cursive',
    },
    mainFontStyle: {
        fontFamily: 'Courgette, sans-serif'
    }
}
export default function BrideSquad() {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
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
            </Grid>

            <Grid item xs={12} style={{ marginTop: "50px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Sisters Squad </Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </Grid>

            <Grid item className="couple-container">
                <Grid className="profile-container">
                    <Grid className="profile">
                        <img className="circle-image" src={Navya} alt="Bride Sister" />
                        <Typography style={styles.mainFontStyle}>
                            Navya Prabhu
                        </Typography>
                    </Grid>
                    <Grid className="profile">
                        <img className="circle-image" src={Keerthana} alt="Bride" />
                        <Typography style={styles.mainFontStyle}>
                            Keerthana
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className="couple-container">
                <Grid className="profile-container">
                    <Grid className="profile">
                        <img className="circle-image" src={Thanu} alt="Bride Sister" />
                        <Typography style={styles.mainFontStyle} marginLeft="50px">
                            Thanu
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} style={{ marginTop: "50px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Brothers Squad </Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </Grid>
            <Grid item className="couple-container">
                <Grid className="profile-container">
                    <Grid className="profile">
                        <img className="circle-image" src={Jagath} alt="Bride Sister" />
                        <Typography style={styles.mainFontStyle}>
                            Jagath
                        </Typography>
                    </Grid>
                    <Grid className="profile">
                        <img className="circle-image" src={Jayanth} alt="Bride" />
                        <Typography style={styles.mainFontStyle}>
                            Jayanth
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className="couple-container">
                <Grid className="profile-container">
                    <Grid className="profile">
                        <img className="circle-image" src={Likith} alt="Bride Sister" />
                        <Typography style={styles.mainFontStyle}>
                            Likith
                        </Typography>
                    </Grid>
                    <Grid className="profile">
                        <img className="circle-image" src={Nishanth} alt="Bride" />
                        <Typography style={styles.mainFontStyle}>
                            Nishanth
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} style={{ padding: "20px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Brides Maid aka Besties </Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </Grid>

            <Grid item className="couple-container">
                <Grid className="profile-container">
                    <Grid className="profile">
                        <img className="circle-image" src={Sufiya} alt="Bride Sister" />
                        <Typography style={styles.mainFontStyle}>
                            Sufiya
                        </Typography>
                    </Grid>
                    <Grid className="profile">
                        <img className="circle-image" src={PoojaBs} alt="Bride" />
                        <Typography style={styles.mainFontStyle}>
                            Pooja B S
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className="couple-container">
                <Grid className="profile-container">
                    <Grid className="profile">
                        <img className="circle-image" src={Nishchitha} alt="Bride Sister" />
                        <Typography style={styles.mainFontStyle}>
                            Nishchitha
                        </Typography>
                    </Grid>
                    <Grid className="profile">
                        <img className="circle-image" src={Nisha} alt="Bride" />
                        <Typography style={styles.mainFontStyle}>
                            Nisha
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className="couple-container">
                <Grid className="profile-container">
                    <Grid className="profile">
                        <img className="circle-image" src={Vidya} alt="Bride Sister" />
                        <Typography style={styles.mainFontStyle}>
                            Vidya
                        </Typography>
                    </Grid>
                    <Grid className="profile">
                        <img className="circle-image" src={Rachana} alt="Bride" />
                        <Typography style={styles.mainFontStyle} >
                            Rachana
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item className="couple-container">
                <Grid className="profile-container">
                    <Grid className="profile">
                        <img className="circle-image" src={PoojaDs} alt="Bride Sister" />
                        <Typography style={styles.mainFontStyle} marginLeft="50px">
                            Pooja D S 
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}