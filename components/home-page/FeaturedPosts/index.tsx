import React from "react";
import styles from "./index.module.css";
import PostsGrid from "@/components/posts/PostsGrid";

interface Props {
  posts: Post[];
}

const FeaturedPosts: React.FC<Props> = (props) => {
  const { latest } = styles;

  return (
    <section className={ latest }>
      <h2>Featured Posts</h2>
      <PostsGrid posts={ props.posts }/>
    </section>
  );
};

export default FeaturedPosts;