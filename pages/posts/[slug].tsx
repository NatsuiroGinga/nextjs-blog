import React from "react";
import PostContent from "@/components/posts/post-detail/PostContent";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, getFeaturedPosts } from "@/pages/api/post";

interface Props {
  post: Post;
}

const PostDetailPage: React.FC<Props> = (props) => {

  if (!props.post) {
    return <p>Loading...</p>
  }

  return <PostContent { ...props.post }/>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;
  const allPosts = getAllPosts();
  const post = allPosts.find((post) => post.slug === slug);

  return {
    props: {
      post
    },
    revalidate: 60 * 60 * 24 // 24 hours
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const featuredPosts = getFeaturedPosts();
  const slugs = featuredPosts.map((post) => post.slug);

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: true
  };
}

export default PostDetailPage;