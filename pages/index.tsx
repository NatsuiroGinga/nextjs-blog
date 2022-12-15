import React from "react";
import Hero from "@/components/home-page/Hero";
import FeaturedPosts from "@/components/home-page/FeaturedPosts";
import { Post } from "@/components/posts";
import { GetStaticProps } from "next";
import { getFeaturedPosts } from "@/pages/api/post";
import { getDefaultRandomRevalidate } from "@/utils/common";
import Head from "next/head";

interface HomePageProps {
  posts: Post[];
}

// 主页
const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <>
      <Head>
        <title>Ginga's Blog</title>
        <meta
          name={"description"}
          content={"I post programming and web development"}
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: getDefaultRandomRevalidate(10, 15), // 10 - 15 minutes
  };
};

export default HomePage;
