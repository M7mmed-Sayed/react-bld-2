import React from "react";
import "../../Css/CoursePage/CourseRequirements.css";

function CourseRequirements({ requirements }) {
  if(!requirements)return <></>
  return (
    <div className="CourseRequirements">
      <h2>Requirements</h2>
      <ul className="CourseRequirements-ul">
        {requirements.map((element, index) => (
          <li key={index + 1}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseRequirements;
