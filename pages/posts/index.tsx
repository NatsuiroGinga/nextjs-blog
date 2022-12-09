import React from "react";
import AllPosts from "@/components/posts/AllPosts";
import { GetStaticProps } from "next";
import { getAllPosts } from "@/pages/api/post";

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
    revalidate: 60 * 60 * 24 // 24 hours
  };
}

export default AllPostsPage;