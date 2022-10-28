import React from "react";
import {Helmet} from "react-helmet";
import RefundPolicyBanner from "../../component/Banner/RefundPolicyBanner";
import RefundPolicySection from "../../section/RefundPrivacy";

export default function RefundPolicy() {
  return (
    <div className="RefundPolicy">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Refund Policy - AceIPM</title>
      </Helmet>
      <RefundPolicyBanner />
      <RefundPolicySection />
    </div>
  );
}
