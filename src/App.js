import logo from './logo.svg';
import ANBg from './images/ANbg.jpeg'
import heartTemplate from './images/hearttemplate.png'
import './App.css';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './ImageComponent.css';
import CountdownBoard from './CountDownBoard'
import "@fontsource/great-vibes";
import HappyCouple from './HappyCouple'
import WhenAndWhere from './WhenAndWhere'

function App() {
  const styles = {
    appBar: {
      display: 'flex',
      alignItems: 'center',
      // backgroundColor: '#FF0B48'
      backgroundColor: '#5e9a8d'
    },
    title: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
    },

    cursiveFontStyle: {
      fontFamily: 'Great Vibes,cursive',
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
            <Typography variant="h6" fontWeight="bold"  bgcolor="#5e9a8d">WE ARE GETTING MARRIED</Typography>
            <Typography variant="h4" fontWeight="bold" style={styles.cursiveFontStyle} bgcolor="#5e9a8d">Save Our Date</Typography>
            <Typography variant="h6" fontWeight="bold" bgcolor="#5e9a8d">01 December 2023</Typography>
          </div>
        </div>
      </div>
      <div>
      <CountdownBoard targetDate={targetDate} />
      </div>
      <HappyCouple/>
      <WhenAndWhere/>
    </div>
  );
}

export default App;
