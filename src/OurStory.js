import React from 'react';
import { Typography, Button } from '@mui/material';
import "@fontsource/great-vibes";
import '@fontsource/courgette';
import underlineHeart from './images/underlineHeart.png'
import './TextStyling.css'
import HowItStarted from './images/Us/HowItStarted.jpg'
import FCFD from './images/Us/FCFD.jpg'
import FirstDate from './images/Us/FirstDate.jpg'

export default function OurStory() {
    const styles = {
        cursiveFontStyle: {
            fontFamily: 'Great Vibes,cursive',
        },
        mainFontStyle: {
            fontFamily: 'Courgette, sans-serif'
        },
        imageStyle: {
            display: 'block',
            margin: '0 auto',
            marginTop: '10px',
            position: 'absolute',
            width: '100%',
            objectFit: 'cover',
            opacity: 0.3, // Adjust the opacity as needed
        },
    }
    return (
        <div style={{ marginTop: "50px" }}>
            <div>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginBottom: "20px"
                }} />
                <Typography variant="h2" align="center" style={styles.cursiveFontStyle} color="#1e7b67"> Our Story</Typography>
                <img src={underlineHeart} style={{
                    display: 'block',
                    margin: '0 auto',
                    marginTop: "-40px"
                }} />
            </div>

            <img src={HowItStarted} style={styles.imageStyle} />

            <div style={{ marginTop: "30px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67">How it started</Typography>
            </div>
            <div className="text-styling">
                <Typography lineHeight="30px" style={styles.mainFontStyle} >

                    Like every other family, Both our families were looking for a match for each of us ,
                    for me Abhishek the hunt for my bride started way too early 😂 my family peeps were eagerly
                    searching me a match since 3 years! And for Nithya the search started just 3 months earlier 🤭
                    <br />
                    <br />
                    After talks and chats with others , Abhishek’s brother found Nithya’s profile on the matrimony
                    and tried to contact them , but as the search was just begun for Nithya here mother who was following up
                    her matrimony page didn’t see it 😂 and after Arround 2 months when Abhishek’s brother finally found Nithya’s instagram
                    and Facebook , connected with Nithya’s mother and thats how it all started!
                    <br />
                    <br />
                    It was 12pm in the noon i was at  work in hospital when my mom shared me
                    Abhishek’s bio data and as i was going through mom called me shared
                    Abhishek’s number and told I would have to talk with him in the evening
                    which made me super nervous as an introvert 😂
                    </Typography>
            </div>

            <img src={FCFD} style={styles.imageStyle} />
            <div style={{ marginTop: "30px" }}>

                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67">First Chat</Typography>
            </div>
            <div className="text-styling">

                <Typography lineHeight="30px" style={styles.mainFontStyle}>
                    Tuesday, 7th March 2023 <br />
                    I waited for a message from him but there wasn’t any! Finally I gathered the courage n texted him a Hi, which then went on till 3am in the night in our very first chat😂

                </Typography>
            </div>

            <div style={{ marginTop: "30px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67">First Call</Typography>
            </div>
            <div className="text-styling">
                <Typography lineHeight="30px" style={styles.mainFontStyle}>
                    Thursday, 9th March 2023 <br />
                    It was just funny and awkward in the beginning but turned out to be interesting 🤭
                </Typography>
            </div>

            <div style={{ marginTop: "30px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67">First Date</Typography>
            </div>
            <div className="text-styling">
                <Typography lineHeight="30px" style={styles.mainFontStyle}>
                    Sunday, 19th March 2023 <br />
                    Mysore <br />
                    <h2>
                        Nithya
                    </h2>
                    It was scheduled for a Sunday and I was super anxious so
                    I made sure everything was good for the day so I talked to my friends
                    and sister for the day’s plan and as I had my work for half the day ,
                    but my bad Abhishek had already reached Mysore 😂
                    <br />
                    <br />
                    I quickly asked my friend to drop me home
                    and tada her vehicle gave up and I made abhishek wait for like
                    more than a hour😂 poor boy! Then I quickly got another friend to drop
                    me home, I dressed up and went to him😂
                    <br />
                    <br />
                    I took my vespa and he in his enfield reached Karanji lake
                    and took a walk in the cool breeze, with flowers falling
                    <br />
                    <br />
                    I took it as a sign 🤭 after walks and talks we went to Ivaana resort for lunch and I was literally so happy that I didn’t even notice it was already evening 😂 literally felt still wanted to spend more time together and that’s when it hit me, he was what I was looking for 🤭
                </Typography>
            </div>

            <div style={{ marginTop: "30px" }}>
                <Typography variant="h4" align="center" style={styles.cursiveFontStyle} color="#1e7b67">First Rose</Typography>
            </div>
            <div className="text-styling">
                <Typography lineHeight="30px" style={styles.mainFontStyle}>
                    Saturday, 8th April 2023 <br />
                    Mysore <br />

                    <h2> Nithya </h2>
                    It was night as we casually chatted and we hadn’t said yes yet😂 Abhishek said he was on a trip with friends to Gopalswamy hills and would pass through Mysore late night
                    And he would tell me a hi if possible 😂 me on the other hand was getting ready to go to Banglore in the morning to pick my sister from airport as she returned from london just to meet Abhishek, before it was a complete yes🤭
                    <br />
                    <br />
                    And I couldn’t sleep through the night as i was kinda excited to meet him and my sister 😂
                    As we had to start early, I woke up Arround 4 in the morning and was getting ready at 4:30 in the morning when Abhishek called asked me come out 😂 I was so excited but also scared as mom n dad were awake too😂 as I went down stairs and stepped out of the door he came in the car so dropped off roses and chocolates in a second and said bye in a jiffy 😂
                    it was like a dream come true for me🤭 and the efforts he put in the late night just to meet me made me so happy and i was on cloud 9 literally 😂
                </Typography>
            </div>
        </div>
    )
}