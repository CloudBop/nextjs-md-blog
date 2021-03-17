import PostItem from "./post-grid";
import classes from "./posts-grid.module.css";

function PostsGrid(props) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map(post => (
        <PostItem post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
