import React from 'react';
import { Grid, Typography, withStyles } from "@material-ui/core";
import Typed from 'typed.js'

const backgroundPath = process.env.PUBLIC_URL + "/images/background.png";


const styles = theme => ({
    container: {
        height: "25rem",
        backgroundImage: "url(" + backgroundPath + ")",
    },
    nameContainer: {
        height: "100%",
    },
    name: {
        // [theme.breakpoints.down('xs')]: {
        //     fontSize: "5rem",
        // },
        // [theme.breakpoints.up('sm')]: {
        //     fontSize: "7rem",
        // },
        // [theme.breakpoints.up('md')]: {
        //     fontSize: "9rem",
        // },
        // [theme.breakpoints.up('lg')]: {
        //     fontSize: "12rem",
        // },
        fontSize: "11vw"
    }
});
  
class TypedName extends React.Component {
    componentDidMount() {
        const options = {
          strings: ["Hi,^250 I'm Kenson!", "UCLA EE 2023"],
          typeSpeed: 50,
          backSpeed: 35,
          loop: true,
          cursorChar: "|",
          backDelay: 500,
        };
        this.typed = new Typed(".name", options);
      }
    componentWillUnmount() {
        this.typed.destroy();
      }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <Grid container className={classes.nameContainer} align={"center"} alignItems={"center"}>
                    <Grid item xs={12}>
                        <Typography variant="h1" className={classes.name}>
                            <div className={classes.nameBody}>
                                <span className="name"/>
                            </div>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(TypedName);