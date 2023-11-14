import React from 'react';
import { Typography, Button, Grid, Paper } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./ImageSlideShow.css";
import underlineHeart from './images/underlineHeart.png'

const styles = {
    cursiveFontStyle: {
        fontFamily: 'Great Vibes,cursive',
    },
    mainFontStyle: {
        fontFamily: 'Courgette, sans-serif'
    }
}

export default function OurGallery() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // Slide transition speed in milliseconds
        autoplay: true,
        autoplaySpeed: 1500, // Time between slides in milliseconds
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context('./images/SlideShow', false, /\.(jpg)$/));

    return (
        <Grid container justifyContent="center" style={{ marginTop: "50px" }}>
            <Grid item xs={12}>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginBottom: "20px"
                }} />
                <Typography variant="h2" align="center" style={styles.cursiveFontStyle} color="#1e7b67">  Our Gallery</Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </Grid>

            <Grid item xs={12} md={8} justifyContent="center" className="image-slideshow">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <Grid item xs={12} key={index} >
                            <Paper elevation={10}>
                                <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className="slideshow-image"
                                />
                            </Paper>
                        </Grid>
                    ))}
                </Slider>
            </Grid>
        </Grid>


    );
}