import React from "react";
import FeaturedPosts from "../components/homepage/featured-posts";
import Hero from "../components/homepage/hero";
import Layout from "../components/layout/layout";

import { getFeaturedPosts } from "../lib/posts-util";
//
function HomePage(props) {
  const { posts } = props;
  return (
    <Layout>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Layout>
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
