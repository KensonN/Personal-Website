import React from "react";
import {withStyles, Typography, Grid, Container} from "@material-ui/core";
import ProjectCard from './ProjectCard';
import projectList from './constants';

const styles = {
    container: {
        paddingTop: "3%",
    }
};

class Projects extends React.Component {
    render() {
        const getProjects = (projectObj) => {
            return (
            <Grid item xs={12} md={6}>
                <ProjectCard {...projectObj} />
            </Grid>
        )}
        const {classes} = this.props;
        return (
            <Container maxWidth={false}>
                <Grid container align={"center"} /* alignItems={"center"} */ className={classes.container} spacing={2}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant={"h1"}>
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