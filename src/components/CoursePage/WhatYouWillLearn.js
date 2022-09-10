import React from "react";
import "../../Css/CoursePage/WhatYouWillLearn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";

function WhatYouWillLearn() {
  return (
    <div className="whatYouWillLearn">
      <h2>What You Will Learn</h2>
      <ul className="whatYouWillLearn-ul">
        <li>
          <Icon.Check />
          Create their own Python Programs
        </li>
        <li>
          <Icon.Check />
          Become an experienced Python Programmer{" "}
        </li>
        <li>
          <Icon.Check />
          Parse the Web and Create their own Games
        </li>
      </ul>
    </div>
  );
}

export default WhatYouWillLearn;
