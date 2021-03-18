import React, { Fragment } from "react";
import FeaturedPosts from "../components/homepage/featured-posts";
import Hero from "../components/homepage/hero";

import { getFeaturedPosts } from "../lib/posts-util";
//
function HomePage(props) {
  const { posts } = props;
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const featruedPosts = getFeaturedPosts();
  return {
    props: {
      posts: featruedPosts
    }
    // revalidate: null - never rerun this after build - content not likely to change
  };
}

export default HomePage;
