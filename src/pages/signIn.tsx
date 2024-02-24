import React from "react";
import tickSvg from "../assets/images/icon-list.svg";
import signUpImage from "../assets/images/illustration-sign-up-desktop.svg";
import "../styles/App.css";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

function SignIn() {
  return (
    <Grid container className="mainContainer">
      <Grid item xs={6}>
        <div>
          <Typography variant="h3">Stay updated!</Typography>
          <Typography>
            Join 60,000+ product managers receiving monthly updates on:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <img src={tickSvg} alt="Tick" />
              </ListItemIcon>
              <ListItemText primary="Product discovery and building what matters" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <img src={tickSvg} alt="Tick" />
              </ListItemIcon>
              <ListItemText
                primary="Measuring to ensure updates are
              a success"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <img src={tickSvg} alt="Tick" />
              </ListItemIcon>
              <ListItemText primary="And much more!" />
            </ListItem>
          </List>
        </div>
        <div>
          <Typography>Email Address</Typography>
          <TextField id="email" label="email@company.com" variant="outlined" />
          <Button>Subscribe to monthly newsletter</Button>
        </div>
      </Grid>
      <Grid item xs={6}>
        <img src={signUpImage} alt="" />
      </Grid>
    </Grid>
  );
}

export default SignIn;
