import React from "react";
import PostHeader from "components/posts/post-detail/PostHeader";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import styles from "./index.module.scss";
import { postImageLoader } from "utils";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import { Post } from "components/posts";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import ts from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import nginx from "react-syntax-highlighter/dist/cjs/languages/prism/nginx";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("ts", ts);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("nginx", nginx);

interface PostContentProps extends Post {
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
const PostContent: React.FC<PostContentProps> = ({
  image,
  slug,
  title,
  content
}) => {

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