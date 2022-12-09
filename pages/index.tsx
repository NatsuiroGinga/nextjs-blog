import React from "react";
import Hero from "@/components/home-page/Hero";
import FeaturedPosts from "@/components/home-page/FeaturedPosts";
import { GetStaticProps } from "next";
import { getFeaturedPosts } from "@/pages/api/post";

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
    revalidate: 60 * 60 * 24 // 24 hours
  };
}

export default HomePage;