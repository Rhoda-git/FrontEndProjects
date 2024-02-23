import React from "react";
import "/Users/rhoda/Practice Projects/newsletter-sign-up-with-success-message-main/src/styles/App.css";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

function SignIn() {
  return (
    <div className="mainContainer">
      <Typography>Stay updated!</Typography>
      <Typography>
        Join 60,000+ product managers receiving monthly updates on:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <img src="src/assets/docs/images/icon-list.svg" alt="Tick" />
          </ListItemIcon>
          <ListItemText primary="Product discovery and building what matters" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <img src="src/assets/docs/images/icon-list.svg" alt="Tick" />
          </ListItemIcon>
          <ListItemText
            primary="Measuring to ensure updates are
    a success"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <img src="src/assets/docs/images/icon-list.svg" alt="Tick" />
          </ListItemIcon>
          <ListItemText primary="And much more!" />
        </ListItem>
      </List>
    </div>
  );
}

export default SignIn;
