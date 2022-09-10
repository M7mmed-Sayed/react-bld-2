import React from "react";
import "../../Css/CoursePage/CourseDescription.css";

function CourseDescription({ description,forWho }) {
  return (
    <div className="CourseDescription">
      <h2>Description</h2>

      <div className="show-more--container--3W59b">{description}</div>
      <h3>Who this course is for:</h3>
      {forWho}
    </div>
  );
}

export default CourseDescription;
