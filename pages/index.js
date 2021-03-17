import React from "react";
import FeaturedPosts from "../components/homepage/featured-posts";
import Hero from "../components/homepage/hero";
import Layout from "../components/layout/layout";

function HomePage() {
  return (
    <Layout>
      <Hero />
      <FeaturedPosts />
    </Layout>
  );
}

export default HomePage;
