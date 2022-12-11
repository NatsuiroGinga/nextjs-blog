import React from "react";
import Hero from "@/components/home-page/Hero";
import FeaturedPosts from "@/components/home-page/FeaturedPosts";
import { GetStaticProps } from "next";
import { getFeaturedPosts } from "@/pages/api/post";
import { getDefaultRandomRevalidate } from "@/utils/common";
import { Post } from "@/components/posts";

interface Props {
  posts: Post[];
}

const HomePage: React.FC<Props> = (props) => {
  return (
    <>
      <Hero/>
      <FeaturedPosts posts={ props.posts }/>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    },
    revalidate: getDefaultRandomRevalidate(10, 15), // 10 - 15 minutes
  };
}

export default HomePage;