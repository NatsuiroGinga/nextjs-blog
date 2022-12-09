import React from "react";
import Logo from "@/components/layout/Logo";
import Link from "next/link";
import styles from "./index.module.css";

const MainNavigation: React.FC = () => {
  const { header } = styles;

  return (
    <header className={ header }>
      <Link href="/">
        <Logo/>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;