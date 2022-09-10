import React from "react";
import "../../Css/CoursePage/StudentReview.css";
import reviewContext from "../../Data/reviewContext";
import * as Icon from "react-bootstrap-icons";

function StudentReview() {
  let total = 0;
  reviewContext.ratingDistribution.map((x) => (total += x.count));
  let ratingCount = {};
  reviewContext.ratingDistribution.map(
    (x) => (ratingCount[x.rating] = Math.round((x.count / total) * 100))
  );
  return (
    <div className="student-container-review">
      <h2 className="ratingHeading">Student feedback</h2>

      <div className="ratingBox">
        <div className="rating">
          <div className="averageRating">
            {reviewContext.averageRating.toFixed(1)}
          </div>
          <div className="starLine">
            <Icon.StarFill className="starOrange " />
            <Icon.StarFill className="starOrange" />
            <Icon.StarFill className="starOrange" />
            <Icon.StarFill className="starOrange" />
            <Icon.StarFill className="starOrange" />
          </div>
          <div>Course Rating</div>
        </div>
        <div className="ratingLineStarBox">
          <div className="ratingLineStarContainer">
            <div className="ratingLine">
              <div
                className="ratingLineFill"
                style={{
                  width: `${ratingCount[5]}%`,
                }}
              ></div>
              <div></div>
            </div>
            <div className="starLine">
              <Icon.StarFill className="starOrange" />
              <Icon.StarFill className="starOrange" />
              <Icon.StarFill className="starOrange" />
              <Icon.StarFill className="starOrange" />
              <Icon.StarFill className="starOrange" />
            </div>
            <span className="ratingCount">{ratingCount[5]}%</span>
          </div>
          <div className="ratingLineStarContainer">
            <div className="ratingLine">
              <div
                className="ratingLineFill"
                style={{
                  width: `${ratingCount[4]}%`,
                }}
              ></div>
              <div></div>
            </div>
            <div className="starLine">
              <Icon.StarFill className="starOrange" />
              <Icon.StarFill className="starOrange " />
              <Icon.StarFill className="starOrange " />
              <Icon.StarFill className="starOrange " />
              <Icon.Star className="starOrange " />
            </div>
            <span className="ratingCount">{ratingCount[4]}%</span>
          </div>
          <div className="ratingLineStarContainer">
            <div className="ratingLine">
              <div
                className="ratingLineFill"
                style={{
                  width: `${ratingCount[3]}%`,
                }}
              ></div>
              <div></div>
            </div>
            <div className="starLine">
              <Icon.StarFill className="starOrange " />
              <Icon.StarFill className="starOrange " />
              <Icon.StarFill className="starOrange " />
              <Icon.Star className="starOrange " />
              <Icon.Star className="starOrange " />
            </div>
            <span className="ratingCount">{ratingCount[3]}%</span>
          </div>
          <div className="ratingLineStarContainer">
            <div className="ratingLine">
              <div
                className="ratingLineFill"
                style={{
                  width: `${ratingCount[2]}%`,
                }}
              ></div>
              <div></div>
            </div>
            <div className="starLine">
              <Icon.StarFill className="starOrange " />
              <Icon.StarFill className="starOrange " />
              <Icon.Star className="starOrange " />
              <Icon.Star className="starOrange " />
              <Icon.Star className="starOrange " />
            </div>
            <span className="ratingCount">{ratingCount[2]}%</span>
          </div>
          <div className="ratingLineStarContainer">
            <div className="ratingLine">
              <div
                className="ratingLineFill"
                style={{
                  width: `${ratingCount[1]}%`,
                }}
              ></div>
              <div></div>
            </div>
            <div className="starLine">
              <Icon.StarFill className="starOrange " />
              <Icon.Star className="starOrange " />
              <Icon.Star className="starOrange " />
              <Icon.Star className="starOrange " />
              <Icon.Star className="starOrange " />
            </div>
            <span className="ratingCount">{ratingCount[1]}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentReview;
