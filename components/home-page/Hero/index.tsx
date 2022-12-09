import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import gingaIcon from "@/images/site/ginga.jpg";

const Hero: React.FC = () => {
  const { hero, image } = styles;

  return (
    <section className={ hero }>
      <div className={ image }>
        <Image src={ gingaIcon }
               alt={ "A image showing ginga" }
               width={ 300 }
               height={ 300 }/>
      </div>
      <h1>Hi, I'm Ginga</h1>
      <p>
        I blog about web development, especially frontend frameworks like React or Vue.
      </p>
    </section>
  );
};

export default Hero;