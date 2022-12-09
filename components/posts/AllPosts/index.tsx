import React from "react";
import styles from "./index.module.css";
import PostsGrid from "@/components/posts/PostsGrid";

interface Props {
  posts: Post[];
}

const AllPosts: React.FC<Props> = (props) => {

  return (
    <section className={ styles.posts }>
      <h1>All Posts</h1>
      <PostsGrid posts={ props.posts }/>
    </section>
  );
}

export default AllPosts;