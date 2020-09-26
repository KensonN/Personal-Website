import React from "react";
import { AppBar, Toolbar, Typography, Button, withStyles } from "@material-ui/core";

const styles = {
  typographyStyles: {
    flex: 1,
  },
};

class Header extends React.Component {
  render() {
    const {classes} = this.props;
    const resumePath = process.env.PUBLIC_URL + "/Resume 8-3.pdf";
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography className={classes.typographyStyles}>
            Kenson Nguyen
          </Typography>
          <Button href={"#"} className={classes.buttons}>
            Home
          </Button>
          {/* <Button color={"inherit"}>
            About
          </Button> */}
          {/* <Button color={"inherit"} className={classes.button}>
            Projects
          </Button> */}
          <Button href="https://www.linkedin.com/in/kensonnguyen/" className={classes.button}>
            Linkedin
          </Button>
          <Button href={resumePath} className={classes.button}>
            Resumé
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
};

export default withStyles(styles)(Header);