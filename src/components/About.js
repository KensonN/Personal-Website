import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core"

const imagePath = process.env.PUBLIC_URL + "/images/profile.png";

const styles = themes => ({
    profilePic: {
        width: "20em",
        height: "auto",
        borderRadius: "50%"
    },
    paragraph: {
        fontWeight: "normal",
        paddingTop: "4%",
    },
    container: {
        paddingTop: "3%",
    }
});

class About extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid container className={classes.container}>
                <Grid item xs={1} md={1} >
                </Grid>
                <Grid item md={5} align={"center"} xs={12} >
                    <img src={imagePath} alt={"profile"} className={classes.profilePic} />
                </Grid>
                <Grid item md={3} align={"center"} xs={12}>
                    <Typography variant={"h2"}>
                        About me
                    </Typography>
                    <Typography variant={"h6"} className={classes.paragraph}>
                        Hey there! I'm a Electrical Engineering sopohmore at UCLA's Henry Samueli School of Engineering. My interests are always evolving, so 
                        I chose to study EE as I wanted to be in a field with tons of flexibility. Here, I hope to showcase some projects I've worked on. Thanks
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