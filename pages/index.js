import React, { Fragment } from "react";
import FeaturedPosts from "../components/homepage/featured-posts";
import Hero from "../components/homepage/hero";
import Head from "next/head";

import { getFeaturedPosts } from "../lib/posts-util";
//
function HomePage(props) {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>CloudBop' NextJS Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
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
