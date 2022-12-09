import React from "react";
import styles from "./index.module.css";
import PostHeader from "@/components/posts/post-detail/PostHeader";
import { postImageLoader } from "@/utils/loader";
import ReactMarkdown from "react-markdown";

interface Props extends Post {
}

const PostContent: React.FC<Props> = (props) => {
  const { image, slug, title, content } = props;

  const imageConfig = {
    image,
    slug,
  }

  return (
    <article className={ styles.content }>
      <PostHeader image={ postImageLoader(imageConfig) }
                  title={ title }/>
      <ReactMarkdown>
        { content }
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;