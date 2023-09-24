import React from 'react';
import { Typography, Button } from '@mui/material';
import "@fontsource/great-vibes";
import underlineHeart from './images/underlineHeart.png'
import './WhenAndWhere.css'
import { Link } from 'react-router-dom';
import { FaLocationArrow } from 'react-icons/fa';


export default function WhenAndWhere() {

    const ijConventionCenter = 'https://maps.app.goo.gl/AvjNUe8GobqHfEuC8';
    const nandagokula = 'https://maps.app.goo.gl/LDd55S7Wjhudf7FU6';
    const styles = {
        cursiveFontStyle: {
            fontFamily: 'Great Vibes,cursive',
        }
    }

    return (
        <div style={{ marginTop: "50px" }}>
            <div>
                <Typography variant="h2" align="center" style={styles.cursiveFontStyle} color="#5e9a8d"> When And Where</Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </div>
            <div style={{ marginTop: "50px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#5e9a8d">Wedding Ceremony</Typography>
            </div>
            <div className="wedding-ceremony">
                <Typography lineHeight="30px">
                    Friday, 1st December 2023, 9:00 AM to 10:00 AM <br />
                    IJ Convention hall Mysore <br />
                    <a href={ijConventionCenter} target="_blank" rel="noopener noreferrer">
                        <FaLocationArrow style={{ marginRight: "5px" }} color="darkblue" />
                        <Button variant="contained"  style={{backgroundColor:"#5e9a8d"}} >
                            Open in Google Maps
                            </Button>
                    </a>
                </Typography>
            </div>

            <div style={{ marginTop: "50px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#5e9a8d">Reception</Typography>
            </div>
            <div className="wedding-ceremony">
                <Typography lineHeight="30px">
                    Sunday, 3rd October 2023, 10:00 AM to 02:00 PM <br />
                    Nandagokula Convention Center, Hassan <br />
                    <a href={nandagokula} target="_blank" rel="noopener noreferrer">
                        <FaLocationArrow color="darkblue" style={{ marginRight: "5px" }} />
                        <Button variant="contained" style={{backgroundColor:"#5e9a8d"}} >
                            Open in Google Maps
                            </Button>
                    </a>

                </Typography>


            </div>


        </div>
    )
}

