import React from "react";
import {withStyles, Typography, Grid, Container} from "@material-ui/core";
import ProjectCard from './ProjectCard';
import projectList from './constants';

const styles = theme => ({
    container: {
        paddingTop: "3%",
    },
    background: {
        backgroundColor: "#292828",
        margin: theme.spacing(0),
        flexGrow: 0,
        maxWidth: `100%`,
        flexBasis: `100%`,
    }
});

class Projects extends React.Component {
    render() {
        const getProjects = (projectObj) => {
            return (
            <Grid item xs={12} md={6} xl={3} key={projectObj.title}>
                <ProjectCard {...projectObj} />
            </Grid>
        )}
        const {classes} = this.props;
        return (
            <Container disableGutters maxWidth={false} className={classes.container}>
                <Grid container align={"center"} /* alignItems={"center"} */ spacing={3} className={classes.background}>
                    <Grid item xs={12} >
                        <Typography variant={"h1"}>
                            Projects
                        </Typography>
                    </Grid>
                    {projectList.map(projectObj => getProjects(projectObj))}
                </Grid>
            </Container>
            
        );
    }
}

export default withStyles(styles)(Projects);