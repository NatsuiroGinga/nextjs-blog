import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import { postImageLoader, postLoader } from "@/utils/loader";

interface Props {
  post: Post;
}

const PostItem: React.FC<Props> = (props) => {
  const { post } = props;
  const { date, excerpt, image, slug, title } = post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li className={ styles.post }>
      <Link href={ postLoader(slug) }>
        <div className={ styles.image }>
          <Image src={ postImageLoader({ image, slug }) }
                 alt={ title }
                 width={ 300 }
                 height={ 200 }
                 layout={ "responsive" }/>
        </div>
        <div className={ styles.content }>
          <h3>{ title }</h3>
          <time>{ formattedDate }</time>
          <p>{ excerpt }</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;