import fs from "fs";
import path from "path";

import matter from "gray-matter";
// abs path to posts **.mds
const postsDirectory = path.join(process.cwd(), "content", "posts");

// returns meta data of post
function getPostData(fileName) {
  // readile
  const filePath = path.join(postsDirectory, fileName);
  //
  const fileContent = fs.readFileSync(filePath, "utf-8");
  // split frontmatter===data from content===content
  const { data, content } = matter(fileContent);
  // create slug
  const postSlug = fileName.replace(/\.md$/, ""); // removes the file extension
  // prepare data
  const postData = {
    slug: postSlug,
    ...data,
    content
  };
  return postData;
}

export function getAllPosts() {
  // all the files in dir
  const postFiles = fs.readdirSync(postsDirectory);
  // loop through and return ordered data
  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile);
  });
  // sort posts by data
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
}

export function getFeaturedPosts() {
  //
  const allPosts = getAllPosts();
  //only return featured posts
  const featuredPosts = allPosts.filter(post => post.isFeatured);
  return featuredPosts;
}
