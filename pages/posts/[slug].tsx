import React from "react";
import PostContent from "@/components/posts/post-detail/PostContent";
import { GetStaticPaths, GetStaticProps } from "next";
import { getFeaturedPostFiles, getPostData } from "@/pages/api/post";
import { getDefaultRandomRevalidate } from "@/utils/common";
import { Post } from "@/components/posts";
import Head from "next/head";

interface PostDetailPageProps {
  post: Post;
}

const PostDetailPage: React.FC<PostDetailPageProps> = (props) => {

  if (!props.post) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>{ props.post.title }</title>
        <meta name={ "description" } content={ props.post.excerpt }/>
      </Head>
      <PostContent { ...props.post }/>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;
  const postData = getPostData(slug as string);

  return {
    props: {
      post: postData
    },
    revalidate: getDefaultRandomRevalidate(10, 15), // 10 - 15 minutes
  };
}

// 生成精选文章页面
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getFeaturedPostFiles();

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: "blocking"
  };
}

export default PostDetailPage;