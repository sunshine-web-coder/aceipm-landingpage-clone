import React from "react";
import {Helmet} from "react-helmet";
import TermsBanner from "../../component/Banner/TermsBanner";
import TermsSection from "../../section/Terms";

export default function Terms() {
  return (
    <div className="Terms">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Terms Of Service - AceIPM</title>
      </Helmet>
      <TermsBanner />
      <TermsSection />
    </div>
  );
}
