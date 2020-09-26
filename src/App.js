import React from 'react';
import './App.css';
import { Grid, withStyles, Paper, Typography, Link } from "@material-ui/core";
import Header from './components/Header';
import Typing from './components/Typing';
import About from './components/About'

const styles = theme => ({
  root: {
    height: "100%",
    widht: "100%",
    position: "fixed",
    overflowY: "scroll",
  },
  copyright: {
    paddingTop: "2.5%",
  }
});

function Copyright() {
  return (
    <div>
      <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Kenson Nguyen
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </div>
    
  );
}

class App extends React.Component {
  render() {
    const {classes} = this.props;
    return (
    <Paper className={classes.root}>
        <Grid container direction={'row'}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Typing />
          </Grid>
          <Grid item xs={12}>
            <About />
          </Grid>
        </Grid>
        <div className={classes.copyright}>
           <Copyright/>
        </div>
    </Paper>
    );
  }
}

export default withStyles(styles)(App);
