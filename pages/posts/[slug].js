import React from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostsFiles, getPostData } from "../../lib/posts-util";
function SinglePostPage(props) {
  const { post } = props;

  if (post === undefined) {
    return <p>Loading...</p>;
  }

  return <PostContent post={post} />;
}

export async function getStaticProps(context) {
  // get the page slug
  const { params } = context;
  const { slug } = params;
  //
  const postData = getPostData(slug);
  return {
    props: {
      post: postData
    },
    revalidate: 600 * 6 // every hour. rebuild - EG if revisions are made
  };
}

//
// - remember
// need to use getStaticPath to pre-render SSR/SSG dynamic posts. - otherwise do not know what dynamic pages exist
export async function getStaticPaths(context) {
  const allPostsFilenames = getPostsFiles();

  const slugs = allPostsFilenames.map(fileName =>
    fileName.replace(/\.md$/, "")
  );
  return {
    // SSG pre-render all these paths
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: true
  };
  // nothing would be pre-renderedm but will try and return for everypage
  // return {
  //   paths: [],
  //   fallback: true
  // };
}

export default SinglePostPage;
