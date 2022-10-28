import React from "react";
import {Helmet} from "react-helmet";
import PrivacyBanner from "../../component/Banner/PrivacyBanner";
import PrivacySection from "../../section/Privacy";

export default function Privacy() {
  return (
    <div className="Privacy">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Privacy Policy - AceIPM</title>
      </Helmet>
      <PrivacyBanner />
      <PrivacySection />
    </div>
  );
}
