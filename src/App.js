import React, { Component } from "react";
import PostCard from "./components/PostCard";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./App.css";

const styles = {
  button: {
    display: "inline-block",
    float: "right"
  }
};

class App extends Component {
  state = {
    posts: [],
    open: false,
    user: ""
  };

  handleOpen = () => {
    this.setState({ open: !this.state.open });
  };
  handleChange = e => {
    this.setState({ user: e.target.value });
  };
  userPosts = () => {
    this.setState({ open: false });
    const userPosts = this.state.posts.filter(
      post => post.userId === parseInt(this.state.user)
    );
    this.setState({ posts: userPosts });
  };
  handleDelete = id => {
    const remainingPosts = this.state.posts.filter(post => post.id !== id);
    this.setState({ posts: remainingPosts });
  };
  showPostsforUser = () => {
    this.setState({ open: true });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }
  render() {
    console.log(this.state.posts);
    const { posts } = this.state;

    return (
      <div className="App">
        <h1>Post list</h1>
        <Button
          color="primary"
          onClick={this.showPostsforUser}
          variant="contained"
        >
          Show posts from user
        </Button>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.state.open}
          onClose={this.handleOpen}
        >
          <DialogTitle>Fill the form</DialogTitle>
          <DialogContent>
            <form>
              <FormControl>
                <InputLabel htmlFor="age-native-simple">
                  Posts from user
                </InputLabel>
                <Select
                  native
                  value={this.state.user}
                  onChange={this.handleChange}
                  input={<Input id="age-native-simple" />}
                >
                  <option value={1}>Posts from first user</option>
                  <option value={2}>Posts from second user</option>
                  <option value={3}>Posts from third user</option>
                  <option value={4}>Posts from fourth user</option>
                  <option value={5}>Posts from fifth user</option>
                  <option value={6}>Posts from sixth user</option>
                  <option value={7}>Posts from seventh user</option>
                  <option value={8}>Posts from eighth user</option>
                  <option value={9}>Posts from ninth user</option>
                  <option value={10}>Posts from tenth user</option>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => this.setState({ open: false })}
              color="primary"
            >
              Cancel
            </Button>
            <Button onClick={this.userPosts} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
        {posts.map((post, i) => (
          <PostCard post={post} key={i} onDelete={this.handleDelete} />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(App);
