import React from "react";
import AllPosts from "components/posts/AllPosts";
import { GetStaticProps } from "next";
import { getAllPosts } from "pages/api/post";
import { getDefaultRandomRevalidate } from "@/utils/common";
import { Post } from "@/components/posts";

interface Props {
  posts: Post[];
}

const AllPostsPage: React.FC<Props> = (props) => {
  return (
    <AllPosts posts={ props.posts }/>
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