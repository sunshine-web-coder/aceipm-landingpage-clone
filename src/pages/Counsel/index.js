import React from "react";
import {Helmet} from "react-helmet";
import CounselBanner from "../../component/Banner/CounselBanner";
import CounselSection from "../../section/Counsel";

export default function Counsel() {
  return (
    <div className="Counsel">
      <Helmet>
        <meta charSet="utf-8" />
        <title>IPMAT Preparation Counsel - AceIPM</title>
      </Helmet>
      <CounselBanner />
      <CounselSection />
    </div>
  );
}
