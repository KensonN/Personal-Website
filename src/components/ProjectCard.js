import React from "react";
import {withStyles, Typography, Card, CardActionArea, CardContent, CardMedia, Button} from "@material-ui/core";

const styles = theme => ({
    root: {
        maxWidth: "70rem",
        //backgroundColor: "#292828"
      },
      media: {
        height: "25rem",
        border: 0,
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
        let {classes, title, skills, description, imgPath, date, component, src} = this.props;
        const profilePath = process.env.PUBLIC_URL + "/images/profile.png";
        if (component === "img") {
            imgPath = process.env.PUBLIC_URL + " /images/" + imgPath;
        }
        return (
            <Card className={classes.root}>
                {/* <CardActionArea> */}
                    <CardMedia
                    className={classes.media}
                    component={component}
                    image= {imgPath}
                    title={title}
                    src={src}
                    controls
                    />
                {/* </CardActionArea> */}
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
            </Card>
        );
    }
}

export default withStyles(styles)(ProjectCard);