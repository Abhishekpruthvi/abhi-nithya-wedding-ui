import logo from './logo.svg';
// import ANBg from './images/ANbg.jpeg'
import ANBg from './images/ANMagnum.jpg'
import heartTemplate from './images/hearttemplate.png'
import './App.css';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './ImageComponent.css';
import CountdownBoard from './CountDownBoard'
import "@fontsource/great-vibes";
import HappyCouple from './HappyCouple'
import WhenAndWhere from './WhenAndWhere'
import OurStory from './OurStory'
import EngagementTeaser from './EngagementTeaser'
import PreWeddingStudioTeaser from './PreweddingStudioTeaser';
import PreweddingTeaser from './PreweddingTeaser';
import Welcome from './Welcome';
import BrideSquad from './BrideSquad'
import GroomSquad from './GroomSquad'
import Thanks from './Thanks'
import MeetOurFamily from './MeetOurFamily'
import PreWeddingStudioFull from './PreWeddingStudioFull'
// import sbg1 from './images/Us/bg1.jpg'
// import sbg3 from './images/Us/bg3.jpg'
// import sbg4 from './images/Us/bg4.jpg'
// import sbg5 from './images/Us/bg5.jpg'

function App() {
  const styles = {
    appBar: {
      display: 'flex',
      alignItems: 'center',
      // backgroundColor: '#FF0B48'
      // backgroundColor: '#967bb6'
      // backgroundColor: '#5e9a8d'
      backgroundColor: '#1e7b67'

    },
    title: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
    },

    cursiveFontStyle: {
      fontFamily: 'Great Vibes,cursive',
    },
    imageStyle: {
      display: 'block',
      margin: '0 auto',
      marginTop: '-5%',
      position: 'absolute',
      width: '100%',
      objectFit: 'cover',
      opacity: 0.35, // Adjust the opacity as needed
    }
  };

  const targetDate = '2023-12-01T10:00:00+05:30';

  return (
    <div className="app-container">
      <AppBar position="static" style={styles.appBar} >
        <Toolbar>
          <Typography variant="h6" component="div" fontSize="25px" fontFamily="Arial, sans-serif" fontStyle="italic"
            fontWeight="bold">
            <div style={styles.title}>
              Abhi <IconButton color="inherit" edge="middle">
                <FavoriteIcon fontSize="large" />
              </IconButton> Nithya
          </div>
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="image-container">
        <img className="image1" src={ANBg} alt="Your Image" />
        <div className="centered-image">
          <img src={heartTemplate} alt="Your Image" />
          <div className="centered-text">
            <Typography variant="h6" >WE ARE GETTING MARRIED</Typography>
            <Typography variant="h4" style={styles.cursiveFontStyle}>Save Our Date</Typography>
            <Typography variant="h6" >01 December 2023</Typography>
          </div>
        </div>
      </div>
      <Welcome />
      <div>
        <CountdownBoard targetDate={targetDate} />
      </div>

      <HappyCouple />
      <EngagementTeaser />
      <MeetOurFamily />
      <PreWeddingStudioTeaser />
      <WhenAndWhere />
      <PreweddingTeaser />
      <OurStory />
      <PreWeddingStudioFull />
      <BrideSquad />
      <GroomSquad />
      <Thanks />

    </div>
  );
}

export default App;
