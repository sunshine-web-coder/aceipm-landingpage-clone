import React from "react";
import BlogSection from "../../section/Blog";
import {Helmet} from "react-helmet";
import BlogBanner from "../../component/Banner/BlogBanner";

export default function Blog() {
  return (
    <div className="Blog">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog - AceIPM</title>
      </Helmet>
      <BlogBanner />
      <BlogSection />
    </div>
  );
}
