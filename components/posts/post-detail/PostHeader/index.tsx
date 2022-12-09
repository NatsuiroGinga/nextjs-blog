import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
}

const PostHeader: React.FC<Props> = (props) => {
  const { image, title } = props;

  return (
    <header className={ styles.header }>
      <h1>{ title }</h1>
      <Image src={ image }
             alt={ title }
             width={ 200 }
             height={ 150 }/>
    </header>
  );
};

export default PostHeader;