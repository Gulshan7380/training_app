import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import './app.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const App = () => {
    return (
        <div>
            <div className="head">Am from Header</div>
            <Container className="container">
                <Outlet />
                
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '4px', transform: 'scale(0.8)' }}>
  </Box>

    <Card sx={{ Width: '50', background: 'lightblue', height: '200'     }}>

      <CardContent>
        <Typography sx={{ fontSize: '25' }} color="text.first" gutterBottom>
          Hello happy happy
        </Typography> 
        <Typography variant="h5" component="div">
        </Typography>
        
        <Typography variant="body2">
          Hello my login page
          <br />
          <br />
          <br />
          {'This is the first practice project'}
        </Typography>
      </CardContent>
    
    </Card>
  
            </Container>
            <div className="foot">Am from Footer</div>
        </div>
    );
};

export default App;
