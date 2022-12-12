import React from "react";
import AllPosts from "components/posts/AllPosts";
import { GetStaticProps } from "next";
import { getAllPosts } from "pages/api/post";
import { getDefaultRandomRevalidate } from "@/utils/common";
import { Post } from "@/components/posts";
import Head from "next/head";

interface AllPostsPageProps {
  posts: Post[];
}

const AllPostsPage: React.FC<AllPostsPageProps> = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name={ "description" } content={ "A list of posts" }/>
      </Head>
      <AllPosts posts={ props.posts }/>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts
    },
    revalidate: getDefaultRandomRevalidate(10, 15), // 10 - 15 minutes
  };
}

export default AllPostsPage;