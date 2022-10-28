import React from "react";
import CourseSection from "../../section/Course";
import {Helmet} from "react-helmet";
import CourseBanner from "../../component/Banner/CourseBanner";

export default function Course() {
  return (
    <div className="Course">
      <Helmet>
        <meta charSet="utf-8" />
        <title>IPMAT Preparation Course - AceIPM</title>
      </Helmet>
      <CourseBanner />
      <CourseSection />
    </div>
  );
}
