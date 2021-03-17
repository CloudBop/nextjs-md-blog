import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../lib/posts-util";
function AllPostsPage(props) {
  const { posts } = props;
  return <AllPosts posts={posts} />;
}

export async function getStaticProps(context) {
  const publishedPosts = getAllPosts();
  return {
    props: {
      posts: publishedPosts
    }
    // revalidate: null - never rerun this after build - content not likely to change
  };
}

export default AllPostsPage;
