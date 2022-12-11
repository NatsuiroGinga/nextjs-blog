import React from "react";
import PostItem from "@/components/posts/PostItem";
import styles from "./index.module.css";
import { Post } from "@/components/posts";

interface Props {
  posts: Post[];
}

const PostsGrid: React.FC<Props> = (props) => {
  const { posts } = props;
  const { grid } = styles;

  return (
    <ul className={ grid }>
      {
        posts.map(postItem => (
          <PostItem key={ postItem.slug }
                    post={ postItem }/>
        ))
      }
    </ul>
  );
};

export default PostsGrid;