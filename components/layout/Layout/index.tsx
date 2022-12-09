import React, { PropsWithChildren } from "react";
import MainNavigation from "@/components/layout/MainNavigation";

interface Props extends PropsWithChildren {
}

const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <MainNavigation/>
      <main>{ children }</main>
    </>
  );
};

export default Layout;