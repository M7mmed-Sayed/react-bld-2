import React, { useState } from "react";
import CourseContentData from "../../Data/CourseContentData";
import "../../Css/CoursePage/CourseContent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "./Accordion";

function CourseContent() {
  const { data } = CourseContentData;
  const [expandBtnValue, setExpandBtnValue] = useState("Expand");
  const lecturesDuration = (content_length) => {
    let hmsFormat = content_length.split(":");
    if (hmsFormat.length < 3) hmsFormat = ["0", ...hmsFormat];
    if (hmsFormat[2] > 0) ++hmsFormat[1];
    let duration = ``;
    if (hmsFormat[0] > 0) duration += `${parseInt(hmsFormat[0])}h`;
    duration += `${parseInt(hmsFormat[1])}min`;
    return duration;
  };
  const handleExpandCollapseButton = (e) => {
    let accordionButtons = document.getElementsByClassName("accordion-button");
    Array.from(accordionButtons).forEach((item) => {
      item.classList.toggle("collapsed");
    });

    let accordionBodies = document.getElementsByClassName("accordion-collapse");
    Array.from(accordionBodies).forEach((item) => {
      item.classList.toggle("collapse");
    });
    setExpandBtnValue(expandBtnValue === "Collapse" ? "Expand" : "Collapse");
  };
  return (
    <div className="courseContent">
      <h2>Course content</h2>
      <div className="courseContentHeader">
        <div>
          {data.sections.length} sections • {data.num_of_published_lectures}
          lectures • {lecturesDuration(data.estimated_content_length_text)} total length
        </div>
        <button
          type="button"
          data-purpose="expand-toggle"
          aria-expanded="true"
          className="expandBtn"
          onClick={handleExpandCollapseButton}
        >
          <span>{expandBtnValue} all sections</span>
        </button>
      </div>
      <div className="accordion" id="courseContentAccordion">
        {data.sections.map(
          ({ title, items, index, lecture_count, content_length_text }) => (
            <Accordion
              title={title}
              items={items}
              index={index}
              lecture_count={lecture_count}
              content_length_text={content_length_text}
              lecturesDuration={lecturesDuration}
            />
          )
        )}
      </div>
    </div>
  );
}

export default CourseContent;
