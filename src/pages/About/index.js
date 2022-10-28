import React from "react";
import AboutBanner from "../../component/Banner/AboutBanner";
import AboutSection from "../../section/About";
import {Helmet} from "react-helmet";

export default function About() {
  return (
    <div className="About">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us - AceIPM</title>
      </Helmet>
      <AboutBanner />
      <AboutSection />
    </div>
  );
}
