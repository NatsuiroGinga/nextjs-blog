import React, { PropsWithChildren } from "react";
import styles from "./index.module.css";
import { postImageLoader } from "utils";
import PostHeader from "components/posts/post-detail/PostHeader";
import { PostMeta } from "@/components/posts";

interface Props extends PropsWithChildren {
  meta: PostMeta;
}

/**
 * @author ginga
 * @since 10/12/2022 上午11:42
 * @param children 文章内容
 * @param meta 文章前言
 * @return
 **/
const PostLayout: React.FC<Props> = ({ children, meta }) => {
  const { image, title, slug } = meta;
  const imageConfig = { image, slug };

  return (
    <article className={ styles.content }>
      <PostHeader image={ postImageLoader(imageConfig) }
                  title={ title }/>
      { children }
    </article>
  );
};

export default PostLayout;