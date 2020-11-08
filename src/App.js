import React from 'react';
import './App.css';
import { Grid, withStyles, Paper, Typography, Link } from "@material-ui/core";
import Header from './components/Header';
import TypedName from './components/TypedName';
import About from './components/About';
import Projects from './components/Projects'

const styles = theme => ({
  root: {
    height: "100%",
    width: "100%",
    position: "fixed",
    overflowY: "auto",
  },
  copyright: {
    padding: "1% 0% 1% 0%",
    backgroundColor: "#292828"
  }
});

function Copyright() {
  return (
    <div>
      <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://kenson.me/">
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
    <Paper className={classes.root} square={true}>
        <Grid container direction={'row'}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <TypedName />
          </Grid>
          <Grid item xs={12}>
            <About />
          </Grid>
          <Grid item xs={12}>
            <Projects />
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
