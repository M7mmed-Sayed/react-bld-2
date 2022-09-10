import React, { useState } from "react";
import CourseContent from "../components/CoursePage/CourseContent";
import CourseDescription from "../components/CoursePage/CourseDescription";
import CourseHeader from "../components/CoursePage/CourseHeader";
import CourseRequirements from "../components/CoursePage/CourseRequirements";
import Instructor from "../components/CoursePage/Instructor";
import InstructorList from "../components/CoursePage/InstructorList";
import StudentReview from "../components/CoursePage/StudentReview";
import ReviewContainer from "../components/CoursePage/ReviewContainer";
import ReviewList from "../components/CoursePage/ReviewList";
import WhatYouWillLearn from "../components/CoursePage/WhatYouWillLearn";
import "../Css/CoursePage/CoursePage.css";
import SideCard from "../components/CoursePage/SideCard";

let courseObject;

fetch(`http://localhost:3009/data?id=8324`)
  .then(async (response) => response.json())
  .then(async (data) => {
    console.log(data);
    courseObject = data[0];
  });
function CoursePage(props) {
  return (
    <>
      <div className="course-page-main-content">
         <SideCard />
        <CourseHeader data={props.course} />
        <div className="centre-body">
          <WhatYouWillLearn />
          <CourseContent data={courseObject?.curriculum_context?.data} />
          <CourseRequirements
            requirements={courseObject?.details?.Requirements}
          />
          <CourseDescription
            description={courseObject?.details?.description}
            forWho={courseObject?.details?.for_who}
          />
          <InstructorList />
          <StudentReview />
          <ReviewList />
        </div>
      </div>
    </>
  );
}

export default CoursePage;
