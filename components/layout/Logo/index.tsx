import React from "react";
import styles from "./index.module.css";

const Logo: React.FC = () => {
  const { logo } = styles;

  return (
    <div className={ logo }>
      Ginga's Next Blog
    </div>
  );
};

export default Logo;