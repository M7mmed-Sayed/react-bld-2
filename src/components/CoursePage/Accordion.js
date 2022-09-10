import React from "react";
import "../../Css/CoursePage/Accordion.css";
import * as Icon from "react-bootstrap-icons";

const Accordion = ({
  title,
  items,
  index,
  lecture_count,
  content_length_text,
  lecturesDuration,
}) => {
  return (
    <div className="accordion-item" key={index}>
      <h2 className="accordion-header" id={`heading${index}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${index}`}
          aria-expanded="false"
          aria-controls={`collapse${index}`}
        >
          <div className="accordion-button-title"> {title} </div>
          <div className="accordion-button-details">
            {lecture_count} lecture • {lecturesDuration(content_length_text)}
          </div>
        </button>
      </h2>
      <div
        id={`collapse${index}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${index}`}
        data-bs-parent="#courseContentAccordion"
      >
        <div className="accordion-body">
          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                // className="udi udi-play-circle"
              >
                <div>
                  {item.icon_class === "udi udi-play-circle" ? (
                    <Icon.PlayCircleFill />
                  ) : (
                    <Icon.FileEarmark />
                  )}{" "}
                  {item.title}
                </div>
                <div> {item.content_summary}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
