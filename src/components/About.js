import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core"

const profilePath = process.env.PUBLIC_URL + "/images/profile.png";

const styles = themes => ({
    profilePic: {
        width: "20em",
        height: "auto",
        borderRadius: "50%"
    },
    paragraph: {
        fontWeight: "normal",
        paddingTop: "4%",
        textAlign: "justify",
    },
    profileContainer: {
        paddingTop: "3%",
    }
});

class About extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid container className={classes.profileContainer} alignItems={"center"}>
                <Grid item xs={1} md={1} >
                </Grid>
                <Grid item md={5} align={"center"} xs={12} >
                    <img src={profilePath} alt={"profile"} className={classes.profilePic} />
                </Grid>
                <Grid item md={3} align={"center"} xs={12}>
                    <Typography variant={"h1"}>
                        About Me
                    </Typography>
                    <Typography variant={"h6"} className={classes.paragraph}>
                        Hey there! I'm a Electrical Engineering sopohmore at UCLA's Henry Samueli School of Engineering. Other than studies, I'm involved with Bruin Racing SuperMileage Vehicle
                        and IEEE.
                        My interests are always evolving, so I chose to study EE to be in a field with tons of flexibility. Here, I hope to showcase some projects I've worked on. Thanks
                        for stopping by!
                    </Typography>
                </Grid>
                <Grid item md={1} xs={1} >

                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(About);