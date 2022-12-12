import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {

  render() {
    return (
      <Html lang="ch">
        <Head/>
        <body>
        <Main/>
        <NextScript/>
        <div id={ "notifications" }></div>
        </body>
      </Html>
    );
  }

}

export default MyDocument;