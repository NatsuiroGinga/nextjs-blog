import React from "react";
import PostHeader from "@/components/posts/post-detail/PostHeader";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import styles from "./index.module.css";
import { postImageLoader } from "@/utils";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Post } from "@/components/posts";

interface Props extends Post {
}

/**
 * 文章内容
 * @author ginga
 * @since 10/12/2022 上午9:07
 * @param image 文章封面名
 * @param slug 文章唯一标识
 * @param title 文章标题
 * @param content 文章内容
 * @return 文章内容
 **/
const PostContent: React.FC<Props> = ({ image, slug, title, content }) => {
  const headerImageConfig = {
    image,
    slug,
  }
  const customRenderers = {
    paragraph(paragraph: any) {
      const { node } = paragraph;

      if (node.children[0].type === 'image') {
        const image = node.children[0];

        return (
          <div className={ styles.image }>
            <Image
              src={ postImageLoader({ image: image.url, slug }) }
              alt={ image.alt }
              width={ 600 }
              height={ 300 }
            />
          </div>
        );
      }

      return <p>{ paragraph.children }</p>;
    },

    code(code: any) {
      const { language, value } = code;
      return (
        <SyntaxHighlighter
          style={ atomDark }
          language={ language }
          children={ value }
        />
      );
    },
  };

  return (
    <article className={ styles.content }>
      <PostHeader title={ title } image={ postImageLoader(headerImageConfig) }/>
      <ReactMarkdown renderers={ customRenderers }>{ content }</ReactMarkdown>
    </article>
  );
};

export default PostContent;