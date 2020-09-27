import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, withStyles } from "@material-ui/core";
import {GitHub, LinkedIn} from "@material-ui/icons"

const styles = {
  typographyStyles: {
    flex: 1,
  },
  appBar: {
    background: "transparent",
  }
};

class Header extends React.Component {

  render() {
    const {classes} = this.props;
    const resumePath = process.env.PUBLIC_URL + "/Resume 8-3.pdf";
    return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.typographyStyles}>
            Kenson Nguyen
          </Typography>
          <IconButton href={"https://github.com/KensonN/"} aria-label="Link to GitHub">
            <GitHub />
          </IconButton> 
          <IconButton href="https://www.linkedin.com/in/kensonnguyen/" aria-label="Link to LinkedIn">
            <LinkedIn />
          </IconButton>
          <Button href={resumePath}>
            Resumé
          </Button>          
        </Toolbar>
      </AppBar>
    );
  }
};

export default withStyles(styles)(Header);