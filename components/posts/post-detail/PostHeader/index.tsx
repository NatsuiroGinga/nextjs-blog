import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
}

/**
 * @author ginga
 * @since 10/12/2022 上午9:09
 * @param title 文章标题
 * @param image 文章封面路径
 * @return
 **/
const PostHeader: React.FC<Props> = ({ image, title }) => {
  return (
    <header className={ styles.header }>
      <h1>{ title }</h1>
      <Image src={ image }
             alt={ title }
             width={ 200 }
             height={ 150 }
             priority={ true }/>
    </header>
  );
};

export default PostHeader;