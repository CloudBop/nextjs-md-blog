import { Fragment } from "react";
import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
function AllPostsPage(props) {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
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
