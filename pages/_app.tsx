import 'styles/globals.css';
import type { AppProps } from 'next/app';
import React from "react";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <meta name={ "viewport" } content={ "width=device-width, initial-scale=1" }/>

      </Head>
      <Component { ...pageProps } />
    </Layout>
  );
};

export default App;
