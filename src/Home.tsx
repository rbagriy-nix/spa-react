import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: "auto",
  },
  media: {
    height: 250,
  },
  cardActions: {
    justifyContent: "space-around",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className="main_div">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              React + Single-SPA
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              It's a simply example for React-Router and dammy components
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button
            variant="contained"
            size="medium"
            component={Link}
            to="/react/todo"
            color="primary"
          >
            Todo List
          </Button>
          <Button
            variant="contained"
            size="medium"
            color="secondary"
            component={Link}
            to="/react/shop"
          >
            Product List
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
