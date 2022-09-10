import React, { useState } from "react";
import "../../Css/CoursePage/Accordion.css";
const Accordion = ({
  title,
  items,
  index,
  lecture_count,
  content_length_text,
  lecturesDuration,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>
          <span>{isActive ? "^ " : "v "}</span>
          {title}
          {lecture_count} lecture • {lecturesDuration(content_length_text)}
        </div>
      </div>
      {isActive && (
        <div className="accordion-content">
          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                // className="udi udi-play-circle"
              >
                {item.title} {"          "}
                {item.content_summary}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Accordion;
