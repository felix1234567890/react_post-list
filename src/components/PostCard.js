import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    width: "600px",
    height: "200px",
    border: "2px solid #000",
    margin: "10px auto",
    background: "rgba(0,0,0,0.2)",
    textTransform: "capitalize"
  }
};

function PostCard({ classes, post, onDelete }) {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography component="p">{post.body}</Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          color="secondary"
          variant="contained"
          onClick={() => onDelete(post.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
export default withStyles(styles)(PostCard);
