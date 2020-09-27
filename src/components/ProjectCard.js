import React from "react";
import {withStyles, Typography, Card, CardActionArea, CardContent, CardMedia, Button} from "@material-ui/core";

const styles = theme => ({
    root: {
        maxWidth: "70rem",
        //backgroundColor: "#292828"
      },
      media: {
        height: "25rem",
      },
      paragraph: {
          fontWeight: "normal",
      },
      caption: {
          fontStyle: "italic",
          align: "right"
      }
});

class ProjectCard extends React.Component {
    render() {
        const {classes, title, skills, description, imgPath, date, link} = this.props;
        const profilePath = process.env.PUBLIC_URL + "/images/profile.png";
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image= {process.env.PUBLIC_URL + " /images/" + imgPath}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h3">
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="h5" className={classes.paragraph}>
                            {skills} 
                        </Typography>
                        <Typography variant="h6" color="textSecondary" className={classes.paragraph}>
                            {description}
                        </Typography>
                        <Typography gutterBottom variant="caption" className={classes.caption}>
                            {date} 
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default withStyles(styles)(ProjectCard);